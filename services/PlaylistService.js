const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'})

class PlaylistService {
    
    refreshPlaylist(playlist) {

    }

    getPlaylist(playlistConfig) {
        const params = {
            Bucket: playlistConfig.bucket,
            Prefix: playlistConfig.folder || ''
        };
        return new Promise((resolve, reject) => {
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    let playlist = this.s3ContentAdapter(data.Contents);
                    resolve(playlist)
                }
            })
        })
    }

    s3ContentAdapter(contents) {
        const chapters = [];
        for(let a = 0, item; item = contents[a]; a++) {
            let parts = item.Key.split('/');
            let title = parts[parts.length - 1]
            let chapterTitle = parts[parts.length - 2];
            let chapter;
            for ( let key in chapters) {
                if (chapters[key]['title'] == chapterTitle) {
                    chapter = chapters[key];
                }
            }
            if (!chapter) {
                chapter = {
                    title: chapterTitle,
                    items: []
                }
                chapters.push(chapter);
            }
            chapter.items.push({
                title: title.replace(/\.\w+$/, ''),
                modified: item.LastModified.toDateString(),
                size: Math.round(item.Size * .001)
            });

        }
        return chapters;
    }

    getChapter() {

    }
}

module.exports = PlaylistService
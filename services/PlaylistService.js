const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'})

class PlayListService {
    
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
                    resolve(this.s3ContentAdapter(data.Contents))
                }
            })
        })
    }

    s3ContentAdapter(contents) {
        const chapters = {};
        for(let a = 0, item; item = contents[a]; a++) {
            let parts = item.Key.split('/');
            let title = parts[parts.length - 1]
            let chapterTitle = parts[parts.length - 2]
            if (!chapters.hasOwnProperty(chapterTitle)) {
                chapters[chapterTitle] = []
            }
            chapters[chapterTitle].push({
                title: title.replace(/\.\w+$/, ''),
                modified: item.LastModified,
                size: Math.round(item.Size * .001)
            });

        }
        return chapters;
    }

    getChapter() {

    }
}

module.exports = PlayListService
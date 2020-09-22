const AWS = require('aws-sdk');
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

const streamVideo = (id, req, res) => {
    var params = {Bucket: 'myBucket', Key: 'myImageFile.jpg'};
    var file = require('fs').createWriteStream('/path/to/file.jpg');
    s3.getObject(params).createReadStream().pipe(file);
}


export default (req, res) => {
    console.log(req, res);
    res.end('mic check')
}
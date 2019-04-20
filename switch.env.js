/**
 * 根据命令行运行参数，修改 /miniprogram/config.js 里面的项目配置信息
 * 即动态的将 /env/dev 下的配置文件的内容写入到 /miniprogram/config.js 中
 */

const fs = require('fs');
const path = require('path');
const callfile = require('child_process'); 

//源文件
const sourceFiles = {
    prefix: '/env/',
    dev: 'dev.json',
    prod: 'prod.json'
};
//目标文件
const targetFile = {
    prefix: '/miniprogram/',
    filename: 'config.js'
};

const preText = 'module.exports = ';

// 获取命令行参数
const cliArgs = process.argv.splice(2);
const env = cliArgs[0];

// 判断是否为真是环境
const isProd = env.indexOf('prod') > -1;

// 根据不同环境选择不同的源文件
const sourceFile = isProd ? sourceFiles.prod : sourceFiles.dev;

// 读取文件
fs.readFile(__dirname + sourceFiles.prefix + sourceFile,
    (err, data) => {
        if (err) {
            throw new Error(`Error occurs when reading file ${sourceFile}.\nError detail: ${err}`)
            process.exit(1);
        }

        // 写入文件
        fs.writeFile(__dirname + targetFile.prefix + targetFile.filename, preText + data, 'utf8', (err) => {
            if (err) {
                throw new Error(`error occurs when reading file ${sourceFile}. Error detail: ${err}`);
                process.exit(1)
            } else if (isProd){
                callfile.execFile("upload.sh")
            }
        })

    });
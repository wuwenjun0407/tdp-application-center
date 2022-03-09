/* eslint-disable camelcase */
import type { Plugin } from 'vite';

import { exists, mkdir, writeFile } from 'fs';
import child_process from 'child_process';

// 写入文件
function writeVersion(versionFile, content) {
    writeFile(versionFile, content, (err) => {
        if (err) {
            throw err;
        }
    });
}

// 获取commit信息
function getGitCommit() {
    const commit = child_process.execSync('git show -s --format=%H').toString().trim();
    const commitUserName = child_process.execSync('git show -s --format=%cn').toString().trim();
    const commitUserMail = child_process.execSync('git show -s --format=%ce').toString().trim();
    const commitDateObj = new Date(child_process.execSync('git show -s --format=%cd').toString());
    const commitDate = `${commitDateObj.getFullYear() + '-' + (commitDateObj.getMonth() + 1) + '-' + commitDateObj.getDate() + ' ' + commitDateObj.getHours() + ':' + commitDateObj.getMinutes()}`;
    const nowDate = new Date();
    const buildDate = `${nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' ' + nowDate.getHours() + ':' + nowDate.getMinutes()}`;

    return { commit, commitUserName, commitUserMail, commitDate, buildDate };
}

export function viteBuildVision(options): Plugin {
    return {
        name: 'vite:version',
        apply(config, { command }) {
            return command === 'build';
        },
        buildStart() {
            const ENV = options.env ?? process.env;
            const commitInfo = getGitCommit();
            const dirpath = ENV.INIT_CWD + (options.versionDirectory ?? '/public');
            const versionfile = dirpath.endsWith('/') ? dirpath + options.fileName : dirpath + '/' + options.fileName;
            const text = options.version ?? commitInfo.commit; // 获取环境变量自定义version配置信息
            const content = JSON.stringify({
                version: text,
                commitUserName: options.commitShow ? commitInfo.commitUserName : '',
                commitUserMail: options.commitShow ? commitInfo.commitUserMail : '',
                commitDate: options.commitShow ? commitInfo.commitDate : '',
                buildDate: options.commitShow ? commitInfo.buildDate : ''
            });
            exists(dirpath, (exist) => {
                console.log(exist, 'exist', versionfile, content);
                if (exist) {
                    writeVersion(versionfile, content);
                    return;
                }
                mkdir(dirpath, (err) => {
                    if (err) {
                        throw err;
                    }
                    writeVersion(versionfile, content);
                });
            });
            // console.log(fileName, content);
        },
        closeBundle() {}
    };
}

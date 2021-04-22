const puppeteer = require('puppeteer'),
		BlinkDiff = require('blink-diff'),
		ora = require('ora'),
    logger = require('../config/log'),
    getSalt = require('./getSalt')
	
const spinner = ora('Loading viewDiff...').start()
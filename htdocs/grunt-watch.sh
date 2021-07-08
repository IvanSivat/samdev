#!/bin/bash
php bin/magento dev:source-theme:deploy --type=less --locale=en_GB --theme=Samdev/default && grunt watch

# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class FocusonItem(scrapy.Item):
    # define the fields for your item here like:
    # 主体名称
    name = scrapy.Field()
    # 唯一标志
    idCardOrOrgCode = scrapy.Field()
1、查询人员资产信息
   url: http://xxxx/hongbao/user/{id}
   返回值：
   {
    "msg": "成功",
    "code": 0,
    "data": {
			"amount": 5417.78,
			"holdAmount": 2887817.99
		}
	}

2、查询红包标签
   url: http://xxxx/hongbao/tag
   返回值：
   {
    "msg": "成功",
    "code": 0,
    "data": {
			1:"爱岗敬业",
			2:"乐于分享",
			3:"专业牛人",
			4:"热诚服务",
			5:"积极协作",
			6:"创意脑洞",
		}
	}

3、发送激励红包接口
	url: http://xxxx/hongbao/send
	请求类型：POST
	请求参数：{"amount":20.3,"comment":"感谢解围","tag":2,"toMemberIdList":[123,111]}
	返回值：
	{
    "msg": "成功",
    "code": 0
	}

4、查询人员红包记录
	url：http://xxxx/hongbao/user/log/income/{id}?limit=20
	请求参数：
		limit（返回红包记录限制，最多100）
	返回值：
	{
    "msg": "成功",
    "code": 0,
    "data": [
		{
			"tag": "爱岗敬业",
			"amount": 38
		},
		{
			"tag": "专业牛人",
			"amount": 200
		}
		]
	}

5、查询人员红包排行榜
	url：http://xxxx/hongbao/top/user
	请求参数：
		limit（返回红包记录限制，最多100）
	返回值：
	{
    "msg": "成功",
    "code": 0,
    "data": [
		{
			"name":"刘诗诗",
			"avatar":"http://test.staticoss.upesn.com/1/711/201503/2/1425263565TBfT.jpg"
			"amount": 5980
		},
		{
			"name": "张思思",
			"avatar":"http://test.staticoss.upesn.com/1/711/201503/2/1425263565TBfT.jpg"
			"amount": 5878
		},
		{
			"name": "张思起",
			"avatar":"http://test.staticoss.upesn.com/1/711/201503/2/1425263565TBfT.jpg"
			"amount": 4876
		}
		]
	}

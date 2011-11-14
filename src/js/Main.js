Ext.setup({
	icon:'icon.png',
	tabletStartupScreen:'tablet_startup.png',
	phoneStartupScreen:'phone_startup.png',
	glossOnIcon:false,
	
	onReady:function(){
		
		var panel1 = new Ext.Panel({
			
			fullscreen:true,
			dockedItems:[{
				xtype:'toolbar',
				dock:'top',
				layout:{
					pack:'center'
				},
				items:[{
					xtype:'textfield',
					name:'id',
					value:'id', //id칸을 클릭하면 id 구문이 사라지게 해야 한다.	
					width:'100px',
			
				},{
					xtype:'passwordfield',
					name:'password',
					width:'100px',
					
				},{
					xtype:'button',
					iconMask:true,
						ui:'회원가입',
						text:'회원가입',
						handler:function(){
							alert("회원가입");
						}
				},{
					xtype:'button',
					iconMask:true,
					ui:'로그인',
					text:'로그인',
				}]
			}]
		})
		
	}
});

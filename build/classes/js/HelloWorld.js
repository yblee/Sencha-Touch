Ext.setup({
	icon:'icon.png',
	tabletStartupScreen:'tablet_startup.png',
	phoneStartupScreen:'phone_startup.png',
	glossOnIcon:false,
	onReady:function(){
		new Ext.Panel({
			fullscreen:true,
			html: 'hello sencha touch'
		}
		);
	}
});

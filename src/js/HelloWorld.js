Ext.setup({
	icon:'icon.png',
	tabletStartupScreen:'tablet_startup.png',
	phoneStartupScreen:'phone_startup.png',
	glossOnIcon:false,
	
	onReady:function(){
		
		Ext.regModel('Sex', {
			fields:[
			{name:'sex', type:'string'},
			{name:'title', type:'string'}
			]
		});
		
		
		var sexStore = new Ext.data.JsonStore({
			data:[
			{sex:'1', title:'남'},
			{sex:'2', title:'여'}
			],
			model:'Sex',
			autoLoad:true,
			autoDestroy:true
		});
		
		var form =	new Ext.form.FormPanel({
			
			fullscreen:true,
			
			
			items:[{
				xtype:'fieldset',
				title:'회원가입',
				instructions:'각 항목을 적어주세요',
				
				items:[{
					xtype:"textfield",
			//		width:'300px',
					name:'idname',
					label:'아이디',
				},{
					xtype:"passwordfield",
					name:'password',
					label:'패스워드',
				},{		
					xtype:'textfield',
					name:'name',
					label:'이름',
					useClearIcon:'true',
					autoCapitalize:'true'
				},{
					xtype:'datepickerfield',
					name:'birthday',
					label:'생년월일',
					useClearIcon:false
				},{
					layout:{
						type:'hbox',
					},
					items:[{
						xtype: 'selectfield',
						name:'sex',
						width:'50%',
						labelWidth:150,
						label:'성별',
						valueField:'sex',
						displayField:'title',
						store:sexStore
					},{
						xtype:'numberfield',
						label:'나이',
						width:'50%',
						labelWidth:100,
						value:25,
						maxValue:19,
						minValue:50,
					}]
					},{
						layout:{
							type:'hbox',
							pack:'center'
						},
						items:[{
							xtype:'button',
							name:'number',
							width:100,
							bgcolor:'red',
							text:'등록',
							handler:function(){
								alert("등록합니다");
								
							}
						},{
							xtype:'spacer', width:'5%'						
						},{
							xtype:'button',
							name:'number',
							width:100,
							bgcolor:'red',
							text:'취소',
							handler:function(){
								alert("등록을 취소하겠습니까?");
								
							}
						}
						]
						
						
				}]
				
			}]
			}
		);
	}
});

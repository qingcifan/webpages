// JavaScript Document

var vPageMap=new Array();
for(var i=0;i<8;i++){
	vPageMap[i]=new Array(); 
	for(var j=0;j<8;j++){
		vPageMap[i][j]="1";
	}
}
/*
var vPageMap =  new Array();//pageMap[8][9]
for (i = 0; i < 8; i++)
{
	vPageMap[i] = new Array();
}

vPageMap[0][0] = "1";
vPageMap[1][0] = "1";
vPageMap[2][0] = "1";
vPageMap[3][0] = "1";
vPageMap[4][0] = "1";
vPageMap[5][0] = "1";
vPageMap[6][0] = "1";
vPageMap[7][0] = "1";
vPageMap[0][1] = "1";
vPageMap[0][2] = "1";
vPageMap[0][3] = "1";
vPageMap[0][4] = "1";
vPageMap[0][5] = "1";
vPageMap[0][6] = "1";
vPageMap[0][7] = "1";
vPageMap[0][8] = "1";

vPageMap[1][1] = "1";
vPageMap[1][2] = "1";
vPageMap[1][3] = "1";

vPageMap[1][4] = "1";

vPageMap[1][5] = "1";
vPageMap[1][6] = "1";
vPageMap[1][7] = "1";
vPageMap[1][8] = "1";

vPageMap[2][1] = "1";
vPageMap[2][2] = "1";
vPageMap[2][3] = "1";

vPageMap[2][4] = "1";

vPageMap[2][5] = "1";
vPageMap[2][6] = "1";
vPageMap[2][7] = "1";
vPageMap[2][8] = "1";

vPageMap[2][9] = 0;


vPageMap[3][1] = "1";
vPageMap[3][2] = "1";
vPageMap[3][3] = "1";
vPageMap[3][4] = "1";
vPageMap[3][5] = "1";
vPageMap[3][6] = "1";
vPageMap[3][7] = "1";
vPageMap[3][8] = "1";

vPageMap[4][1] = "1";
vPageMap[4][2] = "1";
vPageMap[4][3] = "1";

vPageMap[4][4] = "1";

vPageMap[4][5] = "1";
vPageMap[4][6] = "1";
vPageMap[4][7] = "1";
vPageMap[4][8] = "1";

vPageMap[5][1] = "1";
vPageMap[5][2] = "1";
vPageMap[5][3] = "1";
vPageMap[5][4] = "1";
vPageMap[5][5] = "1";
vPageMap[5][6] = "1";
vPageMap[5][7] = "1";
vPageMap[5][8] = "1";

vPageMap[6][1] = "1";
vPageMap[6][2] = "1";
vPageMap[6][3] = "1";
vPageMap[6][4] = "1";
vPageMap[6][5] = "1";
vPageMap[6][6] = "1";
vPageMap[6][7] = "1";
vPageMap[6][8] = "1";

vPageMap[7][1] = "1";
vPageMap[7][2] = "1";
vPageMap[7][3] = "1";
vPageMap[7][4] = "1";
vPageMap[7][5] = "1";
vPageMap[7][6] = "1";
vPageMap[7][7] = "1";
vPageMap[7][8] = "1";
*/
if(parent.voipType!= null)
	var VoipType = parent.voipType;
else
	var VoipType = "SIP";
if (typeof(vPageMap) == "undefined")
	top.window.location.href="test.com";

var sysUserName = '1';
var sptUserName = '0';
var ctcqdUserName = 'ctcqd';
var bandRegName = 'regAcc';
var usrUserName = 0;
var iCount = 0;
var sCount = 0;
var MenuArray = new Array();
var SubMenuArray = new Array();
//QS->0
//Sta->1
//Sta->1
if(vPageMap[1][0] == '1'){
	SubMenuArray[sCount++] = new SubMenuNodeinfo("");
	if(vPageMap[1][1] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-device.asp", "");
		
	else if(vPageMap[1][2] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-network.asp", "");
	else if(vPageMap[1][3] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-user.asp", "");
	else if(vPageMap[1][4] == '1')
		if(VoipType == 'H.248')
			MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-VoIP248.asp", "");
		else
			MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-VoIP.asp", "");	
	else if(vPageMap[1][5] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "״̬", "/cgi-bin/sta-acs.asp", "");							
}

if(vPageMap[1][1] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�豸��Ϣ", "/cgi-bin/sta-device.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("�����豸��Ϣ");//1
}

if(vPageMap[1][2] == '0'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�������Ϣ", "/cgi-bin/sta-network.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("�������Ϣ");//2
}

if(vPageMap[1][3] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�û�����Ϣ", "/cgi-bin/sta-user.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("�û�����ϸ��Ϣ");
}
	
if(vPageMap[1][4] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "���������Ϣ", "/cgi-bin/sta-VoIP.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("���������ϸ��Ϣ");
}

if(vPageMap[1][5] == '1')
{
	MenuArray[iCount++] = new MenuNodeConstruction(2, "Զ�̹���״̬", "/cgi-bin/sta-acs.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("Զ�̹���״̬");
}
	
//Net->2

if(vPageMap[2][0] == '1'){
	SubMenuArray[sCount++] = new SubMenuNodeinfo("");
	if(vPageMap[2][1] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/info.html", "");
	else if(vPageMap[2][2] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-binding.asp", "");
	else if(vPageMap[2][3] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/net-dhcp.html", "");
	else if(vPageMap[2][4] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-wlan.asp", "");
	else if(vPageMap[2][5] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-tr069.asp", "");
	else if(vPageMap[2][9] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-phoneapp.asp", "");
	else if(vPageMap[2][6] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-qos.asp", "");
	else if(vPageMap[2][7] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-time.asp", "");
	else if(vPageMap[2][8] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/net-routeset.asp", "");										
}

if(vPageMap[2][1] == '1'){
		MenuArray[iCount++] = new MenuNodeConstruction(2, "�������", "info.html", "");
		SubMenuArray[sCount++] = new SubMenuNodeinfo("�������");
}
	
if(vPageMap[2][2] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "������", "/cgi-bin/net-binding.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("������");
}
	
if(vPageMap[2][3] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "LAN���ַ����", "/net-dhcp.html", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("LAN���ַ����");
}
	
if(vPageMap[2][4] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "WLAN����", "/cgi-bin/net-wlan.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("WLAN����");
}
	
if(vPageMap[2][5] == '1')
{
	MenuArray[iCount++] = new MenuNodeConstruction(2, "Զ�̹���", "/cgi-bin/net-tr069.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("Զ�̹���");
}

if(vPageMap[2][9] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�ֻ����ӹ���", "/cgi-bin/net-phoneapp.asp", "");
if(vPageMap[2][6] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "QoS", "/cgi-bin/net-qos.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("QoS");
}

if(vPageMap[2][7] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "ʱ�����", "/cgi-bin/net-time.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("ʱ�����");
}
	
if(vPageMap[2][8] == '1'){
	MenuArray[iCount++] = new MenuNodeConstruction(2, "·������", "/cgi-bin/net-routeset.asp", "");
	SubMenuArray[sCount++] = new SubMenuNodeinfo("·������");
}

//Sec->3

if(vPageMap[3][0] == '1'){
	if(vPageMap[3][1] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "��ȫ", "account.html", "");
	else if(vPageMap[3][2] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "��ȫ", "/cgi-bin/sec-firewall.asp", "");
	else if(vPageMap[3][3] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "��ȫ", "/cgi-bin/sec-macfilter.asp", "");
	else if(vPageMap[3][4] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "��ȫ", "/cgi-bin/sec-portfilter.asp", "");				
}

if(vPageMap[3][1] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "��������������", "account.html", "");
//	MenuArray[iCount++] = new MenuNodeConstruction(2, "��������������", "/cgi-bin/sec-urlfilter.asp", "");
if(vPageMap[3][2] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "����ǽ", "/cgi-bin/sec-firewall.asp", "");
if(vPageMap[3][3] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "MAC����", "content.html", "");
//	MenuArray[iCount++] = new MenuNodeConstruction(2, "MAC����", "/cgi-bin/sec-macfilter.asp", "");
if(vPageMap[3][4] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�˿ڹ���", "account.html", "");
//MenuArray[iCount++] = new MenuNodeConstruction(2, "�˿ڹ���", "/cgi-bin/sec-portfilter.asp", "");
//App->4

if(vPageMap[4][0] == '1'){
	if(vPageMap[4][1] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-ddns.asp", "");
	else if(vPageMap[4][2] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-natset.asp", "");
	else if(vPageMap[4][3] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-upnp.asp", "");
	else if(vPageMap[4][4] == '1')
		if(VoipType == 'H.248')
			MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-VoIP248.asp", "");
		else
			MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-VoIP.asp", "");
	else if(vPageMap[4][5] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-igmpset.asp", "");
	else if(vPageMap[4][6] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "Ӧ��", "/cgi-bin/app-daily.asp", "");						
}

if(vPageMap[4][1] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "DDNS����", "/cgi-bin/app-ddns.asp", "");
if(vPageMap[4][2] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�߼�NAT����", "/cgi-bin/app-natset.asp", "");
if(vPageMap[4][3] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "UPNP����", "/cgi-bin/app-upnp.asp", "");
if(vPageMap[4][4] == '1')
	if(VoipType == 'H.248')
		MenuArray[iCount++] = new MenuNodeConstruction(2, "����绰����", "/cgi-bin/app-VoIP248.asp", "");
	else
		MenuArray[iCount++] = new MenuNodeConstruction(2, "����绰����", "/cgi-bin/app-VoIP.asp", "");
if(vPageMap[4][5] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "IGMP/MLD����", "/cgi-bin/app-igmpset.asp", "");
if(vPageMap[4][6] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�ճ�Ӧ��", "/cgi-bin/app-daily.asp", "");
//Mag->5

if(vPageMap[5][0] == '1'){
	if(vPageMap[5][1] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/mag-account.asp", "");
	else if(vPageMap[5][2] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/mag-reset.asp", "");
	else if(vPageMap[5][3] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/mag-syslogmanage.asp", "");		
	else if(vPageMap[5][4] == '1')
		MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/mag-diagnose.asp", "");		
}

if(vPageMap[5][1] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�û�����", "/cgi-bin/mag-account.asp", "");
if(vPageMap[5][2] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "�豸����", "/cgi-bin/mag-reset.asp", "");
if(vPageMap[5][3] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "��־�ļ�����", "/cgi-bin/mag-syslogmanage.asp", "");
if(vPageMap[5][4] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "ά��", "/cgi-bin/mag-diagnose.asp", "");
//Diag->6
if(vPageMap[6][0] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(1, "���", "/cgi-bin/diag-quickdiagnose.asp", "");
//if(vPageMap[6][1] == '1')
//	MenuArray[iCount++] = new MenuNodeConstruction(2, "�������", "/cgi-bin/diag-quickdiagnose.asp", "");
//Help->7
if(vPageMap[7][0] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(1, "����", "/cgi-bin/help.asp", "");
if(vPageMap[7][1] == '1')
	MenuArray[iCount++] = new MenuNodeConstruction(2, "ʹ�ð���", "/cgi-bin/help.asp", "");

MenuArray[iCount++] = new MenuNodeConstruction(0, "", "", "");
SubMenuArray[sCount++] = new SubMenuNodeinfo("");

function SubMenuNodeinfo(Text)
{
	this.Text = Text;
}

function MenuNodeConstruction(Level, Text, Link, Target)
{
    this.Level = Level;
    this.Text = Text;
    this.Link = Link;
    this.Target = Target;
}
/*���ɲ˵�*/
function MakeMainMenu(L1_menu_name, L2_menu_name)
{
	MakeMenu_L2(L2_menu_name, MakeMenu_L1(L1_menu_name));
}
/*һ���˵�*/
var Code;
var Code1;
function MakeMenu_L1(Menu_Text)
{
	var Menu_L2_Start;
	Code1 = '<div id="L1_jpg" class="fixbox"><ul id="L1_menu_jpg">';
	for (iCount = 0; MenuArray[iCount].Level != 0; iCount++)
	{
		if (MenuArray[iCount].Level == 1)
		{
			if (MenuArray[iCount].Text != Menu_Text)
			{
				Code1 += '<li><img src="/img/back_button.jpg"></li>';
			}
			else
			{
				Menu_L2_Start = iCount + 1;//��õ�ǰѡ�е�����
				Code1 += '<li><img src="/img/selected_button.jpg"></li>';
			}
		}
	}

	Code1 += '</ul></div>';
	Code1 += '<div id="L1_menu" class="fixbox"><ul id="L1_menu_txt">';
	for (iCount = 0; MenuArray[iCount].Level != 0; iCount++)
	{
		var str = 'LoadPage(\'' + iCount + '\')';
		var strr = '';

		if (MenuArray[iCount].Level == 1)
		{
			if (MenuArray[iCount].Text != Menu_Text)
			{
				Code1 += '<li class="L1_menu_link"';
			}
			else
			{
				Code1 += '<li class="L1_menu_active"';
			}
			Code1 += 'onclick="toggleSub(this)"><a href="javascript:' + str + '" target="' + MenuArray[iCount].Target + '" >' + MenuArray[iCount].Text + '</a></li>';
		}
	}

	Code1 += '</ul></div>';
	return Menu_L2_Start;
}

function LoadPage(strIndex)
{
	var index = parseInt(strIndex);
	console.log("index:"+index);

	var url='test1.html';
	$.ajax({
		url:url,
		cache:false,
		success:function(html){   
			$("#ifm_content").html(html);
		}  
	});
//	$("#iframe_content").attr("src",MenuArray[index].Link);//ˢ��ҳ��
}
/*�����˵�*/
var Code2;
function MakeMenu_L2(Menu_Text, Start)
{
	Code2 = '<div id="L2_menu" class="fixbox"><ul id="L2_menu_txt">';
	for (var iCount = Start; (MenuArray[iCount].Level != 0) && (MenuArray[iCount].Level != 1); iCount++)
	{
		var str = 'LoadPage(\'' + iCount + '\')';
		if (MenuArray[iCount].Level == 2)
		{

			if (MenuArray[iCount].Text != Menu_Text)
			{	
				Code2 += '<li class="L2_menu_link"';
			}
			else
			{
				Code2 += '<li class="L2_menu_active"';
			}

			Code2 += 'onclick="toggleSub(this);'+str+'" id='+iCount+'><a href="javascript:' + str + '" target="' + MenuArray[iCount].Target + '">' + MenuArray[iCount].Text + '</a></li>';
		}
	}
	Code2 += '</ul></div>';
	Code = Code1 + Code2;
	document.getElementById('item_menu').innerHTML = Code;
}
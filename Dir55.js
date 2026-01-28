function Print55(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
	function RandomMyArray(Arr){
		/* ---- RANDOM isi Array ---- */
		/* Global */
		for (var i=0; i<Arr.length; i++){
			var r = Math.floor(Math.random() * Arr.length);
			var a = Arr[i];
			Arr[i] = Arr[r];
			Arr[r] = a;
		}
		return Arr
	}
	function RandomAngkaAtoB(a,b){   
		var r = a+Math.ceil(Math.random() * b);
		return r;
	}
	function Mods(m,n){
		var m0 = m;
		var m0b = m0;
		var ct = 0;
		do{
			m0b = m0;
			m0-=n;
			ct++;
		}while(m0>=0);
		
		var sisa = Math.abs(m0b);
		return sisa;
	}
	function CariFPB(ar){
		//https://www.ketutrare.com/2019/05/contoh-aplikasi-fpb-dan-kpk-menggunakan-bahasa-c.html
		
		var min = ar[0];
		var max = ar[0];
		for(var i=0;i<ar.length;i++){
			min = Math.min(min,ar[i]);
			max = Math.max(max,ar[i]);
		}
		
		var iter = 0;
		var fpb = 1;
		var f = [];
		do {
			iter++;
			ff = 1;
			for(var i=0;i<ar.length;i++){
				f[i] = Mods(ar[i],iter)==0;
				ff *= f[i];
			}
			
			if (ff){
				fpb = iter;
			}
			fakhir = iter==max;
		}while (!fakhir);
		
		return fpb;
	}
	function SplitKomaString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		var gg = "";
		for (var i=0;i<len;i++){
			if(strff.substr(i,1)==".")	gg += ",";
			else 						gg += strff.substr(i,1);
		}
		return gg;
	}
	function NoJawabanBenar(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (Arr[i]==jwb){
				return i;
				break;
			}
		}
	}
	function GetABCD(no){
		var ABCD = ["A","B","C","D"]
		return ABCD[no]
	}
	function StringMinus(ff){
		var strff = ""+ff;
		const gg = strff.split("-");
		var fix = gg[0];
		for(var i=1;i<gg.length;i++){
			fix+="–"+gg[i];
		}
		return fix;
	}
	function SplitString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		for (var i=0; i<len; i++){
			gg.push(strff.substr(i,1));
		}
		
		return gg;
	}
	function StringRibuan(str){
		var strfix = "";
		var arfix = new Array();
		var StrArray = SplitString(str);
		for (var i=0; i<StrArray.length; i++){
			arfix.push(StrArray[i]);
		}
		
		var ct = 0;
		var m = 0;
		var n = 0;
		var ctmax = StrArray.length;
		var arct = new Array();
		for (var i=StrArray.length-1; i>=0; i--){
			ct++;
			ctmax--;
			if(ct==3){
				ct = 0;
				m++;
				arct.push(3);
			}
		}
		var n = StrArray.length - 3*arct.length;
		
		var iter=-1;
		strfix="";
		for (var i=0; i<n; i++){
			iter++;
			strfix += arfix[iter];
		}
		if (n>0)
			strfix +=  ".";
		for (var i=0; i<m; i++){
			for (var j=0; j<3; j++){
				iter++;
				strfix += arfix[iter];
			}
			strfix += ".";
		}
		
		var leng = strfix.length;
		strfix = strfix.substr(0, leng-1);
		return strfix
	}
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaTokohU(){
		var Tokoh = ["Uti", "Untari", "Uci", "Uqi", "Ucha", "Uban", "Ubay", "Uyi", "Uwi", "Udin", "Uga", "Ucil", "Upin"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaBuah(){
		var Buah = ["Jeruk", "Apel", "Salak", "Jambu", "Timun", "Terong", "Kol", "Melon", "Mangga", "Buah Naga", "Nanas", "Alpukat", "Buah Pir"];
		Buah = RandomMyArray(Buah);
		return Buah;
	}
	function NamaEkskul(){
		var Ekskul = ["berenang", "sepakbola", "pencak silat", "komputer", "bola voli", "bola basket", "panahan", "pramuka", "catur", "menari", "PMR"];
		Ekskul = RandomMyArray(Ekskul);
		return Ekskul;
	}
	function NamaTim(){
		var Tim = ["Real Madrid", "Barcelona", "Villareal", "Real Betis"];
		//var Tim = ["Juventus", "AC Milan", "Inter Milan", "Fiorentina", "Lazio", "Parma"];
		//var Tim = ["Manchester United", "Manchester City", "Chelsea", "Liverpool"];
		Tim = RandomMyArray(Tim);
		return Tim;
	}
	function NamaBilangan(){
		var Bilangan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"];
		//Ekskul = RandomMyArray(Ekskul);
		return Bilangan;
	}
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+","+gg[1];
		else 				return ff
	}
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function NBelakangKoma(ff,n){
		var fix = (Math.round(ff*10**n))/10**n;
		return fix
	}
	function MyLuasDaerahBangunDatar1(){
		do{
			//var pp = 2*RandomAngkaAtoB(1,6)-1;
			//var ll = 2*RandomAngkaAtoB(0,6)-1;
			var pp = RandomAngkaAtoB(0,12);
			var ll = RandomAngkaAtoB(0,12);
		}while(pp<=ll);
		
		
		var Luas = pp*ll;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll+1);
		var salah8 = (pp+1)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar2(){
		//do{
			//var pp = RandomAngkaAtoB(1,6)-1;
			var pp = RandomAngkaAtoB(0,14);
			var ll = pp;
		//}while(pp<ll);
		
		
		var Luas = pp*ll;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll+1);
		var salah8 = (pp+1)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar3(){
		do{
			//var pp = 2*RandomAngkaAtoB(1,6)-1;
			var pp = RandomAngkaAtoB(0,14);
			var ll = RandomAngkaAtoB(0,14);
			var ff1 = (Mods((pp*ll),2)!==0);
		}while(pp<ll || ff1);
		
		
		var Luas = pp*ll/2;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll);
		var salah8 = (pp)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		var salah10 = (pp+2)*(ll+1);
		var salah11 = (pp+1)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar4(){
		//do{
			//var pp = 2*RandomAngkaAtoB(1,6)-1;
			var pp = RandomAngkaAtoB(0,13);
			var ll = RandomAngkaAtoB(0,13);
		//}while(pp<ll);
		
		
		var Luas = pp*ll;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll);
		var salah8 = (pp)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		var salah10 = (pp+2)*(ll+1);
		var salah11 = (pp+1)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar5(){
		do{
			//var pp = RandomAngkaAtoB(1,6)-1;
			var pp = RandomAngkaAtoB(0,14);
			var ll = 2*RandomAngkaAtoB(0,7);
		}while(pp<ll);
		
		
		var Luas = pp*ll/2;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll+1);
		var salah8 = (pp+1)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar6(){
		do{
			var pp = RandomAngkaAtoB(0,14);
			var ll = RandomAngkaAtoB(0,14);
			var ff1 = pp-2<=0;
			var ff2 = pp<ll;
			var ff = ff1 && ff2;
		}while(ff);
		
		
		var Luas = (pp+pp-2)*ll/2;
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = (pp+1)*(ll);
		var salah2 = (pp-1)*(ll);
		var salah3 = (pp)*(ll+1);
		var salah4 = (pp)*(ll-1);
		var salah5 = (pp+1)*(ll+1);
		var salah6 = (pp-1)*(ll-1);
		var salah7 = (pp+2)*(ll+1);
		var salah8 = (pp+1)*(ll+2);
		var salah9 = (pp+2)*(ll+2);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar7(){
		var ll1 = RandomAngkaAtoB(0,13);
		var ll2 = 14-ll1;
		var pp2 = RandomAngkaAtoB(2,12);
		var pp1 = pp2-2*RandomAngkaAtoB(0,Math.ceil(pp2/2)-1);
		var llt = ll1+ll2;
		var ppt = pp2;
		
		var Luas = pp1*ll1 + (pp2+pp1)*ll2/2;
		
		var ArSisi=[ppt,llt,pp1,pp2,ll1,ll2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar8(){
		var ll1 = 2*RandomAngkaAtoB(0,7);
		var ll2 = 14-ll1;
		var pp2 = RandomAngkaAtoB(2,12);
		var pp1 = pp2-2*RandomAngkaAtoB(0,Math.ceil(pp2/2)-1);
		var llt = ll1+ll2;
		var ppt = pp2;
		
		//var Luas = ll1*ppt/2 + (ll2+llt)*ll2/2;
		var Luas = ll1*pp2/2 + (ll1/2+ll2+ll2)*(pp2-pp1)/2;
		
		var ArSisi=[ppt,llt,pp1,pp2,ll1,ll2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar9(){
		do{
			var la = RandomAngkaAtoB(0,5);
			var lb = RandomAngkaAtoB(0,5);
			var lc = RandomAngkaAtoB(0,5);
			var fl = la+lb+lc;
		}while(fl>14)
		
		do{
			var pa = RandomAngkaAtoB(0,5);
			var pb = RandomAngkaAtoB(0,5);
			var pc = RandomAngkaAtoB(0,5);
			var fp = pa+pb+pc;
		}while(fp>14)
		
		var pp1 = pa;
		var pp2 = pa+pb;
		var pp3 = pa+pb+pc;
		var ll1 = la;
		var ll2 = la+lb;
		var ll3 = la+lb+lc;
		
		var Luas = pa*ll3 + pb*lc + (lb+lc)*pc;
		
		var ArSisi=[pa,pb,pc,la,lb,lc];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar10(){
		do{
			var la = RandomAngkaAtoB(0,8);
			var lb = RandomAngkaAtoB(0,8);
			var fl = la+lb;
		}while(fl>14)
		
		do{
			var pa = RandomAngkaAtoB(0,8);
			var pb = pa;
			var fp = pa+pb;
			var fpmod = Mods((pa,pb),2)==0
		}while(fp>14 || !fpmod)
		
		var pp1 = pa;
		var pp2 = pa+pb;
		var ll1 = la;
		var ll2 = la+lb;
		
		var Luas = (pa+pb)*lb + (pa+pb)*la/2;
		
		var ArSisi=[pa,pb,la,lb];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar11(){
		var pp = RandomAngkaAtoB(0,30);
		
		var Luas = pp*pp;
		
		var ArSisi=[pp,pp];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar12(){
		do{
			var pp = RandomAngkaAtoB(0,30);
			var ll = RandomAngkaAtoB(0,30);
		}while(pp<ll)
		
		var Luas = pp*ll;
		
		var ArSisi=["...",ll,Luas];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = pp;
		var salah1 = pp-1;
		var salah2 = pp-2;
		var salah3 = pp-3;
		var salah4 = pp-4;
		var salah5 = pp+1;
		var salah6 = pp+2;
		var salah7 = pp+3;
		var salah8 = pp+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar13(){
		do{
			var pp = RandomAngkaAtoB(0,30);
			var ll = RandomAngkaAtoB(0,30);
			var ff = Mods(pp,2)==0 || Mods(ll,2)==0;
		}while(pp<ll || !ff)
		
		var Luas = pp*ll/2;
		
		var ArSisi=["...",ll,Luas];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = pp;
		var salah1 = pp-1;
		var salah2 = pp-2;
		var salah3 = pp-3;
		var salah4 = pp-4;
		var salah5 = pp+1;
		var salah6 = pp+2;
		var salah7 = pp+3;
		var salah8 = pp+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar14(){
		var pp = RandomAngkaAtoB(5,25);
		var ll = RandomAngkaAtoB(5,25);
		
		var Luas = pp*ll;
		
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar15(){
		do{
			var aa = RandomAngkaAtoB(5,25);
			var tt = RandomAngkaAtoB(5,25);
			var bb = RandomAngkaAtoB(5,25);
			var ffabt = (Mods((aa+bb),2)==0 && Mods(tt,2)!==0) || (Mods((aa+bb),2)!==0 && Mods(tt,2)==0)
		}while(aa>=bb || !ffabt)
		
		var Luas = (aa+bb)*tt/2;
		
		var ArSisi=[bb,tt,aa];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar16(){
		do{
			var pp = RandomAngkaAtoB(5,25);
			var ll = RandomAngkaAtoB(5,25);
			var ffpl = (Mods(pp,2)==0 && Mods(ll,2)!==0) || (Mods(pp,2)!==0 && Mods(ll,2)==0)
		}while(pp<ll || !ffpl)
		
		var Luas = pp*ll/2;
		
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar17(){
		do{
			var pp = RandomAngkaAtoB(5,25);
			var ll = RandomAngkaAtoB(5,25);
			var ffpl = (Mods(pp,2)==0 && Mods(ll,2)!==0) || (Mods(pp,2)!==0 && Mods(ll,2)==0)
		}while(pp<ll || !ffpl)
		
		var Luas = pp*ll/2;
		
		var ArSisi=[pp,ll];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar18(){
		var Tripel =	[[3,4,5],[4,3,5],
						[5,12,13],[12,5,13],
						[7,24,25],[24,7,25],
						[8,15,17],[15,8,17],
						[9,40,41],[40,9,41]]
		Tripel = RandomMyArray(Tripel);
		var kali = RandomAngkaAtoB(0,3);
		var aa = Tripel[0][0]*kali;
		var bb = Tripel[0][1]*kali;
		var cc = Tripel[0][2]*kali;
		var dd = RandomAngkaAtoB(5,10);
		var keliling = 3*aa+bb+cc;
		
		var Luas = aa*bb/2 + bb*dd;
		
		var ArSisi=[aa,bb,cc,dd];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar19(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = aa-1;
			var cc = 3*aa;
			var dd = ArAngka[1];
			var ff = dd>=cc || dd<=aa+bb || bb==0;
		}while(ff);
		
		var Luas = aa*cc + (dd-aa)*aa + aa*bb;
		
		var ArSisi=[aa,bb,cc,dd];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyLuasDaerahBangunDatar20(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = ArAngka[2];
			var beda = cc-bb;
			var ff = bb>=cc || Mods(beda,2)!==0;
		}while(ff);
		
		var Luas = aa*bb + aa*beda/2;
		
		var ArSisi=[aa,bb,cc];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		
		//"(\u0006"
		var benar = Luas;
		var salah1 = Luas-1;
		var salah2 = Luas-2;
		var salah3 = Luas-3;
		var salah4 = Luas-4;
		var salah5 = Luas+1;
		var salah6 = Luas+2;
		var salah7 = Luas+3;
		var salah8 = Luas+4;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
		
		
	function GambarLuasDaerahBangunDatar20(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.9;
			ctx.drawImage(a_image, 50, 30,a_image.width*1*scale, a_image.height*1*scale);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText(Arr[0]+" cm",40,85);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",120,20);
			ctx.fillText(Arr[2]+" cm",140,185);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar19(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.7;
			ctx.drawImage(a_image, 50, 30,a_image.width*1*scale, a_image.height*1*scale);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",85,190);
			ctx.fillText(Arr[0]+" cm",215,150);
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",275,70);
			ctx.fillText(Arr[1]+" cm",275,115);
			ctx.textAlign = "center";
			ctx.fillText(Arr[2]+" cm",150,20);
			ctx.textAlign = "right";
			ctx.fillText(Arr[3]+" cm",40,95);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar18(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.9;
			ctx.drawImage(a_image, 0, 30,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",165,170);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",105,20);
			ctx.textAlign = "right";
			ctx.fillText(Arr[2]+" cm",70,180);
			ctx.textAlign = "left";
			ctx.fillText(Arr[3]+" cm",40,85);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar17(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.6;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",145,80);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",55,180);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar16(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.6;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",145,120);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",55,250);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar15(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.8;
			ctx.drawImage(a_image, 0, 30,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,150);
			ctx.fillText(Arr[2]+" cm",80,20);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",40,85);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar14(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.8;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",70,120);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",40,55);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar13(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.6;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",100,150);
			ctx.textAlign = "right";
			ctx.fillText(Arr[1]+" cm",130,75);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar12(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.8;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,100);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",170,40);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar11(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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Ed+CI9RAFTgcmkYogQIoAUUB1IVD/ATF7EANvElmLXXlETu50+Vymef5h3/scDhMx+Pxfr+PXsJI2+12el+73W65XI5dw/fdbrfn8/l7fDo4n8+bzWboJAZYrVbvbzCNXsKfoAOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6IDogOiA6ID8unger2u1+uxU/i+eZ7fx6eD0+k0bgzjTfv9/vF4jJ7BSIvF4gUpPCMZ+DyY5wAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			var scale = 0.8;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",65,160);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",145,75);
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar10(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			//[ppt,llt,pp1,pp2,ll1,ll2];
			var pa = Arr[0];
			var pb = Arr[1];
			var la = Arr[2];
			var lb = Arr[3];
			var sisax = (15-(pa+pb))/2;
			var sisay = (15-(la+lb))/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods((pa+pb),2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods((la+lb),2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			var ee = [];
			var ff = [];
			var gg = [];
			var hh = [];
			aa[0] = 0*dxy;			aa[1] = (la+lb)*dxy;
			bb[0] = (pa+pb)*dxy;	bb[1] = (la+lb)*dxy;
			cc[0] = (pa+pb)*dxy;	cc[1] = la*dxy;
			dd[0] = pa*dxy;			dd[1] = 0*dxy;
			ee[0] = 0*dxy;			ee[1] = la*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+ee[0],xy0+dy1+ee[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			/*
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0]-2*dxy,xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			*/
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar9(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			//[ppt,llt,pp1,pp2,ll1,ll2];
			var pa = Arr[0];
			var pb = Arr[1];
			var pc = Arr[2];
			var la = Arr[3];
			var lb = Arr[4];
			var lc = Arr[5];
			var sisax = (15-(pa+pb+pc))/2;
			var sisay = (15-(la+lb+lc))/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods((pa+pb+pc),2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods((la+lb+lc),2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			var ee = [];
			var ff = [];
			var gg = [];
			var hh = [];
			aa[0] = 0*dxy;			aa[1] = 0*dxy;
			bb[0] = 0*dxy;			bb[1] = (la+lb+lc)*dxy;
			cc[0] = (pa+pb+pc)*dxy;	cc[1] = (la+lb+lc)*dxy;
			dd[0] = (pa+pb+pc)*dxy;	dd[1] = la*dxy;
			ee[0] = (pa+pb)*dxy;	ee[1] = la*dxy;
			ff[0] = (pa+pb)*dxy; 	ff[1] = (la+lb)*dxy;
			gg[0] = pa*dxy; 		gg[1] = (la+lb)*dxy;
			hh[0] = pa*dxy; 		hh[1] = 0*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+ee[0],xy0+dy1+ee[1]);
			ctx.lineTo(xy0+dx1+ff[0],xy0+dy1+ff[1]);
			ctx.lineTo(xy0+dx1+gg[0],xy0+dy1+gg[1]);
			ctx.lineTo(xy0+dx1+hh[0],xy0+dy1+hh[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			/*
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0]-2*dxy,xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			*/
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar8(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			//[ppt,llt,pp1,pp2,ll1,ll2];
			var pp = Arr[0];
			var ll = Arr[1];
			var pp1 = Arr[2];
			var pp2 = Arr[3];
			var ll1 = Arr[4];
			var ll2 = Arr[5];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			var ee = [];
			var ff = [];
			aa[0] = pp1*dxy;		aa[1] = ll*dxy;
			bb[0] = pp*dxy;			bb[1] = ll*dxy;
			cc[0] = pp*dxy;			cc[1] = ll1/2*dxy;
			dd[0] = pp1*dxy;		dd[1] = 0*dxy;
			ee[0] = 0*dxy;			ee[1] = ll1/2*dxy;
			ff[0] = pp1*dxy; 		ff[1] = ll1*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+ee[0],xy0+dy1+ee[1]);
			ctx.lineTo(xy0+dx1+ff[0],xy0+dy1+ff[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			/*
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0]-2*dxy,xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			*/
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar7(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			//[ppt,llt,pp1,pp2,ll1,ll2];
			var pp = Arr[0];
			var ll = Arr[1];
			var pp1 = Arr[2];
			var pp2 = Arr[3];
			var ll1 = Arr[4];
			var ll2 = Arr[5];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			var ee = [];
			var ff = [];
			aa[0] = 0*dxy;			aa[1] = ll1*dxy;
			bb[0] = 0*dxy;			bb[1] = ll*dxy;
			cc[0] = pp*dxy;			cc[1] = ll*dxy;
			dd[0] = pp1*dxy;		dd[1] = ll1*dxy;
			ee[0] = (0+2+pp1)*dxy;	ee[1] = 0*dxy;
			ff[0] = (0+2)*dxy; 		ff[1] = 0*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+ee[0],xy0+dy1+ee[1]);
			ctx.lineTo(xy0+dx1+ff[0],xy0+dy1+ff[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			/*
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0]-2*dxy,xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			*/
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar6(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = pp*dxy; cc[1] = ll*dxy;
			dd[0] = 0*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			//ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			//ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			//ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			//ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			//ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0]+dxy,xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0]-dxy,xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0]+dxy,xy0+dy1+aa[1]);
			
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar5(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = pp*dxy; cc[1] = ll*dxy;
			dd[0] = 0*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			//ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			//ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			//ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			//ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			//ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			
			var xt = dxy*Math.floor(pp/2);
			var yt = dxy*Math.floor(ll/2);
			if(Mods(pp,2)==0) xt-=dxy;
			
			ctx.moveTo(xy0+dx1+aa[0]+xt,xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]+yt);
			ctx.lineTo(xy0+dx1+aa[0]+xt,xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1,xy0+dy1+bb[1]+yt);
			ctx.lineTo(xy0+dx1+aa[0]+xt,xy0+dy1+aa[1]);
			
			//ctx.moveTo(xy0+dx1+aa[0]+xt,xy0+dy1+aa[1]);
			//ctx.lineTo(xy0+dx1+aa[0]+xt,xy0+dy1+cc[1]);
			//ctx.moveTo(xy0+dx1,xy0+dy1+bb[1]+yt);
			//ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]+yt);
			
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar4(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = (pp+1)*dxy; cc[1] = ll*dxy;
			dd[0] = (0+1)*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar3(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = pp*dxy; cc[1] = ll*dxy;
			dd[0] = 0*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			//ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar2(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = pp*dxy; cc[1] = ll*dxy;
			dd[0] = 0*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		
		return 0;
	}
	function GambarLuasDaerahBangunDatar1(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			var scale = 0.4;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var xy0 = 1.5*scale;
			var dxy = 33*scale;
			
			var pp = Arr[0];
			var ll = Arr[1];
			var sisax = (15-pp)/2;
			var sisay = (15-ll)/2;
			var dx1 = sisax*dxy;
			var dy1 = sisay*dxy;
			if(Mods(pp,2)==0)	dx1 = (sisax+1/2)*dxy;
			if(Mods(ll,2)==0)	dy1 = (sisay+1/2)*dxy;
			
			var aa = [];
			var bb = [];
			var cc = [];
			var dd = [];
			aa[0] = 0*dxy; 	aa[1] = 0*dxy;
			bb[0] = pp*dxy; bb[1] = 0*dxy;
			cc[0] = pp*dxy; cc[1] = ll*dxy;
			dd[0] = 0*dxy; 	dd[1] = ll*dxy;
			
			ctx.lineWidth = 2;
			ctx.fillStyle = "blue";
			ctx.globalAlpha = .25;
			ctx.beginPath();
			ctx.moveTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.lineTo(xy0+dx1+bb[0],xy0+dy1+bb[1]);
			ctx.lineTo(xy0+dx1+cc[0],xy0+dy1+cc[1]);
			ctx.lineTo(xy0+dx1+dd[0],xy0+dy1+dd[1]);
			ctx.lineTo(xy0+dx1+aa[0],xy0+dy1+aa[1]);
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "#000000";
			ctx.stroke(); 
			
		}
		
		return 0;
	}
	function GetSoal1(canv){
		const Aljabar = MyLuasDaerahBangunDatar1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar1(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyLuasDaerahBangunDatar2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar2(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyLuasDaerahBangunDatar3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar3(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyLuasDaerahBangunDatar4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar4(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyLuasDaerahBangunDatar5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar5(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MyLuasDaerahBangunDatar6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar6(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal7(canv){
		const Aljabar = MyLuasDaerahBangunDatar7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar7(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyLuasDaerahBangunDatar8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar8(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(canv){
		const Aljabar = MyLuasDaerahBangunDatar9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar9(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyLuasDaerahBangunDatar10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar10(canv,ArSisi);
		var ss
		
		ss = "Luas bangun di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" satuan luas";
		Ar[1] = StringRibuan(Ar[1])+" satuan luas";
		Ar[2] = StringRibuan(Ar[2])+" satuan luas";
		Ar[3] = StringRibuan(Ar[3])+" satuan luas";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(canv){
		const Aljabar = MyLuasDaerahBangunDatar11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar11(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(canv){
		const Aljabar = MyLuasDaerahBangunDatar12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar12(canv,ArSisi);
		var ss
		
		ss = "Jika luas bangun datar di atas "+ArSisi[2]+" cm\u{00B2}, maka panjangnya ...	";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm";
		Ar[1] = StringRibuan(Ar[1])+" cm";
		Ar[2] = StringRibuan(Ar[2])+" cm";
		Ar[3] = StringRibuan(Ar[3])+" cm";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(canv){
		const Aljabar = MyLuasDaerahBangunDatar13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar13(canv,ArSisi);
		var ss
		
		ss = "Jika luas bangun datar di atas "+ArSisi[2]+" cm\u{00B2}, maka alasnya ...	";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm";
		Ar[1] = StringRibuan(Ar[1])+" cm";
		Ar[2] = StringRibuan(Ar[2])+" cm";
		Ar[3] = StringRibuan(Ar[3])+" cm";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(canv){
		const Aljabar = MyLuasDaerahBangunDatar14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar14(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal15(canv){
		const Aljabar = MyLuasDaerahBangunDatar15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar15(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal16(canv){
		const Aljabar = MyLuasDaerahBangunDatar16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar16(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal17(canv){
		const Aljabar = MyLuasDaerahBangunDatar17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar17(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal18(canv){
		const Aljabar = MyLuasDaerahBangunDatar18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar18(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal19(canv){
		const Aljabar = MyLuasDaerahBangunDatar19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar19(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal20(canv){
		const Aljabar = MyLuasDaerahBangunDatar20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPGL = GambarLuasDaerahBangunDatar20(canv,ArSisi);
		var ss
		
		ss = "Luas bangun datar di atas yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B2}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B2}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B2}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B2}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}

	var namefunc = [GetSoal1,
					GetSoal2,
					GetSoal3,
					GetSoal4,
					GetSoal5,
					GetSoal6,
					GetSoal7,
					GetSoal8,
					GetSoal9,
					GetSoal10,
					GetSoal11,
					GetSoal12,
					GetSoal13,
					GetSoal14,
					GetSoal15,
					GetSoal16,
					GetSoal17,
					GetSoal18,
					GetSoal19,
					GetSoal20];
	
	var ss
	var dd1=document.getElementById(d1);
	var cc1=document.getElementById(c1);
	var dd2=document.getElementById(d2);
	var cc2=document.getElementById(c2);
	var dd3=document.getElementById(d3);
	var cc3=document.getElementById(c3);
	var dd4=document.getElementById(d4);
	const ctx1 = cc1.getContext("2d");ctx1.reset();ctx1.clearRect(0, 0, 1000, 1000);
	const ctx2 = cc2.getContext("2d");ctx2.reset();ctx2.clearRect(0, 0, 1000, 1000);
	const ctx3 = cc3.getContext("2d");ctx3.reset();ctx3.clearRect(0, 0, 1000, 1000);
	//console.log(cc1,cc2,cc3)
	dd1.innerHTML="";
	dd2.innerHTML="";
	dd3.innerHTML="";
	dd4.innerHTML="";
	cc1.width=0;cc1.height=0;
	cc2.width=0;cc2.height=0;
	cc3.width=0;cc3.height=0;
	
	dd1.removeAttribute("hidden");
	dd2.removeAttribute("hidden");
	dd3.removeAttribute("hidden");
	dd4.removeAttribute("hidden");
	cc1.removeAttribute("hidden");
	cc2.removeAttribute("hidden");
	cc3.removeAttribute("hidden");
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 5 \u{2192} Luas Daerah Bangun Datar </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 160;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 210;
		cc1.height = 100;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 120;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 200;
		cc1.height = 260;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 210;
		cc1.height = 180;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 210;
		cc1.height = 220;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 330;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut ini!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut ini!</p>";
		cc1.width = 330;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else{
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc1);
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}
	

	function hidingElemen(elem){
		//hiding elemen
		elem.setAttribute("hidden", "hidden");
	}
}
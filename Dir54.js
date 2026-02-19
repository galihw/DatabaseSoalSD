function Print54(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function MyKelilingBangunDatar1(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = RandomAngkaAtoB(0,pp-1);
		var keliling = 2*pp + 2*ll;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar2(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = pp;
		var keliling = 2*pp + 2*ll;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar3(){
		do{
			var bwh = RandomAngkaAtoB(4,31);
			var ats = RandomAngkaAtoB(0,bwh-1);
			var smp = RandomAngkaAtoB(4,31);
		}while(smp==bwh);
		
		var keliling = ats+bwh+smp+smp;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [bwh,smp,ats];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar4(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = RandomAngkaAtoB(0,pp-1);
		var keliling = 2*pp + 2*ll;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar5(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = pp;
		var keliling = 2*pp + 2*ll;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar6(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = RandomAngkaAtoB(0,pp-1);
		var keliling = 2*pp + 2*ll;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = "layang-layang, "+keliling+" cm";
		var salah1 = "layang-layang, "+(keliling/2)+" cm";
		var salah2 = "belah ketupat, "+(keliling/2)+" cm";
		var salah3 = "belah ketupat, "+(keliling)+" cm";
		var salah4 = "jajar genjang, "+(keliling)+" cm";
		var salah5 = "jajar genjang, "+(keliling/2)+" cm";
		var salah6 = "trapesium, "+(keliling)+" cm";
		var salah7 = "trapesium, "+(keliling/2)+" cm";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar7(){
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
		var keliling = aa+bb+cc;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar8(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = RandomAngkaAtoB(0,pp-1);
		var keliling = 2*pp + ll;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ll,pp];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar9(){
		var pp = RandomAngkaAtoB(4,21);
		var keliling = 3*pp;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar10(){
		var pp = RandomAngkaAtoB(4,21);
		var keliling = 5*pp;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = "segilima, "+(keliling)+" cm";
		var salah1 = "layang-layang, "+(4*pp)+" cm";
		var salah2 = "belah ketupat, "+(4*pp)+" cm";
		var salah3 = "jajar genjang, "+(4*pp)+" cm";
		var salah4 = "trapesium, "+(4*pp)+" cm";
		var salah5 = "segitiga, "+(keliling)+" cm";
		var salah6 = "persegi, "+(keliling)+" cm";
		var salah7 = "persegipanjang, "+(keliling)+" cm";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar11(){
		var pp = RandomAngkaAtoB(4,21);
		var keliling = 6*pp;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar12(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = ArAngka[2];
			var dd = ArAngka[2];
			var ff = aa+1!==bb || cc<=bb+2 || dd<=cc+2;
		}while(!ff);
		
		var keliling = 2*cc + 2*dd;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc,dd];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar13(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = aa-1;
			var cc = 3*aa;
			var dd = ArAngka[1];
			var ff = dd>=cc || dd<=aa+bb || bb==0;
		}while(ff);
		
		var keliling = 2*bb + 2*dd + 2*cc;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc,dd];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-aa;
		var salah2 = keliling-bb;
		var salah3 = keliling-cc;
		var salah4 = keliling+aa;
		var salah5 = keliling+bb;
		var salah6 = keliling+cc;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar14(){
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
		var keliling = 3*aa+bb+cc;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar15(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = ArAngka[1];
			var cc = 2*aa;
			var ff = aa<bb;
		}while(ff);
		
		//var keliling = 2*cc+aa+2*bb;
		var keliling = 2*(aa+bb+bb+cc);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = keliling;
		var salah1 = keliling-1;
		var salah2 = keliling-2;
		var salah3 = keliling-3;
		var salah4 = keliling+1;
		var salah5 = keliling+2;
		var salah6 = keliling+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar16(){
		var pp = RandomAngkaAtoB(4,21);
		var keliling = 4*pp;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = ["a",keliling];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = pp;
		var salah1 = pp-1;
		var salah2 = pp-2;
		var salah3 = pp-3;
		var salah4 = pp+1;
		var salah5 = pp+2;
		var salah6 = pp+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar17(){
		var pp = RandomAngkaAtoB(4,21);
		var ll = RandomAngkaAtoB(0,pp-1);
		var keliling = 2*pp + 2*ll;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ll,keliling];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = pp;
		var salah1 = pp-1;
		var salah2 = pp-2;
		var salah3 = pp-3;
		var salah4 = pp+1;
		var salah5 = pp+2;
		var salah6 = pp+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar18(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var cc = ArAngka[2];
			var ff = pp<ll || 2*cc<=ll;
		}while(ff);
		
		var keliling = 2*pp+ll+2*cc;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,"c",keliling];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = cc;
		var salah1 = cc-1;
		var salah2 = cc-2;
		var salah3 = cc-3;
		var salah4 = cc+1;
		var salah5 = cc+2;
		var salah6 = cc+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar19(){
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
		var keliling = 3*aa+bb+cc;
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,keliling];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = cc;
		var salah1 = cc-1;
		var salah2 = cc-2;
		var salah3 = cc-3;
		var salah4 = cc+1;
		var salah5 = cc+2;
		var salah6 = cc+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKelilingBangunDatar20(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var aa = ArAngka[0];
			var bb = aa-1;
			var cc = 3*aa;
			var dd = ArAngka[1];
			var ff = dd>=cc || dd<=aa+bb || bb<4;
		}while(ff);
		
		var keliling = 2*bb + 2*dd + 2*cc;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,cc,dd,keliling];
		var arrSalah = [];
		
		//"(\u0006"
		var benar = bb;
		var salah1 = bb-1;
		var salah2 = bb-2;
		var salah3 = bb-3;
		var salah4 = bb+1;
		var salah5 = bb+2;
		var salah6 = bb+3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	
	
	function GambarKelilingBangunDatar20(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",255,70);
			ctx.fillText("a",275,115);
			ctx.textAlign = "center";
			ctx.fillText(Arr[2]+" cm",150,20);
			ctx.textAlign = "right";
			ctx.fillText(Arr[3]+" cm",40,105);
		}
		
		return 0;
	}
	function GambarKelilingBangunDatar19(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText("a",65,190);
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",165,160);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",80,100);
		}
		return 0;
	}
	function GambarKelilingBangunDatar18(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText(Arr[1]+" cm",40,85);
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",120,20);
			ctx.fillText(Arr[0]+" cm",120,145);
			ctx.textAlign = "left";
			ctx.fillText(Arr[2],222,130);
		}
		return 0;
	}
	function GambarKelilingBangunDatar17(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText("b",95,160);
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",210,70);
		}
		return 0;
	}
	function GambarKelilingBangunDatar16(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 10,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",160,85);
		}
		return 0;
	}
	function GambarKelilingBangunDatar15(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",45,20);
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",210,85);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",210,25);
			ctx.fillText(Arr[1]+" cm",110,150);
			ctx.textAlign = "center";
			ctx.fillText(Arr[2]+" cm",90,195);
		}
		return 0;
	}
	function GambarKelilingBangunDatar14(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText(Arr[2]+" cm",80,175);
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",160,160);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",70,100);
		}
		return 0;
	}
	function GambarKelilingBangunDatar13(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
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
	function GambarKelilingBangunDatar12(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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rwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAAAGXSURBVHic7dwxbhpRGEbRFNDTsovZAD0Vy/AiZknegLcEnUszSDiRcmVSRpGdF8g51V9+I13pdbO6Xq+n0+kb/7fNZrNalmW73Y5ewmDPz8+r0Rv4V9xSmOd5t9sNnMLfd7lcDofDz/uWwjRN+/1+0CTGeHt7+7g9EEQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRArkLlN4f38/nU6jVzyC8/n8cd9lCsuybLfb0SsezV2mwFe47xTmed7tdqNXPIJpmu47hR8fsN/vR694EPedAp9ICkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQK5JbC6+vr8XgcOOX3/frbGD7LLYWnp6eBOxjOA0FW6/X65eVl9Iw/NE3T6AmP4zsiJTNv8G5GHgAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,150);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",230,70);
			ctx.textAlign = "right";
			ctx.fillText(Arr[2]+" cm",40,90);
			ctx.textAlign = "center";
			ctx.fillText(Arr[3]+" cm",140,25);
		}
		return 0;
	}
	function GambarKelilingBangunDatar11(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",150,40);
		}
		return 0;
	}
	function GambarKelilingBangunDatar10(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",120,20);
		}
		return 0;
	}
	function GambarKelilingBangunDatar9(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",130,70);
		}
		return 0;
	}
	function GambarKelilingBangunDatar8(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",75,200);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",130,100);
		}
		return 0;
	}
	function GambarKelilingBangunDatar7(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText(Arr[0]+" cm",40,100);
			ctx.textAlign = "center";
			ctx.fillText(Arr[1]+" cm",100,210);
			ctx.textAlign = "left";
			ctx.fillText(Arr[2]+" cm",110,85);
		}
		return 0;
	}
	function GambarKelilingBangunDatar6(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAFtCAIAAADK3mw1AAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAACAASURBVHic7Z15XBXl/scnlTT3NLFC0tS4amq5K+aGV8NMRWQHyTKrX8hVURLEXRKXcKdrKdVNQBZBRBHFCyiyKIookhiiL1RcUVFEFNl+n+bpnkjgcDhnZp6ZOfP+w9fxnGHme2Y+812eM8/zbVJVVcUo/I+ioqLVq1f7+Pi89NJLtG0REU1oGyAuHBwcoqOjmzdvvnTpUtq2iAhFJX+xZcsWSAQvVqxY8c9//tPU1JS2RWJBUcmfpKamuru7k9eVlZW2trZnzpzp0KEDXatEgqKSP7h37x5k8fz583bt2j148AD/5ufnOzo6Hjp0qFGjRrSto4+ikj88x/Tp069fv96jRw9kJFDJRx99FBkZeeTIkRUstA2kj6ISxtvbGz6jRYsWYWFhn332Gd6BL/nxxx+RyeKjYcOGmZub07aRMvquEuIw8GL79u29e/dWvW9vb5+UlPT999/DzSBBMTY2pmcjffRaJST5QMT58ssvnZycXvh0w4YNp1isra0TExNffvllKkaKAf1VSVlZGTLWgoKCAQMGbNq0qeYGTZs2RQzq37//yZMnUf5s3rxZeCNFgv6q5JtvvklJSXn11VchhWbNmtW6TefOnX/99dfJkydv2bJl+PDhNjY2AhspEvRUJeHh4fANL7300n/+85+3335bzZYTJ0708PBYvXr1559/3rdvX9RBghkpHvRRJTk5OahlqqqqFi5cOGnSpHq3X7lyZWpqakJCAhIURB9UywIYKSr0TiUlJSW42EVFRaNHj0ahq8mfNG7cePfu3UhQsrKy/u///g/uh28jxYbeqeTrr7/OzMx8/fXXceGbNNH063fs2BHbjx07FmkKEpQvvviCVyPFhn6pxN/fH54A4sAlh1Aa9LcjR45EdoKcd86cOQMHDoRr4clIEaJHKjl79qyrqyvDDrYi3GixhwULFqAsioyMRMxKT09v27YtxyaKFX1RyaNHj3Bpnz59inQV/kC7naAm+vnnn8+fP3/58uVPPvkEctGTh5X0QiUoZ2bMmJGbm4uiFxFHl0sL/xEWFmZqahoVFbV+/XqtBSct9EIlvr6+uO+bNWuGC/zqq6/quLd+/fpt3bp11qxZXl5eQ4cORb7CiZFiRv4qSUpKWrRoEV5s2rRpwIABnOzz888/x27hluzs7M6cOdPQRFhyyFwld+7csbW1LSsrc3Jy+vLLLznc8/fff5+RkYGi2t7e/r///W/jxo053LnYkLNKKioqHB0db9682bt37+3bt3O78+bNmyN+DRo06OjRo4sXL/bx8eF2/6JCzipZtmxZXFxcq1atcDlbtGjB+f5NTEx27txpY2Ozdu1a5LOaDPZLFNmq5ODBg+T+xoXk7yc6VNdz5szZvHkzCuP09HT1PxxKF3mq5OrVq87OzpWVla6urnz/3I96OC0tLTU1FQdCStu0aVNeD0cFGaqktLQUt/j9+/eHDBny3Xff8X04AwODkJCQ/v37nz59eu7cuf/+97/5PqLwyFAl8+fPP3XqVPv27UNDQ4V5DNHY2DgwMHDChAnIkT/44AOkzAIcVEjkppLdu3f7+fk1atQoICDgrbfeEuy448ePX7p06fLly1Fv9+vXr1evXoIdWgBkpZKLFy+S3/S9vLyEnx6xZMmSlJSU2NjYadOmwZm1bNlSYAP4Qz4qefLkCS5PcXHx2LFjUQMLbwAcGOIOEhSIddasWfBqwtvAE/JRCVz9hQsXjIyMgoKCaI2Evvbaa8hkR40aFRwcjATFxcWFihmcIxOVoLLAfUzKDUNDQ4qWDBs2DLUxih03N7eBAweizqJoDFfIQSUoQefNm4cXa9asGT58OG1zmDlz5iQnJ4eFhdna2qanp6Paom2RrkheJQ8ePLC2ti4tLUVSQrQiBnbu3Hnu3LmcnJzp06cfOHBA6gsXSFslVVVVzs7OeXl53bt39/f3F8+TY61bt4YvQfSJiYlZvXr14sWLaVukE9JWCUJMdHT0K6+8smfPnjZt2tA252/07dv3+++/nzFjxvLlyyEXVF60LdIeCaskISFhyZIleLFt27b33nuPtjm18MknnyQlJSH6ODo6njlz5s0336RtkZZIVSU3b960t7evqKj4jIW2OXWydetWJLAZGRnIZOPj41GF0bZIGySpkvLyckjkzp07cCFwJLTNUQd52BYlMZyKp6enAL8+8oEkVeLl5ZWYmIhEBOkIkhLa5tRDt27dfv75Z0tLyw0bNqBQnzp1Km2LGoz0VEKmOKCc+emnn1Da0DZHIywsLBYsWACzP/300z59+kjFbBUSU8mVK1eQEqIAdnNzw91J25wGgHr45MmTcIHW1tYpKSnid4HVkZJKnj17hlP88OFD+G3UwLTNaRhkcnL//v3JRFQUPrQtagBSUsm//vUv1JOGhoYhISFSLBZQCUMo48aN8/f3h9ARfWhbpCmSUcmvv/66Y8eOxo0bBwUFGRkZ0TZHS8aMGbNy5Upk37Nnzx4wYEDfvn1pW6QR0lAJWV6GYSdPSHoQE3h4eCAviY6OtrKyOnXqlNiGjGtFAiopKiqaNm1aSUmJubk57kLa5uhKo0aN4BeRoFy6dGnmzJlhYWHi+fmpLiSgklmzZuXk5HTu3DkgIEDqP64S2rVrB3GMGDEiPDx806ZN4vkpuy7ErpItW7aQR+GRscrgQQ0VgwYN2rBhg4uLy8KFC4cMGSLyLiuiVomqG4mvr688Hvqqztdff52UlISqR/xdVsSrElU3EvyLioC2Obzw448/njt37sKFCyLvsiK0So4fP/7uu+8iMKvfrHo3EhTAwtgmPC1btkSCAjepeZcVSMrAwOCdd94RwDwVgqokNzd30qRJr776KlINBGY1W1bvRtKqVSvBLBSeXr16ad5lJSgo6Msvv+zatStisZCLEwuqkqNHjxYXFz969AjpPXI3BOZaN6urG4lc0aTLSmlpqZubG7bB67y8vKysrMGDBwtmoaAq+fzzz1HQIgYXFBQgvU9OTv7hhx9emAOnvhuJXFHfZQWysLGxwad4/d5778G/yjnigHHjxuF2QUKakpIC/3n27Fl8Z9Ws2nq7kcgVNV1WoqOjnZ2dHzx4gNeffvqpn5+f8L8nU6hxOnXqhNDj4eGxceNG5GLI3RCY4XUZzbqRyJWaXVYqKiqWLl3q4+NTVVUFZWzbto3Ws5t0KmFk6b6+vqampvjaRUVFyN0QmJGsaNiNRK5U77JiZGS0ZMmShIQEvN+9e3fcNu+//z4tw2iOl0ybNq1Pnz5WVlbnz59HXoZcVfNuJHJF1WVl9OjR5eXleGfKlCm//PIL3dXMKY+qmZiYnDhxYtasWchRkLE2adJEDFM4KdKoUaMPPvgAKoFE4FbXrFmDNIX6z4H0x15R96seKcKpsbCwgNfFLSXvFVRr5eHDhzNmzNi3bx/5LzwrXAh1iTBiUImqGwmCDm6dK1eukEdE4V3orh4gMCj3UAbn5uYy7MNKyNJwq4ikywpllVTvRoK4g9NEbqa4uDicmpCQED0JQD/99NPs2bOfPn0Kz+Hp6Ql9IPRkZmaKpMsKTZXU7EaCc7F3797169d7eXnduHEDtxS8y7x588TgdXkCX9/FxeXnn39m2OdOUAyj0iEfiafLCjWV1NWNBC+gmKFDh9rZ2d26dWv+/PnJycm41STx5F9DuXTpEu6Tc+fOMewTJ6GhoV26dFF9Kp4uK9RUor4byciRIzMyMuzt7ZHtR0REwPfiTPXs2ZOKqTxx4MABJycnOFSGfdZkw4YNNVcUFkmXFToq0aQbSceOHY8cOUIGH0tKSup92EBywFXge7Vs2fKHH35wcHCoazMxdFmhoBLNu5GgGP7222/hclu3bg3RCGahMHzwwQc7d+5ECVPv4rDUu6wIrRItupGosjn54ezsrMlm1LusCK0SvruRyBW6XVYEVYkw3UjkCsUuK8KpRMhuJHKFVpcVgVQicDcSuUKry4pAKhG+G4lcodJlRQiV0OpGIleE77LCu0rodiORKwJ3WeFXJdS7kcgVgbus8KsSMXQjkStCdlnhUSXi6UYiVwTrssKXSsTWjUSuCNNlhReViLMbiVwRoMsK9yoRbTcSuSJAlxXuVSLmbiRyhe8uKxyrRPzdSOQKr11WuFSJVLqRyBX+uqxwphIJdSORK/x1WeFMJdLqRiJXeOqywo1KpNiNRK7w0WWFA5VItxuJXOG8y4quKpF0NxK5wnmXFV1VIvVuJHKF2y4rOqlEHt1I5AqHXVa0V4mcupHIFa66rGipEpl1I5ErXHVZ0VIl8utGIlc46bKijUrk2o1ErujeZaXBKpF3NxK5omOXlYapRB+6kcgVXbqsNEAletKNRK5o0WVFRQNUoj/dSORKg7qsVEdTlehbNxK5okmXlZpopBL97EYiV9R3WamV+lWit91I5IqaLit1Ub9K9LkbiVyp2WVF/fb1qCQ8PFzPu5HIlepdVvr27at+aSp1KsnJyfnss8+UbiRyRdVlBQkKoo+adpF1qqSkpAR/XFRUNHr0aBRO/NipQJPGjRuTh5XIz/sIF3VtWadKvv7668zMzNdffx07atKEfusLBT7o2LEjru/YsWORpiBBISvN1KT2y6/qRoJdUFmsWEEwRo4ciewENYqaLiu1qKR6NxKEG76tVKDOggULUMaq6bLyokpqdiNRkD2oYdV3WfmbSurqRqIge9R3WfmbStR3I1GQN2q6rPylEk26kSjIm7q6rPypEs27kSjIm1q7rPyhEi26kSjIlVq7rPyhEqUbiUJ1anZZaXLw4MFvv/0Wn0ElXC1kIF3y8vLw765du2JjY2nbQhmUL4WFhYg7qJCbBAYGkndvstC1TCQUstC2QhQ8efIkOjq6iYODQ1BQEKLR3LlzlflX/v7+t27dQlT+8MMPadtCmXv37iFJbdKkCUJPE5wOFDy3b98eMmTI5MmTadtGmcOHD0Mlw4YNW7VqFW1bKOPp6Yl/J0yYYGhoCK00QYHj6+tLHl6ibZuCKEDZGxAQwLBLPzKkxnF2doZKDhw4cP/+fWVGpwKIj4/Pz89v167dxx9/zBCV9O3bt1+/fhkZGcHBwby2RlCQCuSJJDs7O9Ia8M+xVzgWqARBR1GJwuPHj/fu3cv8L9wwKpWgLHZ3d09LS8vOzu7Zsyc1AxVEQFhYWElJSY8ePQYPHkze+VMlyGORzUZFRcGdCN/6WkFUQANMNUfCVP9NGDksVILM1tvbW+mLpbdcuXIlMTERAqg+ifMvlSCbRYGDzDYuLm78+PE0LFSgz65du6qqqszMzDp16qR68y+VIJtFTuvn5weHo6hEP4E+oBLm7+GGeeFZNQQdqAT5bVFRUevWrQU1UEEEJCUlXb58uebvvn9TCXJaFDgoc5Dlzpw5U1gLFehDhkmsra1fmOf34jP0cDUeHh4IOopK9A1Uv/AOTI1ww9RUiaOjo5eX1/Hjx5Hrdu3aVSADFURAZGQkMg1c9BEjRrzw0YsqQWY7duzY2NhYuJPly5cLZKCCCCDhZvr06TVn2NQytw8OBypBrrts2TJlSo6ecOPGjbi4OFxuqKTmp7WoxMLCAgUOIg7iTvVJGQoyJiAgoKKiArGmW7duNT+tRSXIb5Hl+vv7I+goKtETao7KV6f2NQecnZ2hEmS8W7ZsUbP4iYI8OHXq1IULF4h3qHWD2lUCz4NcF0Fn7969qHr4tFCBPiRvJZlGrRvUrhJkMXAnqHHgiBSVyJvnz58HBwczdYcbRs1aSMh1V6xYgbw3Pz+/+g8/CjKDPMlqZGSkphVWnSohoyuJiYnIfj08PPixUIE+JNw4OTmpeVxE3YJpcEFQCYKOohK5UlBQEBMTw7D1iprN1KnEysrK1dU1Ozs7LS1N9XCbgpwICgoqKysbNGhQr1691GymTiXIeKdOnRoYGAinpKhElpBwoyZvJdSzRCf+HipBDrxhwwby0L2CbMjMzMzIyCBPn6nfsh6VkCfbUOYgE542bRp3FirQh4y3Tpw4sd6pevWohDwlu2bNGrgmRSVyory8nCw3UW+4YTTpaYG9QCWHDh26e/euoaEhBwYqiIDY2Njbt2936NBhwoQJ9W5cv0rI7B2UOciH586dy4WFCvQheauDg4OBgUG9G2u0wDzcCVSCMKaoRB4UFhZGRUUxmoUbRkOVIAd2c3MjS/f17dtXJwMVREBoaOizZ8/IKgKabK+RSsgKBeHh4XBTvr6+ulmoQB8SbtSPt1ZH05YmcE1QCVKTtWvXKo1QJE1OTs6JEyfI6kYa/omm19vc3BwFDrLiw4cPo8LW1kIF+iC/rKqqGj9+vOY9bTRVCTJh5MObNm2Cs1JUIl0qKytrneOpngbEDuwXKtm/fz8yZKWXgUQ5evTotWvXcPkatIZeA1Ty/vvvIytGmRMSEvLVV1813EIF+pC81cbGpkFNfxuWh8KdzJ8/H0dSVCJFiouLIyIimAaGG6ahKkFWvHDhQmTIv//++z/+8Y8G/a0CdVClQigmJiZDhw5t0B82TCUdO3b88MMPo6OjkSeT1esVJIRqmKShUzYbPPIBZwWVBAQErFq1SlmRXEJcvXr12LFjuGS1zvFUT4NVMmnSJGTIyJMTEhLUPHWtIDZQAKMMNjMze+uttxr6tw1WCXJjW1vb7du3w30pKpEKVVVV6ud4qkebsXYcCSpBtuzn59eqVSst9qAgMKmpqZcuXWrZsqV2j5JpoxJkyChwUOYgZ54xY4YWe1AQGJK3QiLa9VLT8nc75MleXl44tqIS8fPs2bPQ0FBG23DDaK0S5MlLlixJTEzMy8vr0qWLdjtREIZ9+/Y9fPiwc+fOo0aN0m4PWqrE2Nh4zJgxcXFxyJwhF+12oiAMqqWwtB650P5JEbgvqASZ8+LFi5WFtUTLrVu3YmNjcYG0DjeMLiqxtLR0cXHJzc1NSUkZPny41vtR4JXAwMCKigpcoO7du2u9E+1VgmwZOfMvv/wCh6aoRLQ09OHFWtHp2UQ4MagE+fPmzZtfeeUVXXalwAfp6elZWVnNmjWzsbHRZT86qQQ5MwoclDnIouuda6ogPGS81cLCom3btrrsRyeVkOVBV61aBbemqERsPH/+fPfu3YzO4YbRUSXEAm9v7yNHjty8efPNN9/UcW8KHBITE1NQUPDGG2/o3sdGV5UgczY1NU1OTkYu7e7uruPeFDiE5K2Ojo66d07jYGYNclioBDYpKhEP9+7di46OZnQYla8OBypB/jxnzpzffvsNGfWAAQN036GC7gQHByMvweXo3bu37nvjQCVt2rSZMmUKzII7UVQiEjgZJlHBzVxOuDWoBBn1d9999/LLL3OyTwWtgV8/ffo0LoSDgwMnO+RGJePGjUOBgzLn4MGDqM452aeC1pBhko8++ui1117jZIfcqARZNHLp9evXw9EpKqFLRUVFQEAAw124YbhSCcMGHagEvgTZNVcSVtACMnaFS8DhdG7OVPLuu+8OHDgQ4RDZiaurK1e7VWgoJNzY29tzmCByuRIJXBxUgqCjqIQWjx49ioyMZDgNNwy3KoF+FyxYkJ6ejhwbroXDPStoSFhY2NOnT4lf53C3XKoEsRB5NbQMd7Ju3ToO96ygIdwOk6jgeO0r5LBQSWBgoI+Pj+4/Hyg0iMuXLycnJ5OFnLndM8cqITU6cmxk2ubm5tzuXEE9ZCksMnbF7Z45VgnyamQnW7duhetTVCIkqjmenIcbhnOVMGzQgUr27duHfLtNmzac71+hVo4dO5aXl4cTzseoJvcqIb9DZmVlhYaGzpo1i/P9K9QKcSQ2NjZ8PIDMy8qtcHrffPMNgo6iEmF48uTJnj17GH7CDcOTSpBje3p6pqSk5Obm6jINREFDIiIiHj9+jFPN05QXXlRCnrWMiYmBG1y5ciUfh1Cojipv5WmSJV9rhcNiopLly5crC2vxyvXr1+Pj48l8Bp4OwZdKpkyZ0rZt26tXryYmJo4ePZqnoyiAgICAyspKnGT+Fn/gSyXItK2trXfs2IEcVlEJr/A0Kl8dHrtTfPLJJ1BJeHj4tm3btFuCR6FeyNq7OL1WVlb8HYVHlZiamiLrRpmDDJy/kKnnkLzV0tKS1wXueFQJ8im4waVLl8IlKirhg9LS0uDgYIbncMPwqhKGtR41TkJCwrVr17RYZlRBPVFRUYWFhcbGxmZmZrweiF+VkLW8oBLk4YsWLeL1WHoICTe6LIWlIbz3VoM7gUrwfRSVcMudO3cOHTrE8B9uGAFUgtx79uzZyMNTU1OHDRvG9+H0h8DAwPLycrL2Lt/H4l0lZL3iX1kUlXCILiuGNxQhunnCJeIrhYSEbNy4sUEtnhTq4uzZs+fOnWvatKmtra0AhxNCJWPGjEGBgzIHObmOC3wpEMh46+TJk4VpoCiESpCBOzk5rV69Gh5FUYnulJWVBQUFMUKFG0YYlTBs0IFKDh8+fPv2bc3b2CrUCkqbu3fvkr5nwhxRIJUgD0fqijIHN4Gbm5swB5UrJG91dHQUrEm8cL3o4U6gEgRURSW68ODBg/379zMChhtGSJUgG583b15mZmZGRka/fv0EO67MCA4OLi0tJb2dBTuocCoh/bBDQ0PhMBWVaI2QwyQqhFMJwwYdqASpybp16wwMDIQ8tDy4ePHiyZMnceq4WgpLQwRVCXJyFDgoc2JiYuBXhDy0PCDDJObm5oaGhkIeV1CVICdHZu7r6wu3qaikoaiWwhI43DACq4Rhgw5UcuDAgfv377dv317go0ua+Pj4/Pz8du3affzxxwIfWmiVIDNH6ooyB7m6i4uLwEeXNCTc2NnZNW3aVOBDC60ShnWYUAmCjqISzXn8+PHevXsZGuGGoaISe3t7d3f3tLS07Ozsnj17Cm+AFAkLCyspKenRo8fgwYOFPzoFlSA/nzBhQlRUFNyJj4+P8AZIESrDJCooqIRhc1ioBBm7t7e3srBWvVy5ciUxMZGPpbA0hI5KkKWjwEHGHhcXp3uPH9mza9euqqoqMzOzTp06UTGAjkqQpSNX9/PzgyNVVKIe6AMqYeiFG4aWShg26EAlyNuLiopat25Nywzxk5SUdPny5VatWk2dOpWWDdRUglwdBQ7KHGTvM2fOpGWG+CHDJNbW1s2bN6dlAzWVMKwL9fDwQNBRVFIXqH5xFzFUww1DVyWOjo5eXl7Hjx9HDt+1a1eKllDh4cOHP/74I06CkZFRXdtERkYiIuPkjBgxQkjbXoCmSpCxjx07NjY2liyZVOs2CEn49OjRo8nJyTJbUyk0NHThwoWLFi0aN24cXMWUKVNqLq9Iws306dN5WgpLQ2iqhGEdKVSCHH7ZsmXVT8T9+/d3796N99PS0sg7CQkJkBQlM3nh2rVrBgYGZWVlh1jatGmD5AMnZPjw4eRU3LhxIy4ujtelsDSEskosLCxQ4CDiIO6MHDkSpywmJgbi2L9/f2lpKdkGG1hZWcnvyXtvb+85c+YEBgbi+545c+bRo0c7Wbp37z6dBc6moqICsaZbt250TaWsEuTtuIH8/f03btyIqjgoKOju3bvkI8QXMzMz3FuWlpYU03te6dChw1yW8+fPI7AGBATcvn07NzcXnhUhmAQgOzs72mbSVglOCmkJRXr/EFAhOzs7Ozk50RpqFJ4+ffqsX7/ex8eHxF+cjWfPnqHAwUfu7u6pqam4W3DP0MrM6KgE0QQxBakZ4nF5eTl5s2XLlhAHPO3QoUOpWEWdJk2afMSC8gex+NixYwxbDAewvPXWW+T8mJiYCG2YwMc7ceIExBESElJYWEjeQQaHSu/333+HOPz8/AS2R5wgwmZlZeHFTz/9hKQNwegaizcLThRci62trTCThBnBVIJviLsBvvTixYuqN99//318WwcHh+LiYqRsqGLy8/PVR5nKykqp18P4sl5eXo6OjmqeFCFPfBoZGcF5NG7ceMWKFfHx8Th7ERER+PMTLPPmzUNQ3rFjhwA2C6ESJB/I0lWRBdUKvh6+P4IxecfQ0BCZfGJiIpTk4eFRcw9I9Y8cOQIn9Ntvv507d47u4IGO4EpvYSHpFyJIzVE1MkyCs0Qeq8CN8U8W+No9e/bgUwQjJC44LcLYLIRKIIvhw4efPHkSsRYnZfz48TUnuMKpQCVwrS+oBLLAmygXb9y4Qd5JSUnhaU1+YUCegdKmoKAgOzvb09Nz8eLF48aNw2nBySGlHD6KiYlhalsKC6nbDJarV6/CtQj2c7pAEeeHH37o2LFj27Zt69rAysrK1dUVJy4tLQ2umIyq4aY5ffq0ahukLzibb7/9tiAm88VXX3312WefHTx4EN8O/z5//pyMqrVu3drGxgZ3C75yWVnZoEGDevXqVddOOnfuDHkJZrNwaw6o3wDnaOrUqfAZZJwAgRmnT/URTh/0gagk6VijAsW/BQvcBhlihjKKiorIqBoZGhB+OoUaKI+XqDhz5szTp0/xgjhbgJD8giuWHwg9/2JBRQPXgpvk1q1b5PZYtmwZ0nl8fXhZ6s/f0B9VQ8aKzOP8+fOqN5HNzZ49u9a0Tq707t17/fr1a9asgddEeot0FdXcURYEYktLS30cVUN+HhkZCU8bGxurqn3at2/fpUuX9PT0/v3711rpyJ6qqirk5gzbzOTx48c4P8nJyapRNWNjY/L7To8ePQQ2jM6oWnBw8MOHD8k7BgYGEydOxJdHJL5y5QrqQ7IilMATpsUA7hk4V4QhRBmcli+++OLSpUtwtJALiprr16+vZhkzZgz5rVgwwwRVSU5OTvUlXwcOHAhx2Nvb47yQd8isJJQ5QUFBc+fOFdI2MUCGSRwcHFTLdrzzzjurVq1asWIFQg+0smfPnuLi4tdff13gLF5QlZiYmAwZMuTatWuOjo4ItAjGNbfB+1AJbiB9U0lhYWFUVBRT28OL5OdxsHXrVghFTYXME0JHnPDwcNwKamZq2dnZubm5ZWRkZGZmCrkoFHVCQ0OR3AkkvQAADAZJREFUrpHZ9nVtQ0bVBDTqT4RWSb1lC1l5AWKC+/X19RXGKjEgQGM1rRHLeEl14HKhEqQma9euFWyxSrogY0NeT1YBom1LLYjxGpAVoZDtHz58GOUPbXOEAHkYyuDx48eL88FNMaqErC63adMmOGF9UEllZSX1OZ7qEaNKGPZ8QSX79+9H5i/Ysza0QJWLuo+sdErbltoRqUrIqrcoc0JCQr766iva5vALyVttbGxE2xZGpCphWHcyf/58nEF5q6S4uDgiIoIRcbhhxKwSZPsLFy4kXZUFaDpGC1RzEIqJiYmYnwkXr0pIZ4/o6Gjk/99++y1tc/hCNUwi5kdnxKsShnXCUElAQMCqVauk/lB0rVy9evXYsWP4atTneKpH1CqZNGkSMn/k//KbJExAAYwy2MzMTOQtuUWtEuT8tra227dvh1uWn0qqqqrorryoOaJWCcOeQagEVYCfn1+rVq1om8Mlqamply5dIp10adtSD2JXCemqjDIHtQCVn0P5g+StkEiLFi1o21IPYlcJw+b/Xl5eOKdyUsmzZ89CQ0MZKYQbRhIqQf6/ZMmSxMTEvLy8Ll260DaHG/bt2/fw4cPOnTuPGjWKti31IwGVGBsbkyc9URFALrTN4QbVUliSqPAloBKGdctQCSqCxYsXi3n0SUNu3boVGxuLLyKJcMNIRSWWlpYuLi65ublSnyRMCAwMrKiowBfp3r07bVs0QhoqQRWAWuCXX36Bo5aBSsT88GKtSEMlDBt0oBLUBZs3b6654qWESE9Pz8rKatasmY2NDW1bNEUyKkEtgAIHZQ6qAzEsSKc1ZLzVwsJCzQoMYkMyKiHLnq5atQruWroqef78+e7duxlJhRtGQiph2DPr7e195MiRmzdvvvnmm7TN0YaYmJiCgoI33nhDWv1epKQSVASmpqbJycmoEdzd3Wmbow0kb3V0dJRWhzEpqYRhc1ioBOdaiiq5d+9edHQ0I5FR+epITCWoC+bMmfPbb7+hUhgwYABtcxpGcHAw8hKYXesEaTEjMZW0adNmypQpON1wJ5JTieSGSVRITCUM666hElQK3333HVmCTBLA/50+fRoGOzg40LalwUhPJePGjUOBgzLn4MGDFhYWtM3RFDJM8tFHH7322mu0bWkw0lMJqgPUCOvXr4cDl4pKKioqAgICGGmGG0aKKmHYoAOVwJegapDErUnGeGCqRKc9S1Il77777sCBAxHmkZ24urrSNqd+SLixt7eXUCJVHUmqhGFdN1SCoCN+lTx69Ih0/5FouGGkqxLclwsWLEhPT0ftANdC2xx1hIWFPX36lPg/2rZoiVRVghiPegH3KNzJunXraJujDukOk6iQqkoYNoeFSgIDA318fET7s8jly5eTk5NhnpOTE21btEfCKiFjD6gdUEGYm5vTNqd2yFJYZIyHti3aI2GVoF5AdrJ161a4dHGqRDXHU9LhhpG0Shg26EAl+/btQx3Rpk0b2ua8yLFjx/Ly8mCYVEb/6kLaKiG/r2ZlZYWGhs6aNYu2OS9CHImNjY2kH9RlpK4ShnXm33zzDYKO2FTy5MmTPXv2MNIPN4wMVILawdPTMyUlJTc3V1TTWyIiIh4/fgyTZDA1RPIqIc+QxsTEwL2vXLmStjl/ocpbZTAZUfIqYdgrQVSyfPlykUy7vX79enx8PHnun7YtHCAHlUyZMqVt27ZXr15NTEwcPXo0bXP+ICAgoLKyEsbIY5EEOagEFYS1tfWOHTuQw4pEJTIYla+OHFTCsAMnUEl4ePi2bduoLy1E1qiFGVZWVnQt4QqZqMTU1BTVBMocVBbUUwGSt1paWspmITiZqAR5Itz70qVL4erpqqS0tDQ4OJiRUbhhZKMShr0qqHESEhKuXbtGcfnUqKiowsJCY2NjMzMzWjZwjnxUQtYog0pQXyxatIiWGSTcSGUpLA2Rj0oY1p1AJbhOtFRy586dQ4cOMfIKN4zMVIKaYvbs2agvUlNTqzcuFozAwMDy8nKyRq3wR+cPWamErMP8KwsVlUhlxfCGIiuVMKyrx6UKCQnZuHGjwK2rzp49e+7cuaZNm9ra2gp5XAGQm0rGjBmDAgdlDmoNgRcuI+OtkydPll+jQbmpBJWFk5PT6tWr4VGEVElZWVlQUBAjx3DDyE8lDBt0oJLDhw/fvn1bsPa8KG3u3r1L+oMJc0QhkaFKUF8gdUWZg5vbzc1NmIOSvNXR0VGWzdRl+JUY1p1AJUgUhFHJgwcP9u/fz8g03DByVQmqjHnz5mVmZmZkZPTr14/vwwUHB5eWlpIeyHwfiwryVAnp8x0aGopAIIBK5DpMokKeKmHYoAOVIDVZt26dgYEBfwe6ePHiyZMncQgpLoWlIbJVCWoNFDgoc2JiYuBX+DsQGSYxNzc3NDTk7yh0ka1KUGug4vD19UU44E8lqqWwZBxuGBmrhGGDDlRy4MCB+/fvt2/fno9DxMfH5+fnt2vX7uOPP+Zj/yJBzipBxYHUFWUOahAXFxc+DkHCjZ2dXdOmTfnYv0iQs0oYNhBAJQg6fKjk8ePHe/fuZeQebhjZq8Te3t7d3T0tLS07O7tnz57c7jwsLKykpKRHjx6DBw/mds9iQ+YqQd0xYcKEqKgouBMfHx9udy77YRIVMlcJw+awUAkqEW9vbw4X1rpy5UpiYqLUl8LSEPmrBNUHChxUInFxcRz2Ltq1a1dVVZWZmVmnTp242qdokb9KUH2gBvHz80OA4Eol0AdUwuhHuGH0QSUMG3SgEtQjRUVFrVu31n2HSUlJly9fbtWq1dSpU3Xfm/jRC5WgBkGBgzIHVcnMmTN13yEZJrG2tm7evLnuexM/eqEShg0NHh4eCDq6qwTVL9TG6E24YfRHJY6Ojl5eXsePH0dt0rVrV112FRkZiciFnYwYMYIr80SOvqgElcjYsWNjY2PJkkm67IqEm+nTp8tgKSwN0ReVMGyAgEpQmyxbtkzrC3zjxg1U1LJZCktD9EglFhYWKHAQcRB3Ro4cqd1OAgICKioqEGu6devGrXliRo9UgnoEVYm/vz+CjtYq0Z9R+erokUoYduAEKkGFsmXLFi2K2FOnTl24cIGojQ/zRIt+qQSRArUJgs7evXtR9TT0z0neSiIXD9aJF/1SCVlYCzUOAkdDVfL8+XOyFJa+hRtG31TCsBXsihUrUKfk5+c36Ic68mSkkZERKmr+zBMneqcSMhqWmJiIasXDw0PzPyThxsnJSbR9vfhD71TCsCEDKkHQ0VwlBQUFMTExjOyWwtIQfVSJlZWVq6trdnZ2Wlqahg8jBgUFlZWVDRo0qFevXnybJ0L0USWoUKZOnRoYGIggoqFKSLjRw7yVoI8qYdjrDZWgZtmwYUO9kyTIrHTyNJMw5okNPVUJeRIRZQ4ql2nTpqnfmIy3Tpw4kaepX+JHT1VCnmpes2YNQol6lZSXl8PrMHocbhi9VQnDXnWohKx0pWYieGxs7O3btzt06DBhwgQhzRMV+qsSMtsKZQ7ql7lz59a1GclbHRwceF3eQuTor0oY1p1AJUg76lJJYWFhVFQUo9/hhtFzlaBmcXNzQ/2CKqbWxa5CQ0OfPXtGZqULb5540GuVkBUlwsPDEVZ8fX1rbiCzxmpao9cqYdhQApUgNVm7du0Li3Dm5OScOHGCrJZDyzyRoO8qIStdoYo5fPjwxIkTq3+EfKWqqmr8+PGCLS0sWvRdJWTVvE2bNiG4VFdJZWWlXs3xVI++q4RhdQCV7N+/HxWN6s2jR49eu3aNrAhK0TaRoKiEIav5oswJCQlRvUnyVhsbG4Hbp4gTRSV/AHcyf/58ogyGbVARERHBKOHmfygq+QNUMQsXLkRF06dPH/w3Nze3uLjYxMRk6NChtE0TBYpK/oB0LImOjr537x7+m52dzbDDJPozx1M9ikr+BMEFKrl//z5e5+fnN2rUSK/meKpHUcmfTJo0CRWNqswZPXo0xdbVYkNRyZ+glrG1td2+fTv5r5K3VkdRyV9AGUQlBgYG9T7AplcoKvkLVDQtW7ZEddO7d+8WLVrQNkdEKCr5G56enl5eXrX+PqzPKCr5G6hr/P39R40aRdsQcaGo5G8YGxvv3LkTZTBtQ8TF/wPXdQbVdTRquwAAAABJRU5ErkJggg==";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1/2, a_image.height*1/2);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",80,130);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",80,30);
		}
		return 0;
	}
	function GambarKelilingBangunDatar5(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "left";
			ctx.fillText(Arr[0]+" cm",180,30);
		}
		return 0;
	}
	function GambarKelilingBangunDatar4(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",110,20);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",170,90);
		}
		return 0;
	}
	function GambarKelilingBangunDatar3(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",135,150);
			ctx.fillText(Arr[2]+" cm",135,20);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",220,80);
		}
		return 0;
	}
	function GambarKelilingBangunDatar2(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",130,20);
			ctx.fillText(Arr[0]+" cm",130,220);
			ctx.textAlign = "right";
			ctx.fillText(Arr[1]+" cm",40,120);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",230,120);
		}
		return 0;
	}
	function GambarKelilingBangunDatar1(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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rwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAAAEhSURBVHic7dKhjQJhFEbRnTChTagCAiXgKABNddghOMTegFnNvwnnqPfcJ+68LMv5fP7hu+33+/l+vx8Oh9FLGGy3282vZ7PZTNM0cA2f93g8rtfr7/1O4XK5rFarQZMY43a7/ZECX04KRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECkQKRApECuSdwul0mqZp4BQ+b1mW1/1O4Xg8jhjDfzGv1+vtdjt6BuM9AWFnILh3f/IsAAAAAElFTkSuQmCC";
		a_image.onload = function () {
			ctx.drawImage(a_image, 50, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",130,20);
			ctx.fillText(Arr[0]+" cm",130,130);
			ctx.textAlign = "right";
			ctx.fillText(Arr[1]+" cm",40,75);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",230,75);
		}
		return 0;
	}
	function GetSoal1(canv){
		const Aljabar = MyKelilingBangunDatar1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar1(canv,ArSisi);
		var ss
		ss = "Keliling persegi panjang di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyKelilingBangunDatar2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar2(canv,ArSisi);
		var ss
		ss = "Keliling persegi di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyKelilingBangunDatar3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar3(canv,ArSisi);
		var ss
		ss = "Keliling trapesium di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyKelilingBangunDatar4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar4(canv,ArSisi);
		var ss
		ss = "Keliling jajar genjang di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyKelilingBangunDatar5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar5(canv,ArSisi);
		var ss
		ss = "Keliling belah ketupat di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MyKelilingBangunDatar6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar6(canv,ArSisi);
		var ss
		ss = "Bangun di atas bernama ... dan kelilingnya yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal7(canv){
		const Aljabar = MyKelilingBangunDatar7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar7(canv,ArSisi);
		var ss
		ss = "Keliling segitiga di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyKelilingBangunDatar8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar8(canv,ArSisi);
		var ss
		ss = "Keliling segitiga sama kaki di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal9(canv){
		const Aljabar = MyKelilingBangunDatar9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar9(canv,ArSisi);
		var ss
		ss = "Keliling segitiga sama sisi di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyKelilingBangunDatar10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar10(canv,ArSisi);
		var ss
		ss = "Bangun di atas bernama ... dan kelilingnya yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal11(canv){
		const Aljabar = MyKelilingBangunDatar11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar11(canv,ArSisi);
		var ss
		ss = "Keliling segienam di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal12(canv){
		const Aljabar = MyKelilingBangunDatar12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar12(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal13(canv){
		const Aljabar = MyKelilingBangunDatar13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar13(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal14(canv){
		const Aljabar = MyKelilingBangunDatar14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar14(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal15(canv){
		const Aljabar = MyKelilingBangunDatar15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar15(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal16(canv){
		const Aljabar = MyKelilingBangunDatar16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar16(canv,ArSisi);
		var ss
		ss = "Keliling persegi di atas yaitu "+ArSisi[1]+" cm. Panjang sisi a yaitu ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal17(canv){
		const Aljabar = MyKelilingBangunDatar17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar17(canv,ArSisi);
		var ss
		ss = "Keliling persegi panjang di atas yaitu "+ArSisi[1]+" cm. Panjang sisi b yaitu ...";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal18(canv){
		const Aljabar = MyKelilingBangunDatar18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar18(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu "+ArSisi[3]+" cm. Panjang sisi c yaitu ...";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal19(canv){
		const Aljabar = MyKelilingBangunDatar19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar19(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas yaitu "+ArSisi[2]+" cm. Panjang sisi a yaitu ...";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal20(canv){
		const Aljabar = MyKelilingBangunDatar20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawKeliling = GambarKelilingBangunDatar20(canv,ArSisi);
		var ss
		ss = "Keliling bangun datar gabungan di atas adalah "+ArSisi[4]+" cm. Panjang sisi a yaitu ...";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
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
	
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 4 \u{2192} Keliling Bangun Datar </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 130;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 230;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 190;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 190;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 220;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 200;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 160;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 150;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut!</p>";
		cc1.width = 290;
		cc1.height = 190;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
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
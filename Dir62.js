function Print62(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function NoJawabanBenarArray(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			//console.log(arraysAreEqual(Arr[i], jwb));
			if (arraysAreEqual(Arr[i], jwb)){
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
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function PecBiasaCampuran(m,n){
		var a = Math.floor(m/n);
		var b = Mods(m,n);
		var c = n;
		var FPB = CariFPB([b,c]);
		b = b/FPB;
		c = c/FPB;
		return [a,b,c];
	}
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+","+gg[1];
		else 				return ff
	}
	function NBelakangKoma(ff,n){
		var fix = (Math.round(ff*10**n))/10**n;
		return fix
	}
	function MyRasio1(){
		do{
			var aa = RandomAngkaAtoB(0,20);
			var bb = RandomAngkaAtoB(29,21);
			var FPB = CariFPB([aa,bb]);
		}while(FPB==1);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [aa,bb];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = stra+" : "+strb;
		var salah1 = stra+" : "+bb;				FPB = CariFPB([stra,bb]);	salah1 = (stra)/FPB+" : "+(bb)/FPB;
		var salah2 = aa+" : "+strb;				FPB = CariFPB([aa,strb]);	salah2 = (aa)/FPB+" : "+(strb)/FPB;
		var salah3 = (stra+1)+" : "+strb;		FPB = CariFPB([stra+1,strb]);	salah3 = (stra+1)/FPB+" : "+(strb)/FPB;
		var salah4 = stra+" : "+(strb+1);		FPB = CariFPB([stra,strb+1]);	salah4 = (stra)/FPB+" : "+(strb+1)/FPB;
		var salah5 = (stra+1)+" : "+(strb+1);	FPB = CariFPB([stra+1,strb+1]);	salah5 = (stra+1)/FPB+" : "+(strb+1)/FPB;
		var salah6 = (stra-1)+" : "+(strb-1);	FPB = CariFPB([stra-1,strb-1]);	salah6 = (stra-1)/FPB+" : "+(strb-1)/FPB;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1||ff2);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio2(){
		do{
			var aa = RandomAngkaAtoB(0,20);
			var bb = RandomAngkaAtoB(29,21);
			var FPB = CariFPB([aa,bb]);
		}while(FPB==1);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [stra,strb,aa];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb;
		var salah1 = bb+1;
		var salah2 = bb+2;
		var salah3 = bb+3;
		var salah4 = bb-1;
		var salah5 = bb-2;
		var salah6 = bb-3;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio3(){
		do{
			var aa = RandomAngkaAtoB(0,200);
			var bb = RandomAngkaAtoB(0,200);
			var cc = RandomAngkaAtoB(0,200);
			var FPB = CariFPB([aa,bb,cc]);
		}while(FPB==1);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		var strc = cc/FPB;
		
		var hasil = stra+" : "+strb+" : "+strc;
		var ArSisi = [aa,bb,cc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = stra+" : "+strb+" : "+strc;
		var salah1 = (stra+1)+" : "+strb+" : "+strc;
		var salah2 = stra+" : "+(strb+1)+" : "+strc;
		var salah3 = stra+" : "+strb+" : "+(strc+1);
		var salah4 = (stra+1)+" : "+(strb+1)+" : "+strc;
		var salah5 = (stra+1)+" : "+strb+" : "+(strc+1);
		var salah6 = stra+" : "+(strb+1)+" : "+(strc+1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio4(){
		do{
			var aa = RandomAngkaAtoB(0,200);
			var bb = RandomAngkaAtoB(0,200);
			var cc = RandomAngkaAtoB(0,200);
			var FPB = CariFPB([aa,bb,cc]);
		}while(FPB==1);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		var strc = cc/FPB;
		
		var hasil = stra+" : "+strb+" : "+strc;
		var ArSisi = [stra,strb,strc,aa];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb+cc;
		var salah1 = bb;
		var salah2 = cc;
		var salah3 = bb+cc+1;
		var salah4 = bb+cc-1;
		var salah5 = bb+1;
		var salah6 = cc+1;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio5(){
		do{
			var aa = RandomAngkaAtoB(0,400);
			var bb = RandomAngkaAtoB(0,400);
			var cc = RandomAngkaAtoB(0,400);
			var FPB = CariFPB([aa,bb,cc]);
		}while(FPB==1);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		var strc = cc/FPB;
		var total = aa+bb+cc;
		
		var hasil = stra+" : "+strb+" : "+strc;
		var ArSisi = [total,stra,strb,strc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		//sapi, kerbau dan ayam 
		var benar = "sapi "+aa+" ekor, kerbau "+bb+" ekor, dan ayam "+cc+" ekor";
		var salah1 = "sapi "+bb+" ekor, kerbau "+aa+" ekor, dan ayam "+cc+" ekor";
		var salah2 = "sapi "+cc+" ekor, kerbau "+bb+" ekor, dan ayam "+aa+" ekor";
		var salah3 = "sapi "+bb+" ekor, kerbau "+cc+" ekor, dan ayam "+aa+" ekor";
		var salah4 = "sapi "+cc+" ekor, kerbau "+bb+" ekor, dan ayam "+aa+" ekor";
		var salah5 = "sapi "+aa+" ekor, kerbau "+cc+" ekor, dan ayam "+bb+" ekor";
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio6(){
		do{
			var aa = RandomAngkaAtoB(0,48);
			var bb = RandomAngkaAtoB(0,48);
			var cc = RandomAngkaAtoB(0,48);
			var FPB = CariFPB([aa,bb,cc]);
			var total = aa+bb+cc;
		}while(FPB==1 || total!==48);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		var strc = cc/FPB;
		var selisih = Math.abs(bb-cc);
		
		var hasil = stra+" : "+strb+" : "+strc;
		var ArSisi = [total,stra,strb,strc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		//sapi, kerbau dan ayam 
		var benar = Math.abs(bb-cc);
		var salah1 = Math.abs(aa-cc);
		var salah2 = Math.abs(bb-aa);
		var salah3 = Math.abs(bb-cc+1);
		var salah4 = Math.abs(bb-cc-1);
		var salah5 = Math.abs(bb-cc+1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio7(){
		do{
			var aa = RandomAngkaAtoB(0,500);
			var bb = RandomAngkaAtoB(0,500);
			var cc = RandomAngkaAtoB(0,500);
			var FPB = CariFPB([aa,bb,cc]);
			var total = aa+bb+cc;
		}while(FPB==1 || total!==500);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		var strc = cc/FPB;
		var selisih = Math.abs(bb-cc);
		
		var hasil = stra+" : "+strb+" : "+strc;
		var ArSisi = [total,stra,strb,strc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		//sapi, kerbau dan ayam 
		var benar = Math.abs(bb-cc);
		var salah1 = Math.abs(aa-cc);
		var salah2 = Math.abs(bb-aa);
		var salah3 = Math.abs(bb-cc+1);
		var salah4 = Math.abs(bb-cc-1);
		var salah5 = Math.abs(bb-cc+1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio8(){
		do{
			var aa = RandomAngkaAtoB(25,40);
			var bb = RandomAngkaAtoB(25,40);
			var FPB = CariFPB([aa,bb]);
			var selisih = Math.abs(aa-bb);
		}while(FPB==1 || selisih==0);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [stra,strb,selisih];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = aa+" tahun dan "+bb+" tahun";
		var salah1 = bb+" tahun dan "+aa+" tahun";
		var salah2 = (aa+1)+" tahun dan "+(bb)+" tahun";
		var salah3 = (aa+1)+" tahun dan "+(bb+1)+" tahun";
		var salah4 = (aa)+" tahun dan "+(bb+1)+" tahun";
		var salah5 = (aa-1)+" tahun dan "+(bb-1)+" tahun";
		var salah6 = (aa-1)+" tahun dan "+(bb)+" tahun";
		var salah7 = (aa)+" tahun dan "+(bb-1)+" tahun";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio9(){
		do{
			var aa = RandomAngkaAtoB(0,40);
			var bb = RandomAngkaAtoB(0,40);
			var FPB = CariFPB([aa,bb]);
			var selisih = Math.abs(aa-bb);
		}while(FPB==1 || selisih==0);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [stra,strb,selisih];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb+" anak";
		var salah1 = (bb+1)+" anak";
		var salah2 = (bb+2)+" anak";
		var salah3 = (bb+3)+" anak";
		var salah4 = (bb-1)+" anak";
		var salah5 = (bb-2)+" anak";
		var salah6 = (bb-3)+" anak";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio10(){
		do{
			var aa = RandomAngkaAtoB(0,40);
			var bb = RandomAngkaAtoB(0,40);
			var FPB = CariFPB([aa,bb]);
			var selisih = Math.abs(aa-bb);
			var jumlah = aa+bb;
		}while(FPB==1 || selisih==0);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [stra,strb,jumlah];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = selisih;
		var salah1 = (selisih+1);
		var salah2 = (selisih+2);
		var salah3 = (selisih+3);
		var salah4 = (selisih-1);
		var salah5 = (selisih-2);
		var salah6 = (selisih-3);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]<1 || arrSalah[1]<1 || arrSalah[2]<1
		}while(ff1 || ff2);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyRasio11(){
		do{
			var aa = RandomAngkaAtoB(0,100);
			var bb = RandomAngkaAtoB(0,100);
			var FPB = CariFPB([aa,bb]);
			var selisih = Math.abs(aa-bb);
			var jumlah = 2*aa+4*bb;
		}while(FPB==1 || selisih==0);
		
		var stra = aa/FPB;
		var strb = bb/FPB;
		
		var hasil = stra+" : "+strb;
		var ArSisi = [jumlah,4*bb];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = aa+" buah";
		var salah1 = (aa+1)+" buah";
		var salah2 = (aa+2)+" buah";
		var salah3 = (aa*2)+" buah";
		var salah4 = (aa-1)+" buah";
		var salah5 = (aa-2)+" buah";
		var salah6 = (aa*2-1)+" buah";
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
		
		
	function GetSoal1(){
		const Aljabar = MyRasio1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = ""+Nama[0]+" berusia "+ArSisi[0]+" tahun sedangkan usia ayahnya adalah "+ArSisi[1]+" tahun. Berapakah perbandingan usia "+Nama[0]+" dan usia ayahnya?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyRasio2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Perbandingan usia "+Nama[0]+" dan "+Nama[1]+" adalah "+ArSisi[0]+" : "+ArSisi[1]+". Jika usia "+Nama[0]+" adalah "+ArSisi[2]+" tahun, maka berapakah usia dari "+Nama[1]+"?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(){
		const Aljabar = MyRasio3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = ""+Nama[0]+" memiliki permen berjumlah "+ArSisi[0]+", "+Nama[1]+" memiliki "+ArSisi[1]+" permen dan "+Nama[2]+" memiliki "+ArSisi[2]+" permen. Berapakah perbandingan permen yang mereka bertiga miliki?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MyRasio4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = ""+Nama[0]+", "+Nama[1]+", dan "+Nama[2]+" memiliki perbandingan jumlah boneka "+ArSisi[0]+" : "+ArSisi[1]+" : "+ArSisi[2]+". Jika "+Nama[0]+" memiliki boneka sejumlah "+ArSisi[3]+", maka berapa jumlah boneka yang dimiliki "+Nama[1]+" dan "+Nama[2]+"?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyRasio5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Jumlah sapi, kerbau dan ayam dalam satu kandang adalah "+ArSisi[0]+" ekor. Jika perbandangan sapi, kerbau dan ayam adalah "+ArSisi[1]+" : "+ArSisi[2]+" : "+ArSisi[3]+". Maka banyak masing-masing hewan dalam kandang adalah?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyRasio6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Di dalam kelas terdapat jumlah siswa sebanyak "+ArSisi[0]+" anak. Jika perbandingan antara jumlah siswa yang suka pelajaran IPA, IPS dan Matematika adalah "+ArSisi[1]+" : "+ArSisi[2]+" : "+ArSisi[3]+". Maka selisih banyak anak yang suka pelajaran IPS dan Matematika adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyRasio7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Bayu memiliki jumlah kelereng sebanyak "+ArSisi[0]+" buah. Dengan perbandingan warna merah, kuning dan hijau adalah "+ArSisi[1]+" : "+ArSisi[2]+" : "+ArSisi[3]+". Maka selisih kelereng warna kuning dan hijau adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyRasio8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Usia ayah dan ibu memiliki perbandingan "+ArSisi[0]+" : "+ArSisi[1]+". Jika selisih usia mereka berdua adalah "+ArSisi[2]+" tahun, maka usia ayah dan ibu yang sebenarnya adalah…";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MyRasio9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Selisih siswa kelas 5 dan kelas 6 SD Kartanegara adalah "+ArSisi[2]+" anak. Jika perbandingan jumlah siswa antara kelas 5 dan kelas 6 adalah "+ArSisi[0]+" : "+ArSisi[1]+". Maka jumlah anak kelas 6 adalah…";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(){
		const Aljabar = MyRasio10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Jumlah bunga mawar dan melati di sebuah taman adalah "+ArSisi[2]+" buah. Jika bunga mawar dan melati mempunyai perbandingan "+ArSisi[0]+" : "+ArSisi[1]+". Maka selisih bunga mawar dan melati adalah…";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+" buah";
		Ar[1] = StringDesimal(Ar[1])+" buah";
		Ar[2] = StringDesimal(Ar[2])+" buah";
		Ar[3] = StringDesimal(Ar[3])+" buah";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(){
		const Aljabar = MyRasio11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = "Di dalam sebuah kandang terdapat "+ArSisi[0]+" kaki. Terdiri dari kaki ayam dan kaki kambing. Jika jumlah kaki kambing adalah "+ArSisi[1]+". Maka jumlah ayam dalam kandang tersebut adalah…";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
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
					GetSoal11];
	
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
	
	
	dd1.innerHTML="<p>Kelas 6 Bab 2 \u{2192} Rasio </p>";
	
	ss = namefunc[no-1]();
	if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
	else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
	dd4.innerHTML+="Jawaban : "+ss[1];
	hidingElemen(cc1);
	hidingElemen(cc2);
	hidingElemen(cc3);
	hidingElemen(dd2);
	hidingElemen(dd3);

	function hidingElemen(elem){
		//hiding elemen
		elem.setAttribute("hidden", "hidden");
	}
}
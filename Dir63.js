function Print63(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function NamaBilangan(){
		var Bilangan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"];
		//Ekskul = RandomMyArray(Ekskul);
		return Bilangan;
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
	function MyBalokdanKubus1(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff);
		
		var volume = pp*ll*tt;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = volume;
		var salah1 = volume-10;
		var salah2 = volume-20;
		var salah3 = volume-30;
		var salah4 = volume+10;
		var salah5 = volume+20;
		var salah6 = volume+30;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus2(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || tt<4);
		
		var volume = pp*ll*tt;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll," ? ",volume];
		var arrSalah = [];
		
		var benar = tt;
		var salah1 = tt-1;
		var salah2 = tt-2;
		var salah3 = tt-3;
		var salah4 = tt+1;
		var salah5 = tt+2;
		var salah6 = tt+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus3(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || tt<4);
		
		var volume = pp*ll*tt;
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp," ? ",tt,volume];
		var arrSalah = [];
		
		var benar = luasP;
		var salah1 = luasP-10;
		var salah2 = luasP-20;
		var salah3 = luasP-30;
		var salah4 = luasP+10;
		var salah5 = luasP+20;
		var salah6 = luasP+30;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus4(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || tt<4);
		
		var volume = pp*ll*tt;
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = luasP;
		var salah1 = luasP-10;
		var salah2 = luasP-20;
		var salah3 = luasP-30;
		var salah4 = luasP+10;
		var salah5 = luasP+20;
		var salah6 = luasP+30;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus5(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[0];
			var tt = ArAngka[0];
			var ff = pp>3;
		}while(!ff);
		
		var volume = pp*ll*tt;
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = volume;
		var salah1 = Math.round(volume*70/100);
		var salah2 = Math.round(volume*80/100);
		var salah3 = Math.round(volume*90/100);
		var salah4 = Math.round(volume*110/100);
		var salah5 = Math.round(volume*120/100);
		var salah6 = Math.round(volume*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=1 || arrSalah[2]<=0;
		}while(ff1||ff2||ff3);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus6(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[0];
			var tt = ArAngka[0];
			var ff = pp>3;
		}while(!ff);
		
		var volume = pp*ll*tt;
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = luasP;
		var salah1 = Math.round(luasP*70/100);
		var salah2 = Math.round(luasP*80/100);
		var salah3 = Math.round(luasP*90/100);
		var salah4 = Math.round(luasP*110/100);
		var salah5 = Math.round(luasP*120/100);
		var salah6 = Math.round(luasP*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=1 || arrSalah[2]<=0;
		}while(ff1||ff2||ff3);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus7(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var ss1 = ArAngka[0];
			var ss2 = ArAngka[1];
			var ff = ss1>3 && ss2>3;
		}while(!ff);
		
		var volume1 = ss1**3;
		var volume2 = ss2**3;
		var luasP1 = 6*(ss1*ss1);
		var luasP2 = 6*(ss2*ss2);
		
		var selisihV = Math.abs(volume1 - volume2);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ss1,ss2];
		var arrSalah = [];
		
		var benar = selisihV;
		var salah1 = Math.round(selisihV*70/100);
		var salah2 = Math.round(selisihV*80/100);
		var salah3 = Math.round(selisihV*90/100);
		var salah4 = Math.round(selisihV*110/100);
		var salah5 = Math.round(selisihV*120/100);
		var salah6 = Math.round(selisihV*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=1 || arrSalah[2]<=0;
		}while(ff1||ff2||ff3);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus8(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || tt<4);
		
		var volume = pp*ll*tt;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll," ? ",volume];
		var arrSalah = [];
		
		var benar = tt;
		var salah1 = tt-1;
		var salah2 = tt-2;
		var salah3 = tt-3;
		var salah4 = tt+1;
		var salah5 = tt+2;
		var salah6 = tt+3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus9(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || tt<4);
		
		var volume = pp*ll*tt;
		var volBenar = [StringRibuan(volume)+" cm\u{00B3}",StringDesimal(volume/1000)+" dm\u{00B3}",StringDesimal(volume/1000000)+" m\u{00B3}",StringDesimal(volume/1000)+" liter"]
		var volSalah = [StringRibuan(volume)+" dm\u{00B3}",StringRibuan(volume)+" liter",StringDesimal(volume/1000)+" cm\u{00B3}",StringDesimal(volume/1000)+" m\u{00B3}",StringDesimal(volume/1000000)+" liter",StringDesimal(volume/1000000)+" cm\u{00B3}",StringDesimal(volume/1000)+" m\u{00B3}"]
		volBenar = RandomMyArray(volBenar);
		volSalah = RandomMyArray(volSalah);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt,volume];
		var arrSalah = [];
		
		var benar = volBenar[0];
		var arrSalah = volSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus10(){
		var ArAngka = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]//,25,125,325,625];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || pp<40);
		
		var volume = pp*ll*tt;
		var volumedm3 = pp*ll*tt/1000;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt,volumedm3];
		var arrSalah = [];
		
		var benar = pp;
		var salah1 = pp-10;
		var salah2 = pp-20;
		var salah3 = pp-30;
		var salah4 = pp+10;
		var salah5 = pp+20;
		var salah6 = pp+30;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus11(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var ss = ArAngka[0];
		}while(ss<4);
		
		var kali = RandomAngkaAtoB(2,10);
		var volume = ss**3;
		var volbalok = kali*volume;
		
		var volBenar = [StringRibuan(volbalok)+" cm\u{00B3}",StringDesimal(volbalok/1000)+" dm\u{00B3}",StringDesimal(volbalok/1000000)+" m\u{00B3}",StringDesimal(volbalok/1000)+" liter"];
		var volSalah = [StringRibuan(volbalok)+" dm\u{00B3}",StringRibuan(volbalok)+" liter",StringDesimal(volbalok/1000)+" cm\u{00B3}",StringDesimal(volbalok/1000)+" m\u{00B3}",StringDesimal(volbalok/1000000)+" liter",StringDesimal(volbalok/1000000)+" cm\u{00B3}",StringDesimal(volbalok/1000)+" m\u{00B3}"];
		volBenar = RandomMyArray(volBenar);
		volSalah = RandomMyArray(volSalah);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [kali,ss];
		var arrSalah = [];
		
		var benar = volBenar[0];
		var arrSalah = volSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus12(){
		var ArAngka = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || pp<40);
		
		var volume = pp*pp*pp;
		var volumedm3 = pp*pp*pp/1000;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = Math.round(volume*100/100);
		var salah1 = Math.round(volume*90/100);
		var salah2 = Math.round(volume*80/100);
		var salah3 = Math.round(volume*70/100);
		var salah4 = Math.round(volume*110/100);
		var salah5 = Math.round(volume*120/100);
		var salah6 = Math.round(volume*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus13(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || pp<4);
		
		var volume = pp*ll*tt;
		var volumedm3 = pp*ll*tt/1000;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp*ll,tt];
		var arrSalah = [];
		
		var benar = Math.round(volume*100/100);
		var salah1 = Math.round(volume*90/100);
		var salah2 = Math.round(volume*80/100);
		var salah3 = Math.round(volume*70/100);
		var salah4 = Math.round(volume*110/100);
		var salah5 = Math.round(volume*120/100);
		var salah6 = Math.round(volume*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus14(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[0];
			var tt = ArAngka[0];
			var ff = pp>3;
		}while(!ff);
		
		var volume = pp**3;
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [volume];
		var arrSalah = [];
		
		var benar = pp;
		var salah1 = Math.round(pp*25/100);
		var salah2 = Math.round(pp*50/100);
		var salah3 = Math.round(pp*75/100);
		var salah4 = Math.round(pp*125/100);
		var salah5 = Math.round(pp*150/100);
		var salah6 = Math.round(pp*175/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyBalokdanKubus15(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var Arpp = [4,5];
		var Arll = [1,2,3];
		Arpp = RandomMyArray(Arpp);
		Arll = RandomMyArray(Arll);
		
		ArAngka = RandomMyArray(ArAngka);
		var pp = Arpp[0]**2*Arll[0];
		var ll = Arpp[1]**2*Arpp[1];
		var tt = Arll[0]**2*Arpp[0];
		
		var volume = pp*ll*tt;
		var ss = Arpp[0]*Arpp[1]*Arll[0];
		var luasP = 2*(pp*ll + pp*tt + ll*tt);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = ss;
		var salah1 = Math.round(ss*25/100);
		var salah2 = Math.round(ss*50/100);
		var salah3 = Math.round(ss*75/100);
		var salah4 = Math.round(ss*125/100);
		var salah5 = Math.round(ss*150/100);
		var salah6 = Math.round(ss*175/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyBalokdanKubus16(){
		var ArAngka = [10,20,30,40,50,60,70,80,90,100];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || pp<4);
		
		var volume = pp*ll*tt;
		var volumedm3 = pp*ll*tt/1000;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = Math.round(volume*50/100);
		var salah1 = Math.round(volume*90/100);
		var salah2 = Math.round(volume*80/100);
		var salah3 = Math.round(volume*70/100);
		var salah4 = Math.round(volume*110/100);
		var salah5 = Math.round(volume*120/100);
		var salah6 = Math.round(volume*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus17(){
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff);
		
		var volumeK = pp*pp*pp;
		var volumeB = (pp+ll)*pp*tt;
		var volKB = volumeK + volumeB;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = volKB;
		var salah1 = volumeK;
		var salah2 = volumeB;
		var salah3 = Math.round(volKB*90/100);
		var salah4 = Math.round(volKB*80/100);
		var salah5 = Math.round(volKB*70/100);
		var salah6 = Math.round(volKB*60/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBalokdanKubus18(){
		var ArAngka = [10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
		do{
			ArAngka = RandomMyArray(ArAngka);
			var pp = ArAngka[0];
			var ll = ArAngka[1];
			var tt = ArAngka[2];
			var ff = pp>ll && pp>tt;
		}while(!ff || pp<20);
		
		var cvrtp = pp/2;
		var cvrtl = ll/2;
		var cvrtt = tt/2;
		
		var volume = cvrtp*cvrtl*cvrtt;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [pp,ll,tt];
		var arrSalah = [];
		
		var benar = Math.round(volume*100/100);
		var salah1 = Math.round(volume*90/100);
		var salah2 = Math.round(volume*80/100);
		var salah3 = Math.round(volume*70/100);
		var salah4 = Math.round(volume*110/100);
		var salah5 = Math.round(volume*120/100);
		var salah6 = Math.round(volume*130/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	
	
	function GambarBalokdanKubus17(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 70, 30,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "right";
			ctx.fillText(Arr[0]+" cm",60,140);
			ctx.fillText(Arr[0]+" cm",80,200);
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",150,230);
			ctx.textAlign = "right";
			ctx.fillText(Arr[1]+" cm",150,65);
			ctx.textAlign = "center";
			ctx.fillText(Arr[2]+" cm",230,25);
		}
		
		return 0;
	}
	function GambarBalokdanKubus3(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,120);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",200,100);
			ctx.fillText(Arr[2]+" cm",210,45);
		}
		
		return 0;
	}
	function GambarBalokdanKubus2(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,120);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",200,100);
			ctx.fillText(Arr[2]+" cm",210,45);
		}
		
		return 0;
	}
	function GambarBalokdanKubus1(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		a_image.onload = function () {
			ctx.drawImage(a_image, 0, 0,a_image.width*1, a_image.height*1);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillText(Arr[0]+" cm",80,120);
			ctx.textAlign = "left";
			ctx.fillText(Arr[1]+" cm",200,100);
			ctx.fillText(Arr[2]+" cm",210,45);
		}
		
		return 0;
	}
	function GetSoal1(canv){
		const Aljabar = MyBalokdanKubus1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		const DrawBalok = GambarBalokdanKubus1(canv,ArSisi);
		var ss
		ss = "Berapakah Volume balok tersebut? ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyBalokdanKubus2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		const DrawBalok = GambarBalokdanKubus2(canv,ArSisi);
		var ss
		ss = "Jika volume balok adalah "+StringRibuan(ArSisi[3])+" cm\u{00B3}, maka tinggi balok tersebut adalah ... ";
		
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
		const Aljabar = MyBalokdanKubus3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		const DrawBalok = GambarBalokdanKubus3(canv,ArSisi);
		var ss
		ss = "Jika volume balok adalah "+StringRibuan(ArSisi[3])+" cm\u{00B3}, maka luas permukaan balok tersebut adalah ... ";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MyBalokdanKubus4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Sebuah balok panjangnya "+ArSisi[0]+" cm. lebar "+ArSisi[1]+" cm, dan tingginya "+ArSisi[2]+" cm. Berapa cm\u{00B2} kah luas permukaannya?";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyBalokdanKubus5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = ""+Nama[0]+" membuat enam potongan kertas berbentuk persegi. Ukuran persegi tersebut adalah "+ArSisi[0]+" cm. "+Nama[0]+" merekatkannya menjadi kubus. Volume kubus yang dibuat "+Nama[0]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyBalokdanKubus6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Sebuah kubus sisinya "+ArSisi[0]+" cm. Berapa cm\u{00B2} luas permukaannya?";
		
		var Ar = [];
		var ArFix = [];
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyBalokdanKubus7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = ""+Nama[0]+" mempunyai kotak pensil berbentuk kubus dengan panjang sisinya "+ArSisi[0]+" cm. Lalu "+Nama[1]+" juga punya kotak pensil berbentuk kubus dengan panjang "+ArSisi[1]+" cm. Selisih volume kotak pensil mereka berdua adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyBalokdanKubus8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Volume sebuah bak mandi berbentuk balok adalah "+StringRibuan(ArSisi[3])+" dm\u{00B3}. Jika panjang dan lebar bak mandi tersebut adalah "+ArSisi[0]+" dm dan "+ArSisi[1]+" dm, maka tinggi bak tersebut adalah ...";
		
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
	function GetSoal9(){
		const Aljabar = MyBalokdanKubus9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Akuarium berbentuk balok dengan panjang, lebar dan tinggi sebesar "+ArSisi[0]+" cm, "+ArSisi[1]+" cm dan "+ArSisi[2]+" cm. Maka volumenya adalah ...";
		
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
	function GetSoal10(){
		const Aljabar = MyBalokdanKubus10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Pak "+Nama[0]+" mempunyai kotak buah berbentuk balok dengan volume sebesar "+StringRibuan(ArSisi[3])+" dm\u{00B3}. Jika lebar dan tinggi kotak buah itu adalah "+ArSisi[1]+" cm dan "+ArSisi[2]+" cm, maka panjangnya adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" dm";
		Ar[1] = StringRibuan(Ar[1])+" dm";
		Ar[2] = StringRibuan(Ar[2])+" dm";
		Ar[3] = StringRibuan(Ar[3])+" dm";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal11(){
		const Aljabar = MyBalokdanKubus11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Volume sebuah balok adalah "+ArSisi[0]+" kali volum kubus. Jika panjang sisi kubus adalah "+ArSisi[1]+" cm, maka volume balok tersebut adalah ...";
		
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
	function GetSoal12(){
		const Aljabar = MyBalokdanKubus12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "12. Sebuah bak penampungan air berbentuk kubus mempunyai panjang rusuk "+ArSisi[0]+" cm. Volume bak penampungan air tersebut adalah…";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal13(){
		const Aljabar = MyBalokdanKubus13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Luas alas sebuah balok "+StringRibuan(ArSisi[0])+" cm\u{00B2}, tinggi balok "+ArSisi[1]+" cm. Volume balok itu ... cm\u{00B3}";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MyBalokdanKubus14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Sebuah kubus mempunyai volume "+StringRibuan(ArSisi[0])+" dm\u{00B3}. Panjang rusuk kubus itu adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" dm";
		Ar[1] = StringRibuan(Ar[1])+" dm";
		Ar[2] = StringRibuan(Ar[2])+" dm";
		Ar[3] = StringRibuan(Ar[3])+" dm";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal15(){
		const Aljabar = MyBalokdanKubus15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "14. Sebuah kubus mempunyai volume "+StringRibuan(ArSisi[0])+" dm\u{00B3}. Panjang rusuk kubus itu adalah ...";
		ss = "15. Volume sebuah kubus sama dengan volume sebuah balok. Panjang, lebar, dan tinggi berturut-turut adalah "+ArSisi[0]+" cm, "+ArSisi[1]+" cm, dan "+ArSisi[2]+" cm. Panjang kubus itu adalah… cm";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal16(){
		const Aljabar = MyBalokdanKubus16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Sebuah akuarium berukuran panjang "+ArSisi[0]+" cm, lebar "+ArSisi[1]+" cm, dan tinggi "+ArSisi[2]+" cm. Akuarium itu diisi setengah bagian. Isi akuarium itu ...";
		
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal17(canv){
		const Aljabar = MyBalokdanKubus17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		const DrawBalok = GambarBalokdanKubus17(canv,ArSisi);
		var ss
		ss = "Berapakah Volume balok tersebut? ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" cm\u{00B3}";
		Ar[1] = StringRibuan(Ar[1])+" cm\u{00B3}";
		Ar[2] = StringRibuan(Ar[2])+" cm\u{00B3}";
		Ar[3] = StringRibuan(Ar[3])+" cm\u{00B3}";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal18(){
		const Aljabar = MyBalokdanKubus18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = ""+Nama[0]+" mempunyai kotak mainan yang berukuran "+ArSisi[0]+" cm \u{00D7} "+ArSisi[1]+" cm \u{00D7} "+ArSisi[2]+" cm. Kotak itu akan diisi kubus-kubus kecil yang berukuran 2 cm \u{00D7} 2 cm \u{00D7} 2 cm sampai penuh. Berapa banyaknya kubus kecil yang dapat dimuat kotak mainan tersebut?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" kubus kecil";
		Ar[1] = StringRibuan(Ar[1])+" kubus kecil";
		Ar[2] = StringRibuan(Ar[2])+" kubus kecil";
		Ar[3] = StringRibuan(Ar[3])+" kubus kecil";
		
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
					GetSoal18];
	
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
	
	
	dd1.innerHTML="<p>Kelas 6 Bab 3 \u{2192} Balok dan Kubus </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar balok berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar balok berikut!</p>";
		cc1.width = 290;
		cc1.height = 130;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar balok berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar balok berikut!</p>";
		cc1.width = 290;
		cc1.height = 130;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar balok berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar balok berikut!</p>";
		cc1.width = 290;
		cc1.height = 130;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar balok berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar balok berikut!</p>";
		cc1.width = 490;
		cc1.height = 230;
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
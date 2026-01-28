function Print64(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function MyPeluang1(){
		var model = RandomAngkaAtoB(-1,3);
		//var ArWarna = ["biru","kuning","putih"];
		var ArWarna = ["hijau","biru","kuning","putih"];
		var ArBanyak = [0,0,0];
		
		do{
			ArBanyak[0] = RandomAngkaAtoB(2,10);
			ArBanyak[1] = RandomAngkaAtoB(2,10);
			ArBanyak[2] = RandomAngkaAtoB(2,10);
			ArBanyak[3] = RandomAngkaAtoB(2,10);
			var total = ArBanyak[0] + ArBanyak[1] + ArBanyak[2] + ArBanyak[3];
		}while(total<8);
		
		var b1 = ArBanyak[model];
		var b2 = total;
		var csoal = [ArBanyak[0],ArBanyak[1],ArBanyak[2],ArBanyak[3],ArWarna[model]];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",ArBanyak[model],total];
		var csalah1 = ["",ArBanyak[0],total];
		var csalah2 = ["",ArBanyak[1],total];
		var csalah3 = ["",ArBanyak[2],total];
		var csalah4 = ["",ArBanyak[3],total];
		var csalah5 = ["",ArBanyak[0],ArBanyak[1]];
		var csalah6 = ["",ArBanyak[1],ArBanyak[2]];
		var csalah7 = ["",ArBanyak[2],ArBanyak[3]];
		var csalah8 = ["",ArBanyak[3],ArBanyak[0]];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang2(){
		var model = RandomAngkaAtoB(-1,3);
		var ArWarna = ["biru","kuning","putih"];
		var ArBanyak = [0,0,0];
		
		do{
			ArBanyak[0] = RandomAngkaAtoB(2,10);
			ArBanyak[1] = RandomAngkaAtoB(2,10);
			ArBanyak[2] = RandomAngkaAtoB(2,10);
			ArBanyak[3] = RandomAngkaAtoB(2,10);
			var total = ArBanyak[0] + ArBanyak[1] + ArBanyak[2] + ArBanyak[3];
		}while(total<8);
		
		var b1 = ArBanyak[model];
		var b2 = total;
		var csoal = [ArBanyak[0],ArBanyak[1],ArBanyak[2],ArBanyak[3],ArWarna[model]];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["0","",""];
		var csalah1 = ["",1,2];
		var csalah2 = ["",1,3];
		var csalah3 = ["",1,4];
		var csalah4 = ["1","",""];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["1",1,4];
		var csalah8 = ["2","",""];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang3(){
		var model = RandomAngkaAtoB(-1,4);
		var ArSoal = ["genap","ganjil"];
		ArSoal = RandomMyArray(ArSoal);
		var ArBanyak = ["1, 2, 3, dan 4","1, 2, 3, 4, 5, dan 6","1, 2, 3, 4, 5, 6, 7, dan 8","1, 2, 3, 4, 5, 6, 7, 8, 9, dan 10"];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		var total = model*2+4;
		var csoal = [total,ArBanyak[model],ArSoal[0]];
		
		var cbenar = ["",1,2];
		var csalah1 = ["0","",""];
		var csalah2 = ["",total/2-1,total];
		var csalah3 = ["",total/2+1,total];
		var csalah4 = ["1","",""];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["1",1,5];
		var csalah8 = ["1",1,7];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang4(){
		var ArBanyak = [["Ya, Tidak, dan Bisa Jadi",["Ya","Tidak","Bisa Jadi"]],
						["Bapak, Ibu, dan Anak",["Bapak","Ibu","Bisa"]],
						["Kiri, Kanan, dan Tengah",["Kiri","Kanan","Tengah"]],
						["Sepeda, Motor, dan Mobil",["Sepeda","Motor","Mobil"]]];
		ArBanyak = RandomMyArray(ArBanyak);
		ArPilihan = ArBanyak[0][1];
		ArPilihan = RandomMyArray(ArPilihan);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var csoal = [3,ArBanyak[0][0],ArPilihan[0]];
		
		var cbenar = ["",1,3];
		var csalah1 = ["0","",""];
		var csalah2 = ["",1,2];
		var csalah3 = ["",1,4];
		var csalah4 = ["1","",""];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["2","",""];
		var csalah8 = ["2",1,3];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang5(){
		var model = RandomAngkaAtoB(-1,4);
		var ArWarna = ["sisi mata uang yang berlainan","sisi mata uang yang sama","satu sisi angka dan satu sisi gambar","satu sisi gambar dan satu sisi angka"];
		var ArBanyak = [0,0,0];
		
		do{
			ArBanyak[0] = RandomAngkaAtoB(2,10);
			ArBanyak[1] = RandomAngkaAtoB(2,10);
			ArBanyak[2] = RandomAngkaAtoB(2,10);
			ArBanyak[3] = RandomAngkaAtoB(2,10);
			var total = ArBanyak[0] + ArBanyak[1] + ArBanyak[2] + ArBanyak[3];
		}while(total<8);
		
		var b1 = ArBanyak[model];
		var b2 = total;
		var csoal = [ArWarna[model]];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",1,2];
		var csalah1 = ["",1,3];
		var csalah2 = ["",1,4];
		var csalah3 = ["",3,4];
		var csalah4 = ["1","",""];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["1",1,4];
		var csalah8 = ["2","",""];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang6(){
		var ArSoal = [["satu",1],
					  ["dua",2],
					  ["tiga",3],
					  ["empat",4],
					  ["lima",5],
					  ["enam",6],
					  ["tujuh",7],
					  ["delapan",8],
					  ["sembilan",9],
					  ["sepuluh",10]
					  ];
		ArSoal = RandomMyArray(ArSoal);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ArSoal[0][0]];
		var arrSalah = [];
		
		var benar = 2**ArSoal[0][1];
		var salah1 = 2**1;
		var salah2 = 2**2;
		var salah3 = 2**3;
		var salah4 = 2**4;
		var salah5 = 2**5;
		var salah6 = 2**6;
		var salah7 = 2**7;
		var salah8 = 2**8;
		var salah9 = 2**9;
		var salah10 = 2**10;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyPeluang7(){
		var ArSoal = [["satu",1],
					  ["dua",2],
					  ["tiga",3],
					  ["empat",4],
					  ["lima",5],
					  ["enam",6],
					  ["tujuh",7],
					  ["delapan",8],
					  ["sembilan",9],
					  ["sepuluh",10]
					  ];
		ArSoal = RandomMyArray(ArSoal);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		//var ArSisi = [ArSoal[0][0]];
		var arrSalah = [];
		var csoal = [ArSoal[0][0]];
		
		var cbenar = [6,ArSoal[0][1]];
		var csalah1 = [6,1];
		var csalah2 = [6,2];
		var csalah3 = [6,3];
		var csalah4 = [6,4];
		var csalah5 = [6,5];
		var csalah6 = [6,6];
		var csalah7 = [6,7];
		var csalah8 = [6,8];
		var csalah9 = [6,9];
		var csalah10 = [6,10];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9,csalah10];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
		
	}
	function MyPeluang8(){
		var model = RandomAngkaAtoB(-1,4);
		var ArWarna = ["sisi mata uang yang berlainan","sisi mata uang yang sama","satu sisi angka dan satu sisi gambar","satu sisi gambar dan satu sisi angka"];
		var ArBanyak = [0,0,0];
		
		do{
			ArBanyak[0] = RandomAngkaAtoB(2,10);
			ArBanyak[1] = RandomAngkaAtoB(2,10);
			ArBanyak[2] = RandomAngkaAtoB(2,10);
			ArBanyak[3] = RandomAngkaAtoB(2,10);
			var total = ArBanyak[0] + ArBanyak[1] + ArBanyak[2] + ArBanyak[3];
		}while(total<8);
		
		var b1 = ArBanyak[model];
		var b2 = total;
		var csoal = [ArWarna[model]];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["0","",""];
		var csalah1 = ["",1,3];
		var csalah2 = ["",1,4];
		var csalah3 = ["",3,4];
		var csalah4 = ["",1,2];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["1",1,4];
		var csalah8 = ["1","",""];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPeluang9(){
		var ArBenar = ["Peluang kejadian nilainya adalah dari 0 sampai 1",
					  "Peluang kejadian yang pasti terjadi nilainya adalah 1",
					  "Peluang kejadian yang mustahil terjadi nilainya adalah 0",
					  "Peluang kejadian muncul sisi angka pada 1 buah uang logam adalah \u{00BD}",
					  "Peluang kejadian muncul 2 angka pada 2 buah uang logam adalah \u{00BC}"
					  ];
		var ArSalah = ["Peluang kejadian nilainya adalah dari \u{2212}1 sampai 1",
					  "Peluang kejadian yang pasti terjadi nilainya adalah 0",
					  "Peluang kejadian yang mustahil terjadi nilainya adalah 1",
					  "Peluang kejadian muncul sisi angka pada 1 buah uang logam adalah 1",
					  "Peluang kejadian muncul 2 angka pada 2 buah uang logam adalah \u{00BD}"
					  ];
		ArBenar = RandomMyArray(ArBenar);
		ArSalah = RandomMyArray(ArSalah);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = ArBenar[0];
		arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyPeluang10(){
		var model = RandomAngkaAtoB(-1,4);
		var ArWarna = ["sisi mata uang yang berlainan","sisi mata uang yang sama","satu sisi angka dan satu sisi gambar","satu sisi gambar dan satu sisi angka"];
		var ArBanyak = [0,0,0];
		
		do{
			ArBanyak[0] = RandomAngkaAtoB(2,10);
			ArBanyak[1] = RandomAngkaAtoB(2,10);
			ArBanyak[2] = RandomAngkaAtoB(2,10);
			ArBanyak[3] = RandomAngkaAtoB(2,10);
			var total = ArBanyak[0] + ArBanyak[1] + ArBanyak[2] + ArBanyak[3];
		}while(total<8);
		
		var b1 = ArBanyak[model];
		var b2 = total;
		var csoal = [ArWarna[model]];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",1,4];
		var csalah1 = ["",1,2];
		var csalah2 = ["",1,3];
		var csalah3 = ["",3,4];
		var csalah4 = ["1","",""];
		var csalah5 = ["1",1,2];
		var csalah6 = ["1",1,3];
		var csalah7 = ["1",1,4];
		var csalah8 = ["2","",""];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3]];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}

	function GambarPeluang10(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang8(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang7(nmcanvas,Ar){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		function ApangkatB(_ctx,x,y,abjad,a,b){
			_ctx.strokeStyle = "black";
			_ctx.font = "16px Times New Roman";
			_ctx.textAlign = "left";
			_ctx.fillText(abjad,0,y+15);
			_ctx.textAlign = "center";
			_ctx.fillText(a,x+25,y+15);
			_ctx.font = "11px Times New Roman";
			_ctx.textAlign = "left";
			_ctx.fillText(b,x+31,y+5);
			_ctx.stroke();
		}
		ApangkatB(ctx,0,35*0+10,"A. ",Ar[2][0],Ar[2][1]);
		ApangkatB(ctx,0,35*1+10,"B. ",Ar[3][0],Ar[3][1]);
		ApangkatB(ctx,0,35*2+10,"C. ",Ar[4][0],Ar[4][1]);
		ApangkatB(ctx,0,35*3+10,"D. ",Ar[5][0],Ar[5][1]);
		return 0;
	}
	function GambarPeluang5(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang4(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang3(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang2(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPeluang1(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		let base2_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base2_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		base2_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				for(var i=0;i<4;i++){
					var Abjad = ["A","B","C","D"];
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					
					if(arrs[i+2][0]!=="" && arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],30,22+40*i);
					}else{
						if(arrs[i+2][0]==""){
							ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
							ctx.fillText(arrs[i+2][1],43,12+40*i);
							ctx.fillText(arrs[i+2][2],43,32+40*i);
						}else{
							ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
							ctx.fillText(arrs[i+2][0],30,22+40*i);
							ctx.fillText(arrs[i+2][1],47,12+40*i);
							ctx.fillText(arrs[i+2][2],47,32+40*i);
						}
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal1(){
		const Aljabar = MyPeluang1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Sebuah kantong berisi "+ArSisi[1][0]+" kelereng hijau, "+ArSisi[1][1]+" kelereng biru, "+ArSisi[1][2]+" kelereng kuning, dan "+ArSisi[1][3]+" kelereng putih. Jika kelereng tersebut diambil secara acak, peluang terambilnya kelereng "+ArSisi[1][4]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyPeluang2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Peluang kejadian Indonesia mengalami musim salju adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal3(){
		const Aljabar = MyPeluang3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Dalam sebuah kotak terdapat "+ArSisi[1][0]+" bola yang bertuliskan angka "+ArSisi[1][1]+". Peluang terambilnya angka "+ArSisi[1][2]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MyPeluang4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Dalam sebuah kotak terdapat "+ArSisi[1][0]+" kertas gulung dengan tulisan "+ArSisi[1][1]+". Peluang terambilnya kertas bertuliskan "+ArSisi[1][2]+" adalah?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal5(){
		const Aljabar = MyPeluang5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		ss = "Dua buah uang logam dilemparkan, peluang munculnya "+ArSisi[1][0]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyPeluang6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Jumlah ruang sampel pada pelemparan "+ArSisi[0]+" buah mata uang logam adalah ...";
		
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
		textJawab = jawab+"</p>";
		
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyPeluang7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Jumlah ruang sampel pada pelemparan "+ArSisi[1][0]+" buah dadu  adalah ...";
		
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
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyPeluang8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Sebuah lilin ditiup dengan kencang oleh "+Nama[0]+". Nilai peluang api di lilin tersebut tetap hidup adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MyPeluang9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		ss = "Pernyataan yang benar dari penyataan berikut adalah :";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal10(){
		const Aljabar = MyPeluang10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		var ArSs = ["Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama ganjil dan mata dadu kedua ganjil?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama prima dan mata dadu kedua bukan prima?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama ganjil dan mata dadu kedua prima?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama prima dan mata dadu kedua genap?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama kurang dari 4 dan mata dadu kedua lebih dari 3?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama ganjil dan mata dadu kedua lebih dari 3?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama genap dan mata dadu kedua lebih dari 3?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama prima dan mata dadu kedua lebih dari 3?",
					"Jika dua buah dadu dilemparkan, berapakah peluang munculnya mata dadu pertama kurang dari 4 dan mata dadu kedua prima?"
					]
		ArSs = RandomMyArray(ArSs);
		ss = ""+ArSs[0];
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		
		var textSoal = ss;
		ArFix.push(textSoal);
		ArFix.push(ArSisi);
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
					GetSoal10];
	
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
	
	
	dd1.innerHTML="<p>Kelas 6 Bab 4 \u{2192} Peluang </p>";
	
	if(no==1){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPeluang1 = GambarPeluang1(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==2){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPeluang2 = GambarPeluang2(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==3){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPeluang3 = GambarPeluang3(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==4){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPeluang4 = GambarPeluang4(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==5){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPeluang5 = GambarPeluang5(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==7){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 50;
		cc1.height = 140;
		const DrawPeluang7 = GambarPeluang7(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==8){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160; 
		const DrawPeluang8 = GambarPeluang8(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==10){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 70;
		cc1.height = 160; 
		const DrawPeluang10 = GambarPeluang10(cc1.id,ss[1]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1][0];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else{
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1][0];
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
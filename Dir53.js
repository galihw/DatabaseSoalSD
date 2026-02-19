function Print53(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function MyBilanganPecahan1(){
		do{
			var aa = RandomAngkaAtoB(0,99);
			var bb = 100;
			var FPB = CariFPB([aa,bb])
		}while(FPB==1)
		var printaa = aa/FPB;
		var printbb = bb/FPB;
		
		var csoal = [printaa,printbb];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = [aa,"",""];
		var csalah1 = [printaa,"",""];
		var csalah2 = [printbb,"",""];
		var csalah3 = [100+aa,"",""];
		var csalah4 = [10+aa,"",""];
		var csalah5 = [100+printaa,"",""];
		var csalah6 = [StringDesimal(aa/100),"",""];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan2(){
		do{
			var aa = RandomAngkaAtoB(0,99);
			var bb = 100;
			var FPB = CariFPB([aa,bb])
		}while(FPB==1)
		var printaa = aa/FPB;
		var printbb = bb/FPB;
		
		var csoal = [aa,"",""];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",printaa,printbb];
		var csalah1 = ["",aa,printbb];
		var csalah2 = ["",printaa,bb];
		var csalah3 = ["",printaa+2,printbb];
		var csalah4 = ["",printaa-2,printbb];
		var csalah5 = ["",printbb+1,printaa];
		var csalah6 = ["",printbb-1,printaa];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan3(){
		//var arFPB = [[6,2,3],[15,3,5],[10,2,5],[14,2,7],[21,3,7],[35,5,7],[18,3,6],[8,2,4],[27,3,9],[45,5,9]];
		var arFPB = [[4,100,2,50,1,25],[8,100,4,50,2,25],[16,100,8,50,4,25],[32,100,16,50,8,25],[64,100,32,50,16,25],
					[10,100,5,50,2,20],[10,100,5,50,1,10],[10,100,1,10,2,20],
					[20,100,10,50,4,20],[20,100,10,50,2,10],[20,100,2,10,4,20],[20,100,10,50,1,5],[20,100,1,5,2,10],[20,100,1,5,4,20],
					[30,100,15,50,6,20],[30,100,15,50,3,10],[30,100,3,10,6,20],
					[40,100,20,50,8,20],[40,100,20,50,4,10],[40,100,4,10,8,20],[40,100,20,50,2,5],[40,100,2,5,4,10],[40,100,2,5,8,20],
					
					[50,100,25,50,10,20],[50,100,25,50,5,10],[50,100,10,20,5,10],[50,100,25,50,2,4],[50,100,10,20,2,4],[50,100,25,50,1,2],[50,100,10,20,1,2],[50,100,5,10,1,2],[50,100,20,40,1,2],
					[60,100,30,50,12,20],[60,100,30,50,6,10],[60,100,12,20,6,10],[60,100,3,5,6,10],[60,100,30,50,3,5],[60,100,12,20,3,5],
					[70,100,35,50,14,20],[70,100,35,50,7,10],[70,100,14,20,7,10],
					[80,100,40,50,16,20],[80,100,40,50,4,5],[80,100,16,20,4,5],
					[90,100,45,50,18,20],[90,100,45,50,9,10],[90,100,18,20,9,10],
					[25,100,5,20,1,4]
					];
		arFPB = RandomMyArray(arFPB);
		var aa = [];
		aa[0] = arFPB[0][0];
		aa[1] = arFPB[0][1];
		aa[2] = arFPB[0][2];
		aa[3] = arFPB[0][3];
		aa[4] = arFPB[0][4];
		aa[5] = arFPB[0][5];
		var arrBenar = [["",aa[0],aa[3]], ["",aa[2],aa[5]], ["",aa[4],aa[1]],
						["",aa[0],aa[5]], ["",aa[2],aa[1]], ["",aa[4],aa[3]]];
		arrBenar = RandomMyArray(arrBenar);
		
		var csoal = [aa[0],"",""];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = arrBenar[0];
		var csalah1 = ["",aa[0],aa[1]];
		var csalah2 = ["",aa[2],aa[3]];
		var csalah3 = ["",aa[4],aa[5]];
		arrSalah = [csalah1,csalah2,csalah3];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
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
	function MyBilanganPecahan4(){
		//var arFPB = [[6,2,3],[15,3,5],[10,2,5],[14,2,7],[21,3,7],[35,5,7],[18,3,6],[8,2,4],[27,3,9],[45,5,9]];
		var arFPB = [[4,100,2,50,1,25],[8,100,4,50,2,25],[16,100,8,50,4,25],[32,100,16,50,8,25],[64,100,32,50,16,25],
					[10,100,5,50,2,20],[10,100,5,50,1,10],[10,100,1,10,2,20],
					[20,100,10,50,4,20],[20,100,10,50,2,10],[20,100,2,10,4,20],[20,100,10,50,1,5],[20,100,1,5,2,10],[20,100,1,5,4,20],
					[30,100,15,50,6,20],[30,100,15,50,3,10],[30,100,3,10,6,20],
					[40,100,20,50,8,20],[40,100,20,50,4,10],[40,100,4,10,8,20],[40,100,20,50,2,5],[40,100,2,5,4,10],[40,100,2,5,8,20],
					
					[50,100,25,50,10,20],[50,100,25,50,5,10],[50,100,10,20,5,10],[50,100,25,50,2,4],[50,100,10,20,2,4],[50,100,25,50,1,2],[50,100,10,20,1,2],[50,100,5,10,1,2],[50,100,20,40,1,2],
					[60,100,30,50,12,20],[60,100,30,50,6,10],[60,100,12,20,6,10],[60,100,3,5,6,10],[60,100,30,50,3,5],[60,100,12,20,3,5],
					[70,100,35,50,14,20],[70,100,35,50,7,10],[70,100,14,20,7,10],
					[80,100,40,50,16,20],[80,100,40,50,4,5],[80,100,16,20,4,5],
					[90,100,45,50,18,20],[90,100,45,50,9,10],[90,100,18,20,9,10],
					[25,100,5,20,1,4]
					];
		arFPB = RandomMyArray(arFPB);
		var aa = [];
		aa[0] = arFPB[0][0];
		aa[1] = arFPB[0][1];
		aa[2] = arFPB[0][2];
		aa[3] = arFPB[0][3];
		aa[4] = arFPB[0][4];
		aa[5] = arFPB[0][5];
		var arrBenar = [["",aa[0],aa[3]], ["",aa[2],aa[5]], ["",aa[4],aa[1]], ["",aa[0],aa[5]], ["",aa[2],aa[1]], ["",aa[4],aa[3]],
						[StringDesimal(aa[0]/aa[3]),"",""], [StringDesimal(aa[2]/aa[5]),"",""], [StringDesimal(aa[4]/aa[1]),"",""], [StringDesimal(aa[0]/aa[5]),"",""], [StringDesimal(aa[2]/aa[1]),"",""], [StringDesimal(aa[4]/aa[3]),"",""],
						[aa[2]+"%","",""], [aa[3]+"%","",""], [aa[4]+"%","",""], [aa[5]+"%","",""]
						];
		arrBenar = RandomMyArray(arrBenar);
		
		var csoal = ["",aa[4],aa[5]];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = arrBenar[0];
		var csalah1 = ["",aa[0],aa[1]];
		var csalah2 = ["",aa[2],aa[3]];
		var csalah3 = ["",aa[4],aa[5]];
		var csalah4 = ["",aa[0]*10,"1.000"];
		var csalah5 = [StringDesimal(aa[4]/aa[5]),"",""];
		var csalah6 = [aa[0]+"%","",""];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan5(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var bb = RandomAngkaAtoB(1,19);
			var aa = RandomAngkaAtoB(0,bb-1);
			var kali = RandomAngkaAtoB(1,4);
			var dd = bb*kali;
			var cc = RandomAngkaAtoB(0,dd-1);
			if(model==0)		ff = aa*dd == bb*cc;
			else if(model==1)	ff = aa*dd < bb*cc;
			else				ff = aa*dd > bb*cc;
		}while(!ff)
		
		if(model==0)		strBenar = "=";
		else if(model==1)	strBenar = "<";
		else				strBenar = ">";
		
		var csoal = [aa,bb,cc,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = strBenar;
		var csalah1 = "+";
		var csalah2 = "=";
		var csalah3 = "<";
		var csalah4 = ">";
		arrSalah = [csalah1,csalah2,csalah3,csalah4];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
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
	function MyBilanganPecahan6(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var bb = RandomAngkaAtoB(1,19);
			var aa = RandomAngkaAtoB(0,bb-1);
			var kali = RandomAngkaAtoB(1,4);
			var dd = bb*kali;
			var cc = RandomAngkaAtoB(0,dd-1);
			if(model==0)		ff = aa*dd == bb*cc;
			else if(model==1)	ff = aa*dd < bb*cc;
			else				ff = aa*dd > bb*cc;
		}while(!ff)
		
		if(model==0)		strBenar = "=";
		else if(model==1)	strBenar = "<";
		else				strBenar = ">";
		
		var csoal = [StringDesimal(NBelakangKoma(aa/bb,3)),StringDesimal(NBelakangKoma(100*cc/dd,1))];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = strBenar;
		var csalah1 = "+";
		var csalah2 = "=";
		var csalah3 = "<";
		var csalah4 = ">";
		arrSalah = [csalah1,csalah2,csalah3,csalah4];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
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
	function MyBilanganPecahan7(){
		do{
			var persen = RandomAngkaAtoB(0,99);
			var angka = RandomAngkaAtoB(0,999);
			var hasil = persen/100 * angka;
			var fcek = Number.isInteger(hasil);
		}while(!fcek);
		
		var csoal = [persen+"% dari "+angka];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = hasil;
		var csalah1 = hasil+10;
		var csalah2 = hasil+20;
		var csalah3 = hasil+30;
		var csalah4 = hasil-10;
		var csalah5 = hasil-20;
		var csalah6 = hasil-30;
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
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
	function MyBilanganPecahan8(){
		do{
			var aa = RandomAngkaAtoB(9,90);
			var bb = 100;
			var FPB = CariFPB([aa,bb])
		}while(FPB==1)
		var printaa = aa/FPB;
		var printbb = bb/FPB;
		
		var csoal = [StringDesimal(aa/100)];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",printaa,printbb];
		var csalah1 = ["",aa,printbb];
		var csalah2 = ["",printaa,bb];
		var csalah3 = ["",aa,bb*10];
		var csalah4 = ["",bb,bb*10];
		var csalah5 = ["",aa*10,printbb];
		var csalah6 = ["",aa,printaa];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan9(){
		do{
			var dd = RandomAngkaAtoB(1,99)
			var aa = RandomAngkaAtoB(0,50);
			var bb = RandomAngkaAtoB(0,50);
			var fcek = aa==bb;
			var ab = aa+bb
		}while(fcek || ab>=dd);
		
		var csoal = [aa,bb,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa+bb,dd];
		var csalah1 = ["",aa+bb,2*dd];
		var csalah2 = ["",aa+bb+1,2*dd];
		var csalah3 = ["",aa+bb-1,2*dd];
		var csalah4 = ["",aa+bb+1,dd];
		var csalah5 = ["",aa+bb-1,dd];
		var csalah6 = ["",aa+bb-2,dd];
		var csalah7 = ["",aa+bb+2,dd];
		var csalah8 = ["",aa+bb-2,2*dd];
		var csalah9 = ["",aa+bb+2,2*dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan10(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var dd = RandomAngkaAtoB(1,99)
			var aa = RandomAngkaAtoB(0,33);
			var bb = RandomAngkaAtoB(0,33);
			var cc = RandomAngkaAtoB(0,33);
			var fcek = aa==bb || aa==cc || cc==bb;
			var abc = aa+bb+cc
		}while(fcek || abc>=dd);
		
		var csoal = [aa,bb,cc,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa+bb+cc,dd];
		var csalah1 = ["",aa+bb+cc,3*dd];
		var csalah2 = ["",aa+bb+cc+1,3*dd];
		var csalah3 = ["",aa+bb+cc-1,3*dd];
		var csalah4 = ["",aa+bb+cc+1,dd];
		var csalah5 = ["",aa+bb+cc-1,dd];
		var csalah6 = ["",aa+bb+cc-2,dd];
		var csalah7 = ["",aa+bb+cc+2,dd];
		var csalah8 = ["",aa+bb+cc-2,3*dd];
		var csalah9 = ["",aa+bb+cc+2,3*dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan11(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var dd = RandomAngkaAtoB(1,99)
			var aa = RandomAngkaAtoB(0,50);
			var bb = RandomAngkaAtoB(0,50);
			var fcek = aa==bb;
			var ab = aa+bb
		}while(fcek || ab>=dd);
		
		var csoal = [aa,dd,bb,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa+bb,dd];
		var csalah1 = ["",aa+bb,2*dd];
		var csalah2 = ["",aa+bb+1,2*dd];
		var csalah3 = ["",aa+bb-1,2*dd];
		var csalah4 = ["",aa+bb+1,dd];
		var csalah5 = ["",aa+bb-1,dd];
		var csalah6 = ["",aa+bb-2,dd];
		var csalah7 = ["",aa+bb+2,dd];
		var csalah8 = ["",aa+bb-2,2*dd];
		var csalah9 = ["",aa+bb+2,2*dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan12(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var dd = RandomAngkaAtoB(1,99)
			var aa = RandomAngkaAtoB(0,33);
			var bb = RandomAngkaAtoB(0,33);
			var cc = RandomAngkaAtoB(0,33);
			var fcek = aa==bb || aa==cc || cc==bb;
			var abc = aa-bb-cc
		}while(fcek || abc<=0);
		
		var csoal = [aa,bb,cc,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa-bb-cc,dd];
		var csalah1 = ["",aa-bb-cc,3*dd];
		var csalah2 = ["",aa-bb-cc+1,3*dd];
		var csalah3 = ["",aa-bb-cc-1,3*dd];
		var csalah4 = ["",aa-bb-cc+1,dd];
		var csalah5 = ["",aa-bb-cc-1,dd];
		var csalah6 = ["",aa-bb-cc-2,dd];
		var csalah7 = ["",aa-bb-cc+2,dd];
		var csalah8 = ["",aa-bb-cc-2,3*dd];
		var csalah9 = ["",aa-bb-cc+2,3*dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan13(){
		var model = RandomAngkaAtoB(-1,3);
		//0 ==
		//1 <
		//2 >
		do{
			var dd = RandomAngkaAtoB(1,99)
			var aa = RandomAngkaAtoB(0,50);
			var bb = RandomAngkaAtoB(0,50);
			var fcek = aa==bb;
			var ab = aa-bb
		}while(fcek || ab<=4);
		
		var csoal = [aa,dd,bb,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa-bb,dd];
		var csalah1 = ["",aa-bb,2*dd];
		var csalah2 = ["",aa-bb+1,2*dd];
		var csalah3 = ["",aa-bb-1,2*dd];
		var csalah4 = ["",aa-bb+1,dd];
		var csalah5 = ["",aa-bb-1,dd];
		var csalah6 = ["",aa-bb-2,dd];
		var csalah7 = ["",aa-bb+2,dd];
		var csalah8 = ["",aa+bb,dd];
		var csalah9 = ["",aa+bb,2*dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan14(){
		do{
			var aa = RandomAngkaAtoB(0,9);
			var bb = RandomAngkaAtoB(1,9);
			var cc = RandomAngkaAtoB(0,9);
			var dd = RandomAngkaAtoB(1,9);
			var FPBcek = CariFPB([aa,bb])!==1 || CariFPB([aa,dd])!==1 || CariFPB([cc,bb])!==1 || CariFPB([cc,dd])!==1
			var fcek = aa*cc >= bb*dd;
		}while(fcek || FPBcek);
		
		var csoal = [aa,bb,cc,dd];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa*cc,bb*dd];
		var csalah1 = ["",aa+cc,bb*dd];
		var csalah2 = ["",aa+cc,bb+dd];
		var csalah3 = ["",aa*cc,bb+dd];
		var csalah4 = ["",aa*cc+cc,bb*dd];
		var csalah5 = ["",aa*cc+aa,bb*dd];
		var csalah6 = ["",aa*cc-cc,bb*dd];
		var csalah7 = ["",aa*cc-aa,bb*dd];
		var csalah8 = ["",aa*cc+aa,bb+dd];
		var csalah9 = ["",aa*cc+cc,bb+dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan15(){
		do{
			var aa = RandomAngkaAtoB(0,9);
			var bb = RandomAngkaAtoB(1,9);
			var cc = RandomAngkaAtoB(0,9);
			var dd = RandomAngkaAtoB(1,9);
			var FPBcek = CariFPB([aa,bb])!==1 || CariFPB([aa,dd])!==1 || CariFPB([cc,bb])!==1 || CariFPB([cc,dd])!==1
			var fcek = aa*cc >= bb*dd;
		}while(fcek || FPBcek);
		
		var csoal = [aa,bb,dd,cc];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",aa*cc,bb*dd];
		var csalah1 = ["",aa+cc,bb*dd];
		var csalah2 = ["",aa+cc,bb+dd];
		var csalah3 = ["",aa*cc,bb+dd];
		var csalah4 = ["",aa*dd,cc*dd];
		var csalah5 = ["",aa+dd,cc+dd];
		var csalah6 = ["",aa*cc-cc,bb*dd];
		var csalah7 = ["",aa*cc-aa,bb*dd];
		var csalah8 = ["",aa*cc+aa,bb+dd];
		var csalah9 = ["",aa*cc+cc,bb+dd];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2]);
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
	function MyBilanganPecahan16(){
		var arData = [[1,1,1,2],
					  [1,1,1,5],[1,1,2,4],[1,2,2,3],
					  [1,1,1,7],[1,1,2,6],[1,2,2,5],[1,2,3,4],[2,2,2,4],
					  [1,1,1,17],[1,1,2,16],[1,2,2,15],[1,2,3,14],[1,3,3,13],[1,3,4,12],[1,4,4,11],[1,4,5,10],[1,5,5,9],[1,5,6,8],[1,6,6,7],
					  [2,2,2,14],[2,2,3,13],[2,3,3,12],[2,3,4,11],[2,4,4,10],[2,4,5,9],[2,5,5,8],[2,5,6,7],
					  [3,3,3,11],[3,3,4,10],[3,4,4,9],[3,4,5,8],[3,5,5,7],
					  [4,4,4,8],[4,4,5,7],[4,5,5,6],
					  [1,1,1,2]
					  ]
		arData = RandomMyArray(arData);
		var Nama = NamaTokoh();
		var model = RandomAngkaAtoB(-1,4);
		var max = arData[0][3];
		do{
			arData[0] = RandomMyArray(arData[0]);
			var aa = arData[0][0];
			var bb = arData[0][1];
			var cc = arData[0][2];
			var dd = arData[0][3];
			var total = aa+bb+cc+dd;
		}while(max !== arData[0][model])
		
		var arIn = [];
		arIn[0]=100*aa/total+"%"
		arIn[1]=StringDesimal(bb/total);
		arIn[2]=[cc,total];
		arIn[3]=[dd*2,total*2];
		
		var csoal = [arIn,Nama];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = Nama[model];
		var csalah1 = Nama[0];
		var csalah2 = Nama[1];
		var csalah3 = Nama[2];
		var csalah4 = Nama[3];
		arrSalah = [csalah1,csalah2,csalah3,csalah4];
		arrSalah = RandomMyArray(arrSalah);
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
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
	function MyBilanganPecahan17(){
		
		var arAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arAngka = RandomMyArray(arAngka);
		var aa = arAngka[0];
		var bb = arAngka[1];
		var FPB = CariFPB([aa,bb]);
		aa = aa/FPB;
		bb = bb/FPB;
		
		var kali = RandomAngkaAtoB(3,8);
		var aabig = aa*kali;
		var bbbig = bb*kali;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb,aabig];
		var arrSalah = [];
		
		var benar = bbbig;
		
		var salah1 = bbbig+1*bb;
		var salah2 = bbbig+2*bb;
		var salah3 = bbbig+3*bb;
		var salah4 = bbbig+4*bb;
		var salah5 = bbbig-1*bb;
		var salah6 = bbbig-2*bb;
		var salah7 = bbbig-3*bb;
		var salah8 = bbbig-4*bb;
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
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
	function MyBilanganPecahan18(){
		
		var arAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arAngka = RandomMyArray(arAngka);
		var aa = arAngka[0];
		var bb = arAngka[1];
		var FPB = CariFPB([aa,bb]);
		aa = aa/FPB;
		bb = bb/FPB;
		
		var kali = RandomAngkaAtoB(3,8);
		var aabig = aa*kali;
		var bbbig = bb*kali;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aabig,bbbig];
		var arrSalah = [];
		
		var benar = aa+" : "+bb;
		
		var salah1 = (aa+1)+" : "+(bb);
		var salah2 = (aa+1)+" : "+(bb+1);
		var salah3 = (aa)+" : "+(bb+1);
		var salah4 = (aa-1)+" : "+(bb);
		var salah5 = (aa-1)+" : "+(bb-1);
		var salah6 = (aa)+" : "+(bb-1);
		var salah7 = (aa-1)+" : "+(bb+1);
		var salah8 = (aa+1)+" : "+(bb-1);
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		
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
	function MyBilanganPecahan19(){
		
		var arAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arAngka = RandomMyArray(arAngka);
		var aa = 1;
		var bb = arAngka[1]*10**RandomAngkaAtoB(0,3);
		var FPB = CariFPB([aa,bb]);
		aa = aa/FPB;
		bb = bb/FPB;
		
		var kali = RandomAngkaAtoB(3,8);
		var aabig = aa*kali;
		var bbbig = bb*kali;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [bbbig/100,aabig];
		var arrSalah = [];
		
		var benar = aa+" : "+StringRibuan(Number(bb));;
		
		var salah1 = (aa)+" : "+StringRibuan(Number(bb+"0"));
		var salah2 = (aa)+" : "+StringRibuan(Number(bbbig));
		var salah3 = (aa)+" : "+StringRibuan(Number(bbbig+"0"));
		var salah4 = (aa)+" : "+StringRibuan(Number(kali));
		var salah5 = (aa)+" : "+StringRibuan(Number(kali+"00"));
		var salah6 = (aa)+" : "+StringRibuan(Number(kali+"0"));
		var salah7 = (aa)+" : "+StringRibuan(Number(bb/10));
		var salah8 = (aa)+" : "+StringRibuan(Number(bb/100));
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
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
	function MyBilanganPecahan20(){
		var arAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arAngka = RandomMyArray(arAngka);
		var aa = 1;
		var bb = arAngka[1]*10**RandomAngkaAtoB(0,3);
		var FPB = CariFPB([aa,bb]);
		aa = aa/FPB;
		bb = bb/FPB;
		
		var kali = RandomAngkaAtoB(3,8);
		var aabig = aa*kali;
		var bbbig = bb*kali;
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [bbbig/100,aa+" : "+StringRibuan(Number(bb))];
		var arrSalah = [];
		
		var benar = aabig;
		
		var salah1 = aabig+1
		var salah2 = aabig+2
		var salah3 = aabig+3
		var salah4 = aabig-1
		var salah5 = aabig-2
		var salah6 = aabig-3
		var salah7 = aabig+4
		var salah8 = aabig-4
		arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
		
	function GambarBilanganPecahan16(nmcanvas,arrs,arrss){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var str0 = arrss[0].length;
				var str1 = arrss[1].length;
				ctx.drawImage(base1_image, -25, 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 11*8-35, 46*1-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0][2][0],10,11+46*0);
				ctx.fillText(arrs[1][0][2][1],10,30+46*0);
				ctx.fillText(arrs[1][0][3][0],11*8 ,11+46*1);
				ctx.fillText(arrs[1][0][3][1],11*8 ,30+46*1);
		
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],30,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan15awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAnCAYAAAD0MJ3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADfSURBVGhD7dnRCoIwGEDhzWvf0efZ+3pf/jHJQDRwtQOeD37aRaF1VhjmxyKpu6E+qjNDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAdElRM75NXr7e4h5nuvqc313w7o7W82ZcRxT3J2NifWZvWNcmSPTNO2+JqaUUp/1G3FmTe9Zt74FHh9CS9Rb9MO6O1tNa3vHuDJHun4jlpNjbpGb8aoJwqumC9YNFe9ju7m262/50wThP2sIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGQEjpCaDgpXt1tfRZAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],12,12);
				ctx.fillText(arrs[1][1],12,32);
				ctx.fillText(arrs[1][2],50,12);
				ctx.fillText(arrs[1][3],50,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan15(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan14awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAnCAYAAAD0MJ3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAEySURBVGhD7dpdDkQwGIXhmoVYC9esgWXYgm2wBq7txjZMv+pkSOrnouqQ8ySiMjKRvtERmWjSFN3uY/d0M4YAwRAgGAIEQ4BgCBAMAYIhQDAECIYAwRAgGAIEQ4AIEqLvezvaduacV5PX4Ffquk5es5v9ljPnvN3lIcTeRDPCLEgI4ZpwRvgLFkIsJ54R1qIkSWRCvBmGwY7c5Ec5z3Mz1hFUlmVmvCVNUzvy4+j6RFmWqm1be7RW17Wqqsoe+cPHV4emaWSlcG5XRDD0lwfzlKWpKApzba5N3xH2LL+ChXBNPHKM0IKE2JtwxphdHuLMRD89hixXcRxP4ziaTca/JWz52Z5gd8SRp0bwhf/0A8HHVxAMAYIhQDAECIYAwRAgGAIEQ4BgCBAMAYIhQDAEBKW+fqB/vNGJuwsAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],12,12);
				ctx.fillText(arrs[1][1],12,32);
				ctx.fillText(arrs[1][2],50,12);
				ctx.fillText(arrs[1][3],50,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan14(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan13(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.drawImage(base1_image, 15, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][1],50,18+46*i);
					ctx.fillText(arrs[i+2][2],50,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan13awal(nmcanvas,arrs,arrss){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var str0 = arrss[0].length;
				var str1 = arrss[1].length;
				ctx.drawImage(base1_image, 200+ (str0-45)*7, 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 235+ (str1-50)*7, 46*1-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],235 + (str0-45)*7 ,11+46*0);
				ctx.fillText(arrs[1][1],235 + (str0-45)*7 ,30+46*0);
				ctx.fillText(arrs[1][2],270 + (str1-50)*7 ,11+46*1);
				ctx.fillText(arrs[1][3],270 + (str1-50)*7 ,30+46*1);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan12awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAnCAYAAADZ7nAuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAD0SURBVHhe7dpBaoNAAIbRsRdRL6bH8Aqew4u59Bitllm0pYH6E0ObvgcxMyA4kA8zi2ledwVOeqnfcIpwiAiHiHCICIeIcIgIh4hwiAiHiHCICIeIcIgIh4hwiAiHiHCICIeIcIg0Xdfd9ejouq51dB9939fRfTzD+sZxLMuy1Nln8zyXaZrq7DoPCadpmjq67dbR50f9MOkaf3vYlzkOq/O3DMNwFPztZ3/j1Luu1RyX/YFwis0xEeH8A8f+rW3bsm3b+/wYf9zTfZ3/hL8qIt44RIRDRDhEhENEOESEQ0Q4RIRDRDhEhENEOESEQ0Q4BEp5A0PGULlL2vvhAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],12,12);
				ctx.fillText(arrs[1][3],12,32);
				ctx.fillText(arrs[1][1],50,12);
				ctx.fillText(arrs[1][3],50,32);
				ctx.fillText(arrs[1][2],89,12);
				ctx.fillText(arrs[1][3],89,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan12(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					if(arrs[i+2][1]<0)	ctx.fillText("\u{2212}"+Math.abs(arrs[i+2][1]),45,18+46*i);
					else 				ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan11(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.drawImage(base1_image, 15, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][1],50,18+46*i);
					ctx.fillText(arrs[i+2][2],50,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan11awal(nmcanvas,arrs,arrss){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var str0 = arrss[0].length;
				var str1 = arrss[1].length;
				ctx.drawImage(base1_image, 180+ (str0-42)*7, 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 205+ (str1-47)*7, 46*1-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],215 + (str0-42)*7 ,11+46*0);
				ctx.fillText(arrs[1][1],215 + (str0-42)*7 ,30+46*0);
				ctx.fillText(arrs[1][2],240 + (str1-47)*7 ,11+46*1);
				ctx.fillText(arrs[1][3],240 + (str1-47)*7 ,30+46*1);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan10awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAnCAYAAADZ7nAuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAE0SURBVHhe7drBbYMwGIZhuxswAbABI8AiMAYrsAYswgpswJEjI7QY/T0kSir4lABR30dC2FEOlngxHPDfCwfs9GVnYBfCgYRwICEcSAgHEsKBhHAgIRxICAcSwoGEcCAhHEgIBxLCgYRwIDklnKIobHRdn7DGM7HjQEI4kPgkSV766eg4jjZ6LooiN8+zzf6WpqmNXmPL+oKtazxjfVVVua7rbHaraRpX17XN3ueQcO7fF4ZhWM9Zlq3noO97G9066sKoazwr7NOFj9WPlue5ja7rymssyzLc7A+PZcexf70X7zgfqG3bcMM/PI54TAWEAwnh/APeexfHsZumaZ2Hcfjt1/18C79sb+HZCOzCjgMJ4UBCOJAQDiSEAwnhQEI4kBAOJIQDCeFAQjiQEA4khAOBcz8TN2sAEf9zagAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],12,12);
				ctx.fillText(arrs[1][3],12,32);
				ctx.fillText(arrs[1][1],50,12);
				ctx.fillText(arrs[1][3],50,32);
				ctx.fillText(arrs[1][2],89,12);
				ctx.fillText(arrs[1][3],89,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan10(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan9awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAApCAYAAAA7xHcRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADOSURBVHhe7dpBCsMgEEBR7UW8/8k8RpspLuymNVIYP/wHoe7S5KNkMfV5KUJ6jF8BGQ/MeGDGAzMemPHAjAdmPDDjgRkPzHhgxgMzHpjxwIwHdlS8WutYaYU7D8x4YB9jEP8+tu5OWMT9d6YyTvjf3+w804rUeCv3W3nw7HhZjhpAigiUFzc7Yudlo8bL4gcLmPESxAnTWiu99/cV6/nojfWvozg4dAvmzgMzHpjxwIwHZjww44EZD8x4YMYDMx6Y8cCMB2Y8MOOBGQ+rlBcSYjxoEWKuEwAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],12,12);
				ctx.fillText(arrs[1][2],12,32);
				ctx.fillText(arrs[1][1],58,12);
				ctx.fillText(arrs[1][2],58,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan9(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan8(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.fillText(arrs[i+2][1],45,18+46*i);
					ctx.fillText(arrs[i+2][2],45,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan5(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, -15, -6,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 65, -6,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],20,12);
				ctx.fillText(arrs[1][1],20,32);
				ctx.fillText(arrs[1][2],100,12);
				ctx.fillText(arrs[1][3],100,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText("...",50,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan4awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 235, -6,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][1],270,12);
				ctx.fillText(arrs[1][2],270,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,290,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan4(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAApCAYAAACIjF8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB8SURBVGhD7dkhDoAwEADBlv//GRAVBFhLEDPmqjc5c537afCwrcmNMEGYIEwQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEz4/Bg+51yv/7mm8EsQrFIQJggThAnCBGGCMEGYIEwQJggThAnCBGGCMEGYIEwQ5tUYB8aaD0SAI9i8AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.textAlign = "center";
					if(arrs[i+2][1]==""){
						ctx.fillText(arrs[i+2][0],45,24+46*i);
					}else{
						ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],45,18+46*i);
						ctx.fillText(arrs[i+2][2],45,38+46*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan3(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][1],35,18+46*i);
					ctx.fillText(arrs[i+2][2],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan2(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var Abjad = ["A","B","C","D"];
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				for(var i=0;i<4;i++){
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][1],35,18+46*i);
					ctx.fillText(arrs[i+2][2],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan1(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 35, -6,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],70,12);
				ctx.fillText(arrs[1][1],70,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,90,20);
			}
		}
		
		return 0;
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
		var i;
		for (var i=0; i<len; i++){
			gg.push(strff.substr(i,1));
		}
		
		return gg;
	}
	function StringRibuan(str){
		var strfix = "";
		var arfix = new Array();
		var StrArray = SplitString(str);
		var i;
		
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
	function GetSoal1(canv){
		const Aljabar = MyBilanganPecahan1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan1(canv,ArSisi,"Pecahan","jika dijadikan persen menjadi ....");
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		//Ar[0] = benar;
		//Ar[1] = arrSalah[0];
		//Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		Ar[0] = ArSisi[2][0]+"%";
		Ar[1] = ArSisi[3][0]+"%";
		Ar[2] = ArSisi[4][0]+"%";
		Ar[3] = ArSisi[5][0]+"%";
		
		var jawab = Ar[0];
		//Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal2(){
		const Aljabar = MyBilanganPecahan2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Bentuk "+ArSisi[1][0]+"% jika diubah ke bentuk pecahan biasa menjadi ... ";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal3(){
		const Aljabar = MyBilanganPecahan3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Pecahan biasa di bawah ini yang <i><b>tidak senilai</b></i> dengan "+ArSisi[1][0]+"% adalah ...";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal4(canv1,canv2){
		const Aljabar = MyBilanganPecahan4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan4awal(canv1,ArSisi,"Di bawah ini yang tidak senilai dengan","adalah ....");
		const DrawPecahanabcd = GambarBilanganPecahan4(canv2,ArSisi);
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyBilanganPecahan5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan5(canv,ArSisi);
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Tanda yang tepat untuk mengisi titik-titik di atas adalah ... ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		//Ar[0] = benar;
		//Ar[1] = arrSalah[0];
		//Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		Ar[0] = ArSisi[2][0];
		Ar[1] = ArSisi[3][0];
		Ar[2] = ArSisi[4][0];
		Ar[3] = ArSisi[5][0];
		
		var jawab = Ar[0];
		//Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal6(){
		const Aljabar = MyBilanganPecahan6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = ArSisi[1][0]+"  ...  "+ArSisi[1][1];
		ss += "<br>Tanda yang tepat untuk mengisi titik-titik di atas adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		//Ar[0] = benar;
		//Ar[1] = arrSalah[0];
		//Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		Ar[0] = ArSisi[2][0];
		Ar[1] = ArSisi[3][0];
		Ar[2] = ArSisi[4][0];
		Ar[3] = ArSisi[5][0];
		
		var jawab = Ar[0];
		//Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyBilanganPecahan7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = ArSisi[1][0]+" adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		//Ar[0] = benar;
		//Ar[1] = arrSalah[0];
		//Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		var jawab = Ar[0];
		//Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyBilanganPecahan8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Pecahan biasa dari "+ArSisi[1][0]+" adalah ...";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal9(canv1,canv2){
		const Aljabar = MyBilanganPecahan9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan9awal(canv1,ArSisi);
		const DrawPecahanabcd = GambarBilanganPecahan9(canv2,ArSisi);
		
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal10(canv1,canv2){
		const Aljabar = MyBilanganPecahan10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan10awal(canv1,ArSisi);
		const DrawPecahanabcd = GambarBilanganPecahan10(canv2,ArSisi);
		
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal11(Nama){
		const Aljabar = MyBilanganPecahan11();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var str1 = Nama[0]+" mempunyai tali sepanjang        meter,"
		var str2 = "dan "+Nama[1]+" mempunyai tali sepanjang         meter.";

		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		ArFix.push([str1,str2]);
		return ArFix;
	}
	function GetSoal12(canv1,canv2){
		const Aljabar = MyBilanganPecahan12();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan12awal(canv1,ArSisi);
		const DrawPecahanabcd = GambarBilanganPecahan12(canv2,ArSisi);
		
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
	
		return ArFix;
	}
	function GetSoal13(Nama){
		const Aljabar = MyBilanganPecahan13();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var str1 = Nama[0]+" mempunyai pita sepanjang         meter,"
		var str2 = "kemudian ia menggunakan pitanya sepanjang         meter.";
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		ArFix.push([str1,str2]);
		return ArFix;
	}
	function GetSoal14(canv1,canv2){
		const Aljabar = MyBilanganPecahan14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan14awal(canv1,ArSisi);
		const DrawPecahanabcd = GambarBilanganPecahan14(canv2,ArSisi);
		
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal15(canv1,canv2){
		const Aljabar = MyBilanganPecahan15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan15awal(canv1,ArSisi);
		const DrawPecahanabcd = GambarBilanganPecahan15(canv2,ArSisi);
		
		var ss
		ss = "";
		
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
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		return ArFix;
	}
	function GetSoal16(){
		const Aljabar = MyBilanganPecahan16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Jadi siapakah yang mendapat buah jeruk paling banyak?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		var jawab = Ar[0];
		//Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal17(){
		const Aljabar = MyBilanganPecahan17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Perbandingan siswa laki dan perempuan dalam kelas adalah "+ArSisi[0]+" : "+ArSisi[1]+". Jika siswa laki-laki dalam kelas adalah "+ArSisi[2]+" siswa, maka siswa perempuan berjumlah ....";
		
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
	function GetSoal18(){
		const Aljabar = MyBilanganPecahan18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" memiliki "+ArSisi[0]+" buah pensil dan "+Nama[1]+" mempunyai "+ArSisi[1]+" pensil. Perbandingan jumlah pensil yang dimilki "+Nama[0]+" dan "+Nama[1]+" adalah ....";
		
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
	function GetSoal19(){
		const Aljabar = MyBilanganPecahan19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Jarak desa A dan desa B adalah "+StringRibuan(ArSisi[0])+" meter. Pada peta jarak desa A dan B adalah "+ArSisi[1]+" cm. Jadi skala peta tersebut adalah ....";
		
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
	function GetSoal20(){
		const Aljabar = MyBilanganPecahan20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Jika jarak rumah "+Nama[0]+" dan rumah "+Nama[1]+" adalah "+StringRibuan(ArSisi[0])+" meter. Di dalam peta yang mempunyai skala "+ArSisi[1]+". maka jarak rumah "+Nama[0]+" dan rumah "+Nama[1]+" pada peta adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar + " cm";
		Ar[1] = arrSalah[0] + " cm";
		Ar[2] = arrSalah[1] + " cm";
		Ar[3] = arrSalah[2] + " cm";
		
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
	
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 3 \u{2192} Bilangan Pecahan </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 300;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 50;
		cc1.height = 184;
		const DrawPecahan2 = GambarBilanganPecahan2(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==3){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 50;
		cc1.height = 184;
		const DrawPecahan2 = GambarBilanganPecahan2(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 350;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 150;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 100;
		cc1.height = 184;
		const DrawPecahan8 = GambarBilanganPecahan8(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		var Nama = NamaTokoh();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 350;
		cc1.height = 92;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](Nama);
		const DrawPecahan11awal = GambarBilanganPecahan11awal(cc1.id,ss[2],ss[3]);
		const DrawPecahan11 = GambarBilanganPecahan11(cc2.id,ss[2],ss[3]);
		dd2.innerHTML+="<br>Maka jumlah tali "+Nama[0]+" dan "+Nama[1]+" jika ditambahkan menjadi ....<br>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		var Nama = NamaTokoh();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 400;
		cc1.height = 92;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](Nama);
		dd2.innerHTML+="<p></p>";
		const DrawPecahan13awal = GambarBilanganPecahan13awal(cc1.id,ss[2],ss[3]);
		const DrawPecahan13 = GambarBilanganPecahan13(cc2.id,ss[2],ss[3]);
		dd2.innerHTML+="<p>Sekarang sisa pita "+Nama[0]+" menjadi ....</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		ss = namefunc[no-1]();
		var Nama = ss[2][1][1];
		var ar0 = ss[2][1][0][0];
		var ar1 = ss[2][1][0][1];
		var str1 = "kg diberikan kepada "+Nama[2]+","
		var str2 = "dan sisanya        kg diberikan kepada "+Nama[3]+"."
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pak "+Nama[4]+" membeli buah jeruk seberat 1 kg. <br>Buah tersebut di berikan kepada anak-anaknya. <br>"+ar0+" buahnya diberikan kepada "+Nama[0]+",<br> "+ar1+" kg diberikan kepada "+Nama[1]+", </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pak "+Nama[4]+" membeli buah jeruk seberat 1 kg. <br>Buah tersebut di berikan kepada anak-anaknya. <br>"+ar0+" buahnya diberikan kepada "+Nama[0]+",<br> "+ar1+" kg diberikan kepada "+Nama[1]+", </p>";
		cc1.width = 300;
		cc1.height = 92;
		const DrawPecahan16awal = GambarBilanganPecahan16(cc1.id,ss[2],[str1,str2]);
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
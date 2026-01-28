function Print61(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	
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
	function MyPecahanDesimal1(){
		do{
			var a1 = RandomAngkaAtoB(0,5);
			var a2 = a1+RandomAngkaAtoB(0,5);
			var a3 = a2;
			var a4 = a2+RandomAngkaAtoB(0,5);
			var mm = a1*a4 + a2*a3;
			var nn = a2*a4;
			var sisa = Mods(mm,nn)
			var FPB1 = CariFPB([a1,a2]);
			a1 = a1/FPB1;
			a2 = a2/FPB1;
			var FPB2 = CariFPB([a3,a4]);
			a3 = a3/FPB2;
			a4 = a4/FPB2;
		}while(mm<=nn);
		
		var b1 = a1*a4 + a2*a3;
		var b2 = a2*a4;
		var csoal = [a1,a2,a3,a4];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = PecBiasaCampuran(b1,b2);
		var csalah1 = ["",cbenar[1],cbenar[2]];
		var csalah2 = ["",a1*a3,a2*a4];
		var csalah3 = [cbenar[0],a1*a3,a2*a4];
		var csalah4 = [cbenar[1],cbenar[0],cbenar[2]];
		var csalah5 = [cbenar[1],a1*a3,cbenar[2]];
		var csalah6 = ["",a1*a3,cbenar[2]];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
	function MyPecahanDesimal2(){
		do{
			var b0 = RandomAngkaAtoB(0,5);
			var c0 = RandomAngkaAtoB(0,5);
			
			var a1 = RandomAngkaAtoB(0,5);
			var a2 = a1+RandomAngkaAtoB(0,5);
			var a3 = a2;
			var a4 = a2+RandomAngkaAtoB(0,5);
			var mm = a1*a4 + a2*a3;
			var nn = a2*a4;
			var sisa = Mods(mm,nn)
			var FPB1 = CariFPB([a1,a2]);
			a1 = a1/FPB1;
			a2 = a2/FPB1;
			var FPB2 = CariFPB([a3,a4]);
			a3 = a3/FPB2;
			a4 = a4/FPB2;
		}while(mm<=nn);
		
		var b1 = (b0+c0)*a2*a4 + a1*a4 + a2*a3;//a1*a4 + a2*a3;
		var b2 = a2*a4;
		var csoal = [b0,a1,a2,c0,a3,a4];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = PecBiasaCampuran(b1,b2);
		var csalah1 = ["",cbenar[1],cbenar[2]];
		var csalah2 = ["",a1*a3,a2*a4];
		var csalah3 = [cbenar[0],a1*a3,a2*a4];
		var csalah4 = [cbenar[0]+1,cbenar[1],cbenar[2]];
		var csalah5 = [cbenar[0]-1,cbenar[1],cbenar[2]];
		var csalah6 = ["",a1*a3,cbenar[2]];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
	function MyPecahanDesimal3(){
		do{
			var b0 = RandomAngkaAtoB(0,5);
			var c0 = 0;
			
			var a1 = RandomAngkaAtoB(0,5);
			var a2 = a1+RandomAngkaAtoB(0,5);
			var a3 = 25*RandomAngkaAtoB(0,3);
			var a4 = 100;
			
			var mm = a1*a4 + a2*a3;
			var nn = a2*a4;
			var sisa = Mods(mm,nn)
			var FPB1 = CariFPB([a1,a2]);
			a1 = a1/FPB1;
			a2 = a2/FPB1;
			var FPB2 = CariFPB([a3,a4]);
			a3 = a3/FPB2;
			a4 = a4/FPB2;
		}while(mm<=nn);
		
		var b1 = (b0+c0)*a2*a4 + a1*a4 + a2*a3;//a1*a4 + a2*a3;
		var b2 = a2*a4;
		var csoal = [b0,a1,a2,a3*25];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = PecBiasaCampuran(b1,b2);
		var csalah1 = ["",cbenar[1],cbenar[2]];
		var csalah2 = ["",a1*a3,a2*a4];
		var csalah3 = [cbenar[0],a1*a3,a2*a4];
		var csalah4 = [cbenar[0]+1,cbenar[1],cbenar[2]];
		var csalah5 = [cbenar[0]-1,cbenar[1],cbenar[2]];
		var csalah6 = ["",a1*a3,cbenar[2]];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
	function MyPecahanDesimal4(){
		do{
			var b0 = 0;
			var c0 = RandomAngkaAtoB(0,5);
			var d0 = 0;
			
			var a1 = RandomAngkaAtoB(0,5);
			var a2 = a1+RandomAngkaAtoB(2,5);
			var a3 = a2*2-RandomAngkaAtoB(0,3);
			var a4 = a2*2;
			var a5 = a2-2;
			var a6 = a2-1;
			
			var mm = a1*a4*a6 + a3*a2*a6 + a5*a2*a4 + c0*a2*a4*a6;
			var nn = a2*a4*a6;
			var sisa = Mods(mm,nn)
			var FPB1 = CariFPB([a1,a2]);
			a1 = a1/FPB1;
			a2 = a2/FPB1;
			var FPB2 = CariFPB([a3,a4]);
			a3 = a3/FPB2;
			a4 = a4/FPB2;
		}while(mm<=nn);
		
		var b1 = a1*a4*a6 + a3*a2*a6 + a5*a2*a4 + c0*a2*a4*a6;
		var b2 = a2*a4*a6;
		var csoal = [b0,a1,a2,c0,a3,a4,d0,a5,a6];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = PecBiasaCampuran(b1,b2);
		var csalah1 = ["",cbenar[1],cbenar[2]];					//FPB=CariFPB([cbenar[1],cbenar[2]]);		csalah1 = ["",cbenar[1]/FPB,cbenar[2]/FPB];
		var csalah2 = ["",a1*a3,a2*a4];							//FPB=CariFPB([a1*a3,a2*a4]);				csalah2 = ["",a1*a3/FPB,a2*a4/FPB];
		var csalah3 = [cbenar[0],a1*a3,a2*a4];					//FPB=CariFPB([a1*a3,a2*a4]);				csalah3 = ["",a1*a3/FPB,a2*a4/FPB];
		var csalah4 = [cbenar[0]+1,cbenar[1],cbenar[2]];		//FPB=CariFPB([cbenar[1],cbenar[2]]);		csalah4 = ["",cbenar[1]/FPB,cbenar[2]/FPB];
		var csalah5 = [cbenar[0]-1,cbenar[1],cbenar[2]];		//FPB=CariFPB([cbenar[1],cbenar[2]]);		csalah5 = ["",cbenar[1]/FPB,cbenar[2]/FPB];
		var csalah6 = ["",a1*a3,cbenar[2]];						//FPB=CariFPB([a1*a3,cbenar[2]]);			csalah6 = ["",a1*a3/FPB,cbenar[2]/FPB];
		
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
	function MyPecahanDesimal5(){
		var aa = RandomAngkaAtoB(10,75);
		var b1 = RandomAngkaAtoB(0,9);
		var b2 = RandomAngkaAtoB(0,9);
		var b3 = RandomAngkaAtoB(0,9);
		var bb = b1+b2/10+b3/100;
		bb = Math.round(bb*100)/100;
		
		var hasil = aa/100 + bb;
		var ArSisi = [aa,bb];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var benar = hasil;			benar = Math.round(benar*100)/100;
		var salah1 = hasil-0.01;	salah1 = Math.round(salah1*100)/100;
		var salah2 = hasil-0.1;		salah2 = Math.round(salah2*100)/100;
		var salah3 = hasil-1;		salah3 = Math.round(salah3*100)/100;
		var salah4 = hasil+0.01;	salah4 = Math.round(salah4*100)/100;
		var salah5 = hasil+0.1;		salah5 = Math.round(salah5*100)/100;
		var salah6 = hasil+1;		salah6 = Math.round(salah6*100)/100;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal6(){
		var aa = RandomAngkaAtoB(400,50);
		var bb = RandomAngkaAtoB(500,50)/10;
		var cc = RandomAngkaAtoB(400,50)/100;
		
		var stra = aa;
		var strb = bb;
		var strc = cc;
		
		var hasil = aa/100 + bb/10 + cc/1;
		var ArSisi = [stra,strb,strc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = hasil;			benar = NBelakangKoma(benar,2);
		var salah1 = hasil-0.01;	salah1 = NBelakangKoma(salah1,2);
		var salah2 = hasil-0.02;	salah2 = NBelakangKoma(salah2,2);
		var salah3 = hasil-0.03;	salah3 = NBelakangKoma(salah3,2);
		var salah4 = hasil+0.01;	salah4 = NBelakangKoma(salah4,2);
		var salah5 = hasil+0.02;	salah5 = NBelakangKoma(salah5,2);
		var salah6 = hasil+0.03;	salah6 = NBelakangKoma(salah6,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal7(){
		var aa = RandomAngkaAtoB(10,30)/10;
		var a1 = RandomAngkaAtoB(0,7);
		var a2 = 8;
		
		var ArSisi = [StringDesimal(aa),a1,a2];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = aa-a1/a2;		benar = NBelakangKoma(benar,3);
		var salah1 = aa-a1/a2+0.1;	salah1 = NBelakangKoma(salah1,3);
		var salah2 = aa-a1/a2+0.2;	salah2 = NBelakangKoma(salah2,3);
		var salah3 = aa-a1/a2+0.3;	salah3 = NBelakangKoma(salah3,3);
		var salah4 = aa-a1/a2-0.1;	salah4 = NBelakangKoma(salah4,3);
		var salah5 = aa-a1/a2-0.2;	salah5 = NBelakangKoma(salah5,3);
		var salah6 = aa-a1/a2-0.3;	salah6 = NBelakangKoma(salah6,3);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal8(){
		var aa = 10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)/10+RandomAngkaAtoB(0,9)/100
		var bb1 = RandomAngkaAtoB(0,4);
		var bb2 = 5;
		var cc = 10*RandomAngkaAtoB(0,9)
		
		
		var csoal = [aa,bb1,bb2,cc];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var rr = aa - bb1/bb2 - cc/100;
		var b1 = rr*100;
		var b2 = 100;
		
		var cbenar = PecBiasaCampuran(b1,b2);
		var csalah1 = [cbenar[0]-1,cbenar[1],cbenar[2]];
		var csalah2 = [cbenar[0]-2,cbenar[1],cbenar[2]];
		var csalah3 = [cbenar[0]-3,cbenar[1]+1,cbenar[2]];
		var csalah4 = [cbenar[0]+1,cbenar[1]+1,cbenar[2]];
		var csalah5 = [cbenar[0]+2,cbenar[1],cbenar[2]];
		var csalah6 = [cbenar[0]+3,cbenar[1],cbenar[2]];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
	function MyPecahanDesimal9(){
		var aa = 10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)/10+RandomAngkaAtoB(0,9)/100
		var bb = 100-aa;
		var cc = 100;
		
		var ArSisi = [NBelakangKoma(aa,2),cc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb;				benar = Math.round(benar*100)/100;
		var salah1 = bb-0.01;		salah1 = Math.round(salah1*100)/100;
		var salah2 = bb-0.1;		salah2 = Math.round(salah2*100)/100;
		var salah3 = bb-1;			salah3 = Math.round(salah3*100)/100;
		var salah4 = bb+0.01;		salah4 = Math.round(salah4*100)/100;
		var salah5 = bb+0.1;		salah5 = Math.round(salah5*100)/100;
		var salah6 = bb+1;			salah6 = Math.round(salah6*100)/100;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal10(){
		var a0 = RandomAngkaAtoB(10,30);
		var a1 = RandomAngkaAtoB(0,24);
		var a2 = 25;
		var bb = RandomAngkaAtoB(10,30);
		
		var ArSisi = [a0,a1,a2,bb];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = a0+a1/a2+bb/100;		benar = NBelakangKoma(benar,2);
		var salah1 = a0+a1/a2+bb/100+0.1;	salah1 = NBelakangKoma(salah1,2);
		var salah2 = a0+a1/a2+bb/100+0.2;	salah2 = NBelakangKoma(salah2,2);
		var salah3 = a0+a1/a2+bb/100+0.3;	salah3 = NBelakangKoma(salah3,2);
		var salah4 = a0+a1/a2+bb/100-0.1;	salah4 = NBelakangKoma(salah4,2);
		var salah5 = a0+a1/a2+bb/100-0.2;	salah5 = NBelakangKoma(salah5,2);
		var salah6 = a0+a1/a2+bb/100-0.3;	salah6 = NBelakangKoma(salah6,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal11(){
		var bb = RandomAngkaAtoB(4,4)+RandomAngkaAtoB(0,9)/10;
		var a0 = RandomAngkaAtoB(1,3);
		var a1 = RandomAngkaAtoB(0,24);
		var a2 = 25;
		
		var ArSisi = [bb,a0,a1,a2];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb-a0-a1/a2;		benar = NBelakangKoma(benar,2);
		var salah1 = bb-a0-a1/a2+0.1;	salah1 = NBelakangKoma(salah1,2);
		var salah2 = bb-a0-a1/a2+0.2;	salah2 = NBelakangKoma(salah2,2);
		var salah3 = bb-a0-a1/a2+0.3;	salah3 = NBelakangKoma(salah3,2);
		var salah4 = bb-a0-a1/a2-0.1;	salah4 = NBelakangKoma(salah4,2);
		var salah5 = bb-a0-a1/a2-0.2;	salah5 = NBelakangKoma(salah5,2);
		var salah6 = bb-a0-a1/a2-0.3;	salah6 = NBelakangKoma(salah6,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal12(){
		var aa = 10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)/10+RandomAngkaAtoB(0,9)/100
		var bb = 10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9)/10+RandomAngkaAtoB(0,9)/100
		var cc = aa+bb;
		
		var ArSisi = [NBelakangKoma(cc,2),NBelakangKoma(aa,2)];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb;				benar = NBelakangKoma(benar,2);
		var salah1 = bb-0.01;		salah1 = NBelakangKoma(salah1,2);
		var salah2 = bb-0.1;		salah2 = NBelakangKoma(salah2,2);
		var salah3 = bb-1;			salah3 = NBelakangKoma(salah3,2);
		var salah4 = bb+0.01;		salah4 = NBelakangKoma(salah4,2);
		var salah5 = bb+0.1;		salah5 = NBelakangKoma(salah5,2);
		var salah6 = bb+1;			salah6 = NBelakangKoma(salah6,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal13(){
		var a0 = RandomAngkaAtoB(1,3);
		var a1 = RandomAngkaAtoB(0,24);
		var a2 = 25;
		
		var bb = 3*(a0 + a1/a2);
		
		var ArSisi = [a0,a1,a2,a0,a1,a2];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb;		benar = NBelakangKoma(benar,2);
		var salah1 = bb+0.1;	salah1 = NBelakangKoma(salah1,2);
		var salah2 = bb-0.1;	salah2 = NBelakangKoma(salah2,2);
		var salah3 = 2*(a0 + a1/a2)+0.1;	salah3 = NBelakangKoma(salah3,2);
		var salah4 = 2*(a0 + a1/a2)-0.1;	salah4 = NBelakangKoma(salah4,2);
		var salah5 = 2*(a0 + a1/a2);	salah5 = NBelakangKoma(salah5,2);
		var salah6 = bb+0.2;	salah6 = NBelakangKoma(salah6,2);
		var salah7 = bb-0.2;	salah7 = NBelakangKoma(salah7,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
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
	function MyPecahanDesimal14(){
		var gaji = 300000*RandomAngkaAtoB(12,10);
		var a1 = 1;
		var a2 = 10;
		var b1 = RandomAngkaAtoB(0,2);
		var b2 = 5;
		var c1 = 1;
		var c2 = 3;
		
		var sisa = gaji - gaji*a1/a2 - gaji*b1/b2 - gaji*c1/c2;
		
		var ArSisi = [a1,a2,b1,b2,c1,c2,gaji];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = sisa;			//benar = NBelakangKoma(benar,2);
		var salah1 = sisa+100000;	//salah1 = NBelakangKoma(salah1,2);
		var salah2 = sisa+200000;	//salah2 = NBelakangKoma(salah2,2);
		var salah3 = sisa+300000;	//salah3 = NBelakangKoma(salah3,2);
		var salah4 = sisa-100000;	//salah4 = NBelakangKoma(salah4,2);
		var salah5 = sisa-200000;	//salah5 = NBelakangKoma(salah5,2);
		var salah6 = sisa-300000;	//salah6 = NBelakangKoma(salah6,2);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal15(){
		var Ara = [2,4,5,8]
		Ara = RandomMyArray(Ara);
		var a0 = Ara[0];//RandomAngkaAtoB(1,5);
		var a1 = 1;//RandomAngkaAtoB(0,24);
		var a2 = 5*RandomAngkaAtoB(0,2);
		var b0 = a2;
		var b1 = 1;
		var b2 = a0;
		
		var bb = (a0 + a1/a2)*(b0 + b1/b2);
		
		var ArSisi = [a0,a1,a2,b0,b1,b2];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = bb;						benar = NBelakangKoma(benar,4);
		var salah1 = bb+0.1;				salah1 = NBelakangKoma(salah1,4);
		var salah2 = bb-0.1;				salah2 = NBelakangKoma(salah2,4);
		var salah3 = 2*(a0 + a1/a2)+0.1;	salah3 = NBelakangKoma(salah3,4);
		var salah4 = 2*(a0 + a1/a2)-0.1;	salah4 = NBelakangKoma(salah4,4);
		var salah5 = 2*(a0 + a1/a2);		salah5 = NBelakangKoma(salah5,4);
		var salah6 = bb+0.2;				salah6 = NBelakangKoma(salah6,4);
		var salah7 = bb-0.2;				salah7 = NBelakangKoma(salah7,4);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7];
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
	function MyPecahanDesimal16(){
		var aa = RandomAngkaAtoB(0,9)+7/10+5/100;
		var bb = 5*RandomAngkaAtoB(0,4);
		var cc = aa*bb;
		
		var ArSisi = [NBelakangKoma(cc,2),bb];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = aa;				benar = NBelakangKoma(benar,4);
		var salah1 = aa-0.1;			salah1 = NBelakangKoma(salah1,4);
		var salah2 = aa-0.2;			salah2 = NBelakangKoma(salah2,4);
		var salah3 = aa-0.3;			salah3 = NBelakangKoma(salah3,4);
		var salah4 = aa+0.1;			salah4 = NBelakangKoma(salah4,4);
		var salah5 = aa+0.2;			salah5 = NBelakangKoma(salah5,4);
		var salah6 = aa+0.3;			salah6 = NBelakangKoma(salah6,4);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal17(){
		var Ara = [3,5,7,9];
		var Arb = [4,8];
		Ara = RandomMyArray(Ara);
		Arb = RandomMyArray(Arb);
		
		var aa = Ara[0]**2;
		var bb = Arb[0];
		var cc = 4*Ara[0]/10;
		
		var hasil = aa/bb * 1/cc;
		var aprint = PecBiasaCampuran(aa,bb);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var ArSisi = [aprint[0],aprint[1],aprint[2],StringDesimal(cc)];
		
		var cbenar = hasil;
		var csalah1 = hasil-0.1;
		var csalah2 = hasil-0.2;
		var csalah3 = hasil-0.3;
		var csalah4 = hasil+0.1;
		var csalah5 = hasil+0.2;
		var csalah6 = hasil+0.3;
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPecahanDesimal18(){
		var Ara = [3,5,7,9];
		var Arb = [4,8];
		Ara = RandomMyArray(Ara);
		Arb = RandomMyArray(Arb);
		
		var aa = Ara[0]**2;
		var bb = Arb[0];
		var cc = 4*Ara[0]/10;
		var dd = RandomAngkaAtoB(0,5);
		var ee = RandomAngkaAtoB(0,4);
		var ff = 5;
		
		var hasil = aa/bb * 1/cc * (dd*ff+ee)/ff; 
		var aprint = PecBiasaCampuran(aa,bb);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var ArSisi = [aprint[0],aprint[1],aprint[2],StringDesimal(cc),dd,ee,ff];
		
		var cbenar = hasil;
		var csalah1 = hasil-0.1;
		var csalah2 = hasil-0.2;
		var csalah3 = hasil-0.3;
		var csalah4 = hasil+0.1;
		var csalah5 = hasil+0.2;
		var csalah6 = hasil+0.3;
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyPecahanDesimal19(){
		var aa = RandomAngkaAtoB(10,80)
		var bb = RandomAngkaAtoB(10,80);
		var cc = bb/100;
		var hasil = aa+bb;
		
		var ArSisi = [hasil,cc];
	
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		
		var benar = aa;				benar = NBelakangKoma(benar,4);
		var salah1 = aa-1;			salah1 = NBelakangKoma(salah1,4);
		var salah2 = aa-2;			salah2 = NBelakangKoma(salah2,4);
		var salah3 = aa-3;			salah3 = NBelakangKoma(salah3,4);
		var salah4 = aa+1;			salah4 = NBelakangKoma(salah4,4);
		var salah5 = aa+2;			salah5 = NBelakangKoma(salah5,4);
		var salah6 = aa+3;			salah6 = NBelakangKoma(salah6,4);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
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
	function MyPecahanDesimal20(){
		var aa = RandomAngkaAtoB(0,10);
		var bb = RandomAngkaAtoB(0,99);
		var cc = 100;
		
		var FPB = CariFPB([bb,cc])
		var printbb = bb/FPB;
		var printcc = cc/FPB;
		
		var printsoal = StringDesimal(aa+bb/cc);
		
		var csoal = [printsoal];
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = [aa,printbb,printcc];
		var csalah1 = [aa,printbb*10,printcc];
		var csalah2 = [aa,printbb,printcc*10];
		var csalah3 = [aa+1,1,printcc*10];
		var csalah4 = [printbb,aa,printcc];
		var csalah5 = [aa+1,printbb,printcc];
		var csalah6 = [aa-1,printbb,printcc];
		var arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6];
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
		
	

	function GambarPecahanDesimal20(nmcanvas,arrs){
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
					if(arrs[i+2][0]==0){
						ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],43,12+40*i);
						ctx.fillText(arrs[i+2][2],43,32+40*i);
					}else{
						ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
						ctx.fillText(NBelakangKoma(arrs[i+2][0],0),25,22+40*i);
						ctx.fillText(NBelakangKoma(arrs[i+2][1],0),47,12+40*i);
						ctx.fillText(NBelakangKoma(arrs[i+2][2],0),47,32+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal18(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAoCAYAAABAS0DDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGiSURBVHhe7dtBTsJAGIbhf7wBFyCQyCXoCegB3Lprl3oUWMIRXLmxPQGcwN1wB45QZ5qRiAqJMaXA9z7JhJnixvpmMoXomsAAMXfpFZBC+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+JBE+B2qy8yysrZtWu9tF5a5zBY/3sC5XH344/G4HZenttfVxjar3CYh/r0QvZs8W3jHXt5uu3zn3MnRJ3b8zsxs6ec2jdMQv4s7f9zpQ/TRdO5t/XTfztUMh8M06w//gdW1FPsmLaNpUdl6OUsr9KHz8AeDQZr9z263S7MrVJfm8lVamPlwy8+91/N3OMRRp2txx/8SffTIU23/4o5/zUajUTsukq+aItzieJutqBrv500487frcMZPP3S72t/7lxHO+O1rnwi/M9+iT1ebqpCJ/zP0Y6NPPNx2qC6d5VaZDw+yB2f6cObP8nd78GsT/WCnd4QPSTzcQhLh4+Ic+2b3r9dPIXxI4owPSez4kET4kET4kET4kET4kET4kET4kET4kET4kET4kET4EGT2AdE95bKiISlGAAAAAElFTkSuQmCC";
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
				ctx.fillText(arrs[0],10,22);
				ctx.fillText(arrs[1],33,12);
				ctx.fillText(arrs[2],33,32);
				ctx.fillText(arrs[3],70,22);
				ctx.fillText(arrs[4],110,22);
				ctx.fillText(arrs[5],131,12);
				ctx.fillText(arrs[6],131,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal17(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAoCAYAAACM0nooAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADiSURBVHhe7dvRCYMwGIXRpBu4gOL+Qwku4AhtEX0R2lpKhavnQIj46kfI/2C9PxUIclt2iCFa4oiWOKIljmiJI1riiJY4oiWOaIkjWuKIljiiJY5oiSNa4oiWOPHR9n0/L67DSXugWuvbxT7+XDjQqzDbti3jOBafYp+/R9s0zfL0m2malieuzvWAOPHXg3UIG4Zh3jk/J+2BtoPXurqum3f2MYgd6FOYPsU+oiWO6wFxREsc0QZYB7atb9+fhWiJYxAjjpOWOKIljmiJI1riiJY4oiWOaIkjWuKIljiiJUwpD/o/LJAVyFJgAAAAAElFTkSuQmCC";
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
				ctx.fillText(arrs[0],10,22);
				ctx.fillText(arrs[1],33,12);
				ctx.fillText(arrs[2],33,32);
				ctx.fillText(arrs[3],70,22);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal15(nmcanvas,arrs,ss1,ss2,ss3,ss4){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],10+235,22);
				ctx.fillText(arrs[1],27+235,12);
				ctx.fillText(arrs[2],27+235,32);
				ctx.fillText(arrs[3],8+260,62);
				ctx.fillText(arrs[4],27+260,52);
				ctx.fillText(arrs[5],27+260,72);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal14(nmcanvas,arrs,ss1,ss2,ss3){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[0],12,12);
				ctx.fillText(arrs[1],12,32);
				ctx.fillText(arrs[2],12,52);
				ctx.fillText(arrs[3],12,72);
				ctx.fillText(arrs[4],12,92);
				ctx.fillText(arrs[5],12,112);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal13(nmcanvas,arrs,ss1,ss2,ss3,ss4){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABQCAYAAADvLIfGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABERSURBVHhe7ZxLiBVHFIZrsvMFhgiiiSNKguBGiJpFFhkFN4I6RlzELHSRVXR040JBs5E8dOFG4mOrJCaIJPiAbAzq4MKgJmQjiIJoQCMIQcbXbtJfT5/ruTXd9311bs//QXlv1+OcU6fOreruqrFvNCEIIYQQoqd5K/sUQgghRA+jBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAW+tWLEi9PX15aYDBw5k1Zrn4cOHYf78+VXytmzZkpW+XtD7pnTX4+nTp4ExaNW+c+fOpX7G38ZE7m83wAfTpk0LN27cyHLaw2K3mz7stM1CCBH4n+LOnj072t/fP/rgwQMuU8ijePPmzVlOa+zfv3+cbDHGyMjI6MDAQMt+tjGazP41H0ydOnX0+vXrWe7EphdtFkJMfApfua9duzYki0y4dOlS1dNfKyxYsCDMmDEju+ocPN0cO3Ysu+o9pk+fHs6fPx+SRT3LaQ7GKFkcsqvJSS/6QOMmhOgGNffQFy9eHB4/fhySp78sZ+LAq+qdO3eGJ0+eZDlCCCHE5KVwQefpd9++fWHjxo1h6dKlVXvitrfOHmMn9sbj/Xa/J2xl7Dey7/jVV1+lts2ePTtcvnw57N69u7IXiV3U3b59e8Uu26MuOg/g97CRbzbwHZnI5jpu7+t6e21vlDcbdj6BT/SYv3x9j5WTkGOYjVZW62xDvf6WHe8rv0eNP8x/lny5J8+HRWNg+evXr6+UE6Nevo9vP65Gkc1CCNEUvHe3Pb04sf/tYZ+W/Vqfz95vrf1f6rJPzH5xEV5GrIN87LP95qJ6fMZ2+z1qy/P4cpLJ5pNrsxv9fp+aa6sLyKbuqVOnKrJsf5TEd/J8P/JspByQbe0pHxwcrOy1Wr+trrfNy8rrb1nBB97fS5YsqYwV+HLAv348PXk+LBoDxtvqevkQ68wbt1o2CyFEs1Se0JPJJn21nuSlKZlk0if01/HEcPz48TSh5/333w/379/PSsY4ePBg+slTL/Xy2LVrV0gm4LQfyYSd5tXbo/bltDHZbDWQRxl1wLYeeJrCnhMnTqRPVCTeEly7di0sXLgw3RtNJuowPDycvtmYO3dumDVrVprP3qlx8+bN7NsY6Ldy+kGbCxcuhIsXL4YzZ86EZcuWpbqQh39Onz6d1vW0uyff6/z666/pNsyVK1fCnDlzstwxXy9fvjwsWrQoveatU9FWUp4Pi8aAelbX3mQ1S5HNQgjRLIWv3JmcWJTg0KFD6We3sFeSTGx37typmkx37NiRLpYcqptIryNZoO3mh/Ts2bOWJvQ86CsHCQ38kTwlVukrurF5E3z99ddhypQpHUnIaoXnz5+Hb775Jo2VW7duZbljcLN09+7ddGGGeIFvhG6MQS2bhRCiWWoeiusmPOnu3bs3PHr0KGzatCls3bo1fQKPT8OzSLJY8jTFU+snn3wyIRb1+Am7k7BwsADxpgD4Tp4ohrcivFXiSXnDhg1VZxR48iW+1q1blz5hHzlyJPz000+Vty+N0I0xqGWzEEI0S+GCzuTCJMNTBBMO2JOjLWYsrLz65fVzrYNxeZPhtm3bKk/dYDJ5UuGJxeCAG3qYlK9evRo++OCDNN8/xXIjUG+R79QCzCLAmwRes/sDTidPnmxrQr537156kwPIpm8rV65ME9+56bFy9KDPyHt93M0bjhhuzF68eNGRhKx2OHz4cOovfGgwTvjDnqzxdTOvtxsZgxhey4ONC78RXtNzUxEfjMuzWQghmmYgO9STl/yhHoPDPFZOWw4LccgoJpnI0kNAXp5PXjaHjyyfw0EkviN3aGhodN68eZVyf9iLcqvnZaAX/clNROXQktXz5JXHco4ePVq5LrKZxLX3DXW59j7Ys2dPrj317Ix9af2L9Q0PD9eUU0ZiH1y8eLHKB4wLY0aZ5Vkq8o+NB22NvDG4fft2TX9zbWXEMW2wtxGbrQ6fQgjRCH38k0wcQpQWeyL2hxLBtnjisw88ha9ZsyasXr06PWwphBC9wBvbQxfidcCr8eTpOLt6Bfm///574UHGmTNnhlWrVmVXQggx8dETuig9PKGzd+3p7+9Pz2TYXro9lfOfFcHZ6M8MhRBioqMFXQghhCgBeuUuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClAAt6EIIIUQJ0IIuhBBClIC3Dhw4EPr6+ippxYoV4enTp1lxYzx8+DDMnz8/bNmyJcuZPOArfNZq38+dO5f6Dh8ayCqzLy1eiL0y0W4siIlPN8Y4bw4ogrrTpk0LN27cyHLG4+ePZu3thRhm3sBGbG0V76M8KGt0TFqha3PgaMKDBw9G+/v7R/fv38+laJCRkZHRgYGBUdy4efPmLLdxzp49m7bF94zBZMBijX6XKd7ajQUx8enGGDczB1jdqVOnjl6/fj3LLaZZe3shhpkzsA87sbcX6eYcWPXKffHixdk30QjTp08P58+fD0lwZTnNsXbt2pD8SLOrycGcOXPC1atXQxLQWU45aDcWWuXYsWM1n9bKRLeelhqlG2PczBzQ7HzRrL29EMO7du0KySKYXfUm3ZwDtYcuRI/CJPjtt99mV+WHiVCUi8kWw92mcEHH0ezVNLK3bvsu7AfYd9rYHoXt03sZtodg8i3FbSwV7TWYPtqxv2T1+e77ELf3df1eie1RXbp0qdIPsxsdcX2PlZOQY3ifkIr6Ala3Vh3zDfriu1srI5ndlo/df/75Z8XvtPe2+frg+0OyPvn9H9MX7+vF8WOJ+jHeZisv0u2JY8jqmDzrj5dPMh3Wd3TR1sq9rnpxWoS338vz/iaZLcB3dG3fvj0tQ0asn+/kUXfZsmXhn3/+ST+R+ejRo8L+tOsrkY/3s8VEqzHj8XJtzD3Xrl2r/L5s7MDiK2/c4pioR7MxbPnr16+vlNOumRi2fni8Pj5HRkaykjGKYrbIHsvP85FBGXW8PV6PL0MmY7F379607OOPP06fvr0t5suiGPCya9lVF9672zt99mjA9lLs/T77NezbWLnH77tYfcvz+zCUkUdZXG7yvb558+ZV9onIx754j8nrJpk8Prk2fdjt23OdZ9upU6cqsmyfymwjj3amM+6rlQOyrT3lg4ODlb7Evva2eVkmPwY5yLN+mR6gjW+HHSTyrF+mi7ZcW/tadgFysO327dtpvslDttltPjVZZovpMtm+3NpaGRTppm4e1k+DdsmPK/1O3/JiiX6Yr0nW3uuK+4UM/GX9irH6vq+0bSQWkGm2ePm0N/15fvWy6/XHrq0MGvGVjYMYP7fx6ccrLseXtWIG4njn2o8RbW0MKWN87drkU990+xjyed5max/j66MLqF8vhpk7rZ3VNWhvumvFcBG+PfXQY/ZzXe/37eX7/hWNCfmUmw7L8/XNJhsPktkIcT/B98OXm03m73bIXdA93uAihWaQGW/XvoOUmYNifXn1DfLQTX3axdTTBejxAUmZ9cmSlfu6UM/WPP1+sGgX6yJZfcp930ye+TIGu7DP7DFMZ6zHZCPP60GO/yF4mz3eX3xynVeX/lif6sm266GhodElS5ZU6sXk6c4j1odvYv8A9nmfmHw/dtgY99Nk5dX35JX7viPHxsUnq08dsy2GvjHu1Dc/Is/Har3+QKu+EmOYj1nU+Ix912zMAHXNz1bfxwepaH4CHzfW3mIkT38cE568+tYn2qE/to1E/by2HmyuF8Mx5DNH+BhEfp795CM79kVsj+WbDXl4H1n/fX+9nrw+eJ8Z2GG2WHm9ObBZ6r5yP336dEiUd3QDn72wrVu3hoMHD6avLRKnhbt374aNGzdmNV69giAvcViW2zmQmfS/kp49exaWLl2albbHjBkzwoIFC7KrkB4yoY9e3/Hjx7PS5sBGfLJu3bpxr3DefvvtkARGlZ579+61vPeI7NmzZ6fjlARmllsfbFy5cmU4dOhQek38YMuqVavSa+P7778Pf//9d7hw4UKW84pmdC9atCgsXLgw1Uc8/fHHH6l+o9VYaiRO69FuLNjryp07d4Y7d+60fWCpW77qJlOmTOlY6hRnzpwJly9fTudHTydiBpqZn7p9mPlNxjBzw3///ZddjRH393XEbKfnVqPWHNgKuQs6A7Bhw4bw888/t7zw1CO5U0kDnWCZO3du+iPgFCewJ3HkyJF0IbC8TnPz5s3sW+exH7EFHt/J6xSMCQHFQnfixInKok7g47NOwI+EgGVftpUbnR07dqSTHT809scOHz48Tg728wPcvXt31R5ds7o5nctkgb4ffvghvPfee2ketBtLteK0EdqJBRaETZs2pTo504EN7dJNX00miAsmePxIvHrajRloZn6iLgtuJ+IjjzcZw+h8/Phx4bz2umK2k3Orp2gObJWap9wtqAjc+/fvp98bgQmCOzImZQaUGwSczh3tmjVr0on6yy+/DL/88kvlboc/R/D4QYzvgtvBJrTYgSdPnkztbBXrKyCbHxhPPiS+E9RWjh70GXkBW/SD5s0Jh6bA/wmHPRl89tlnVYfTODRnepvFfri0/+2337Lc+tA/uxu38S36sZFPH4aGhqr836xu/Lx8+fLw3XffhcHBwSx3jFZjCd314jSPdmIhD4uFW7dupYehDBaLd955J/3OOPMU1wjd8FU3efHiRcdSJ+Fmk4eeffv2VX5zrcaM+b2R+en58+eVMUIv+mljN2bQzA1BHm8qhk2mwcPArFmz0v5Rhi6/lrx8+bLlmG3UR63Mrdy44CfTQTts8w9gRtEc2BKJoKp9gYFs34B3/T7P9hCoH0N96vgy9gRsv8T2Ckw2ePmWbB8iGZyKPpLVjfcpTK+v5/uDjKNHj1auffu431wnd0pVdbn2duzZs2ecPsizwxP3h+/kxfqGh4drygHs93VMlmG+soSO2Cfkoc/y8JG3j/p+/Phkz5Dv7777bpp8Xa8T2/79998qGy2h46+//hqny9tHO/yQpzvuawz9qud7sxW5H374YVV+7Cfaxv4k0dbHoafVWMjTDT6fvTYS35HrZflDSVZeJBOa9VVRfycTeWPrf8PmY/ObT0U+9O19HT92JK6NojaxfZ9//nlTMWG0EsNFh0yh0RimX3nQP/pJHer6taRWzMa/b6jXNwObTYdhsi1hb9FYgC9DFvNY3GcSuryPqGuHj4vsK4I7yLYxJ2FUI1CfxdE7C7hmcRG9DQFrJ6c95P/444/ZVeexH1inKHOcdtpXYowyx8xkIm9B7wU69h/LzJw5c9yhpyLYT71y5Up29Qr29HgVKHobXtHlbdHwqoxXdt2AV1/xAa92KWucdsNXYgzNbeVh9erVVdsYvUDLCzqTgv2xPvsFX3zxRcOHp7Zt25Z+0o72lp48edLSASwxsUjubtMDMH5sSR999FHbp0Jj2I9CNifiP/30047+AMsWp930lRhDc1vvYqflSex9N3L2YaLRx2N69l0IIYQQPUrHXrkLIYQQ4s2hBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYQoAVrQhRBCiBKgBV0IIYToeUL4H5ZABzz2UQYmAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[0],410-280+5,22);
				ctx.fillText(arrs[1],430-280+5,12);
				ctx.fillText(arrs[2],430-280+5,32);
				ctx.fillText(arrs[3],410-130+5,62);
				ctx.fillText(arrs[4],430-130+5,52);
				ctx.fillText(arrs[5],430-130+5,72);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal11(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*6.7;
				console.log(len)
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1],415,22);
				ctx.fillText(arrs[2],435,12);
				ctx.fillText(arrs[3],435,32);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal10(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAjCAYAAACq/4cTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAASFSURBVHhe7Zw9LC1BFMfnvtJHJxEEvYICCRUSpa9CoyFadAoaPYVGQk+toiAhQaKQuFqJRCIURCJRUOju2//cOZuxdvbuXnn3mev/SyYzc+Zrd+ec3XPmilwhQBFCvOSPyQkhHkIDJsRjaMCEeAwNmBCPoQET4jE0YEI8hgZMiMfQgD1jf3/flAgJDHhwcFDlcrkwra2t6YarqytVW1v7qe07yoP52tradA6enp5Ue3t7pjlnZmZ0Kpf393eF+5V79JHR0VFTIklgj7HX2PNSZNFF6ftjdAh/ibW3t1eoqakp5PN5VD8xPT1dGBgYKLy9vRnJ93l8fCwExoy/ANNrpwHXgf7ICUlidXVV60oavc2ii3ZfrPETCF3ohoYG1dzcbGr/lqamJnVxcaG/yGnZ3t5WgfGa2u8kzdeEKLW0tKQCAzO1ZLLoYjl6+69hDOwRdXV1puRGwh3yO8hswBIDiKKgDJmAGBVyxAgrKythG+KLaN9S2GvFxb6yliSJYSTWnZiY0Lm0yXxZ4m7yc4BO2fttx6Gy55AjD1xn01IkaWwcLt2ykTlxViRnO5UmNOCHhwftQtsXjbSzs2N6FFleXtYPKHC/VRATaJn0kZtEG7DlY2NjupwWbMjU1JSam5vT883OzqqTkxPTWpzz9PRUXwPa4V6vr6+r5+dnNTIyos7OztTR0ZGWob2np0f19fXp+yT+AQPZ3NxU+Xxe7ydc5K2trfCDMD8/r1/OaMOen5+fazkoNTaKS7fsEAZ2APCi6O3tVRsbG7pecYIL1ME7gnME6VFwaBR3GIADLxx8YQoJ6JMOw6JrIEfddXAAub0uctSjh1gix3VIf1ffUmtWA3gOZlurFuwr7lH0CfrW1dX1SX9dehsdC1x6Eadb0tc+xMKcUV2rFGW70IuLi+r29lYFN2ZalBoaGtJvI3zt8PUu5aYksbu7a0pFEP9hXRu4OY2NjfrtmPbQ4n8T9XCypiiudpfcZ8RlnZycVIGxGalSx8fH6vX11dSKdHR0mFIR11gXvuhWJgO23Vq4GPX19aalCIwM8uDFoN0OuBnlGjE24O7u7kssI2De+/t77TJ3d3cbKalW4NbC7Q2+gF9+C4euvLy8hCFdlKSxcfikW6EBJz2AKNfX1zq/ublRl5eXugzwoMRg4372iVtD5ooyPDys+0usgTgGX2XE1XKgJQaOF8vBwYGWpcG1ZiXAy+07KYqr3SX3GVt/bA8NHh9+BoVXCF2AlwiDxTkIzkM+Pj6cY21svShXtyqO+PiSxLe3Y1xJiBHQLnXEHUgoIwZAe2dnZ9gucQPkIsOch4eHOo4QmR1P2NjjMNf4+HgYa9jXhxxtKLe2thb6+/vDcdI/2LxUa/qO3F+1Ed0/7CtyOXOx9QH9FhYWvsStcWPjdNGlWy0tLTrZfWUuJFnPRtaO6qGrnhX+T6wqQ+JdbuvvIPMhFiHk58AvMCEewy8wIR5DAybEY2jAhHgMDZgQj6EBE+IxNGBCPIYGTIjH0IAJ8RgaMCEeQwMmxGNowIR4DA2YEG9R6i/q/8UWL/3vegAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],80,22);
				ctx.fillText(arrs[1],100,12);
				ctx.fillText(arrs[2],100,32);
				ctx.fillText(arrs[3]+"%",140,22);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal8Awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAoCAYAAACM0nooAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADnSURBVHhe7dpBaoNQFIZR7cyhG1Dc/6JcgkOHaVpuBwliTEIjP5wD4sXxx+U9sL1cNRDkq94QQ7TEES1xREsc0RJHtMQRLXFESxzREke0xBEtcURLHNESR7TEES1xREscP4Gzq23bmradkY9Ny0uGYajp82I2bdd1NR2zrmtNt/q+r+k9y7LUdGuappqOmee5Jo6yaYnjTEscm5ZdPxexrWccx9/3GWxadj0K84x8REscxwPiiJY4ouVf/F3Y7j37fYtoieMiRhybljiiJY5oiSNa4oiWOKIljmiJI1riiJY4oiVM03wDgNwsDPLWVNMAAAAASUVORK5CYII=";
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
				ctx.fillText(StringDesimal(NBelakangKoma(arrs[0],2)),20,22);
				ctx.fillText(arrs[1],68,12);
				ctx.fillText(arrs[2],68,32);
				ctx.fillText(arrs[3],115,22);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal8(nmcanvas,arrs){
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
					if(arrs[i+2][0]==0){
						ctx.drawImage(base1_image, 30, -3+40*i,base1_image.width, base1_image.height);
						ctx.fillText(arrs[i+2][1],43,12+40*i);
						ctx.fillText(arrs[i+2][2],43,32+40*i);
					}else{
						ctx.drawImage(base2_image, 20, -3+40*i,base2_image.width, base2_image.height);
						ctx.fillText(NBelakangKoma(arrs[i+2][0],0),25,22+40*i);
						ctx.fillText(NBelakangKoma(arrs[i+2][1],0),47,12+40*i);
						ctx.fillText(NBelakangKoma(arrs[i+2][2],0),47,32+40*i);
					}
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal7(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[0],171,22);
				ctx.fillText(arrs[1],229,12);
				ctx.fillText(arrs[2],229,32);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal4Awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAAjCAYAAACD3S+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATiSURBVHhe7Zw/LGxPFMfH6/wLEokg6BUUSKiQKP0rNBqiRaeg0VNoJPTUKgoSEiQKidVKJBKhIBIJQkK3v/s9e8/NuO/e3dl9uyy/7yc5mTtn5s7M3T1z7pzz9ilJehhCCMnAH78khJC00FkQQpygsyCEOEFnQQhxgs6CEOIEnQUhxAk6C0KIE3QWhBAn/vT19ZmSkpJAlpeXpeH8/NyUl5d/atvZ2ZG2XMB4zc3NUoL7+3vT0tKS1ZiTk5MiufL29mbwvPqMhOQb2BZsDLaWiWz2gPb9VtvFLzi3t7eTZWVlyUQigeonJiYmkr29vcnX11df8+/c3d0lPceBX47K3C5gHeiPkpBiZGlpSWzUZb9kswfsvpjjuwjCkNraWtPQ0ODXCkt9fb05PT2Vk4YrGxsbxnMUfo2Q4mN+ft54m9mvpSebPZDLfikEzFkUKTU1NSK/DQ1pyc8ja2ehsZN+6biGTkFOAXrEVouLi0Eb4rJw30zYc0XlKnQuFY39NDcxOjoqpbbpeNnkSQiBLdt2ZucN1NagR+mFH35LinT3RhFn0zY6JnKKmgP8CgJncXt7K2GIvVDI5uam3yPFwsKCfCheCGO8WEp02kcfDG3A1g8PD8u1K/gSxsfHzfT0tIw3NTVlDg8P/dbUmEdHR7IGtCNEWVlZMQ8PD2ZwcNAcHx+b/f190aG9s7PTdHd3y3MS4go249ramkkkEmJHCDPW19eDl97MzIy8gNAGWzs5ORE9yHRvmDibtpOl2H8ATqmrq8usrq5K/UvwFiUJFiRQkEgJg4RiVMIGyVAkRTGEJl3SJUrDc6BEPS65A709L0rUwwlO1WMd2j+ub6Y5i4nq6mqR3wa+J9/sfhywJ6xd7Rh23t7e/mnfxO2X8L0gzh6jbFr72glOjBm28UKScxgyNzdnrq6ujPcwfosx/f394u3wFsepJNORKx1bW1v+VYqKigqZ1wZHtrq6OvG+romlf6W0tDRvYqM5CpWXlxeR8EmvUEStL1exCa/fc4AiYb1N1Ji5Sj7QY//Y2JjxNravNebg4MA8PT35tRStra3+VYq4e+P4Dpt2JStnYYcGOC5VVlb6LSmwoaH3nJAcoXBkytVh4EO/vr7+KwZUMO7NzY2EHR0dHb6WkPyC0AChg/dmN0NDQ742BWz08fExCMfDpLs3imK36cBZpHvoMBcXF1JeXl6as7MzuQb4cNQ5RP1TZ9QcOlaYgYEB6a8xGuI/nDaQB9FkpzoTOLHd3V3RuRA3pwvv7+95Exu8oWypqqoSgeO1pVBErS9XsQmv//n5WSSst4kaM1fJB7bd2idenKDxkwOcsmGDOHXDOSBfhrzZx8dH7L02tj3matNfgsZGKhoT2TkJFcRWaNc64jUIrhE7ob2trS1o13gLetVhzL29PYm/VGfHYTb2fRhrZGQkiNHs9aFEG66bmpqSPT09wX3a3/vCnOYsFpizKA7CdgN7Qqm5OdsO0W92dvavPEPUvVF7IM6mGxsbRey+OhZE57PRucP2H1d3gX+Ds0jR31iEY+KfjuYnaHY/j6wTnISQ/yc8WRBCnODJghDiBJ0FIcQJOgtCiBN0FoQQJ+gsCCFO0FkQQpygsyCEOEFnQWKx/44CIXQWBeI3bDT8L2JCFP6CkxDiBE8WhBAn6CwIIQ4Y8x+SqaL5p6ggnAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[1],85,12);
				ctx.fillText(arrs[2],85,32);
				
				ctx.fillText(arrs[3],120,22);
				ctx.fillText(arrs[4],140,12);
				ctx.fillText(arrs[5],140,32);
				
				ctx.fillText(arrs[7],175,12);
				ctx.fillText(arrs[8],175,32);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal4(nmcanvas,arrs){
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
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal3Awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAAjCAYAAAB1sf0MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAR4SURBVHhe7Zw/LDxBFMfnfqU/nUQQ9AoKJFRIlP4VGg3RolPQ6Ck0EnpqFQUJCRKFxGklEolQEIlEQaG7335n523G2r3bPTl3s/l+ksnsvDc7s7vz3u57cyJX8FCEkJrnn6kJITUOnZUQR6CzEuIIdFZCHIHOSogj0FkJcQQ6KyGOQGclxBH+DQ8Pq1wuF5SNjQ2tuLm5UfX19d90h4eHWlcOGK+jo0PX4OXlRXV2dqYac25uTpdy+fz8VLhfuUeSPbC2WGOsdSnS2KD0rart4C+YDg4OCnV1dYV8Po/mN2ZnZwtDQ0OFj48PI/k9z8/PBc9x8ZdTeu4k4DrQHzUhUayvr2sbSWKvaWzQ7os5qkUQBjc1NanW1lbTqiwtLS3q6upKf2mTsru7qzxHNS1CfrKysqI8ZzKt4qSxwXLstRIwZ80Qkq6QbJLaWSV2F8PAMWQCckrIEduvra0FOuQF4b6lsOeKylVlLimSe0huOjU1pWvRyXhp8mRSfWBL9jrbeaOsNeSovfDXaHyKnRtFnE3ZyJjY05E9mL8gcNanpycdBtsXirK3t2d6+KyuruqH4oXQyovltUz6yI1BB2z5xMSEPk4KFmFmZkYtLCzo8ebn59XZ2ZnR+mOen5/ra4AeIfLm5qZ6fX1VY2Nj6uLiQp2cnGgZ9H19fWpgYEDfJ3EHOMP29rbK5/N6HRHm7uzsBC/9xcVF/QKGDmt9eXmp5aDUuWHibMrerIL9A7wU+vv71dbWlm7/Cd5F6QQbCTQS6TDY0IlK2LEZhU0pDCFJd7GNqvAcqNGOS+4ht+dFjXZ4g0nkuA7pH9e31Jyug2dgljSTYD1xf2JHsLOenp5vdhtnr+FzQZw9RNmU9LU3mDBm2MYqSdlh8PLysrq/v1fezRiNUiMjI/ptg68YvsqlQo5i7O/vmyOfhoYGPa8NQpbm5mb99ku6sVBNwlFL2hImTh8ndxUJO6enp5XnWEaq1OnpqXp/fzctn66uLnPkE3duHLVsU6mc1Q5NES40NjYajQ8cCnLvJaBDCIQM5TosHvrDw8OPHETAuI+Pjzrs7e3tNVKSNRCaInT1vmxqfHzcSH1gI29vb0E6FqbYuVHUuk0FzlrspsPc3t7q+u7uTl1fX+tjgIcjzhn1U0vUHDJWmNHRUd1fcgTkH/jaIg+WzSZxZrxEjo6OtCwJcXNWGrzEflPCxOnj5K5i240dcSGCw0+OiPJgA4j64JzYr8C+xdfXV+y5NrY9lGtTf4LE5lIkJrdzUimI7aGXNvIFFBwjdoe+u7s70Eu8D7nIMObx8bGO/0Vm5wE29nkYa3JyMsgR7OtDDR2O29vbC4ODg8F50t9bsERzuozcW5YIrxvWE7Xsjdh2gH5LS0s/8syoc6NsMM6m2tradLH7ylgoMp+NzB22v7h2Evg/mDKE5Kdc0mySeoOJEFId+GUlxBH4ZSXEEeishDgCnZUQR6CzEuIIdFZCHIHOSogj0FkJcQQ6KyGOQGclxBHorIQ4Ap2VEEegsxLiBEr9B0/Lg1LYcWs3AAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[0],80,22);
				ctx.fillText(arrs[1],100,12);
				ctx.fillText(arrs[2],100,32);
				ctx.fillText(arrs[3]+"%",140,22);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal3(nmcanvas,arrs){
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
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal2Awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				
				ctx.fillText(arrs[0],165,22);
				ctx.fillText(arrs[1],180,12);
				ctx.fillText(arrs[2],180,32);
				ctx.fillText(arrs[3],215,22);
				ctx.fillText(arrs[4],230,12);
				ctx.fillText(arrs[5],230,32);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal2(nmcanvas,arrs){
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
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal1Awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,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";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, 0,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],166,12);
				ctx.fillText(arrs[1],166,32);
				ctx.fillText(arrs[2],198,12);
				ctx.fillText(arrs[3],198,32);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal1(nmcanvas,arrs){
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
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,22+40*i);
				}
			}
		}
		
		return 0;
	}
	function GetSoal1(canv1,canv2){
		const Aljabar = MyPecahanDesimal1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal1Awal(canv1,ArSisi[1],"Hasil penjumlahan dari","adalah ...");
		const DrawPecahan = GambarPecahanDesimal1(canv2,ArSisi);
		
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
	function GetSoal2(canv1,canv2){
		const Aljabar = MyPecahanDesimal2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal2Awal(canv1,ArSisi[1],"Hasil penjumlahan dari","adalah ...");
		const DrawPecahan = GambarPecahanDesimal2(canv2,ArSisi);
		
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
	function GetSoal3(canv1,canv2){
		const Aljabar = MyPecahanDesimal3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal3Awal(canv1,ArSisi[1],"Hasil dari","adalah ...");
		const DrawPecahan = GambarPecahanDesimal3(canv2,ArSisi);
		
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
	function GetSoal4(canv1,canv2){
		const Aljabar = MyPecahanDesimal4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal4Awal(canv1,ArSisi[1],"Hasil dari","adalah ...");
		const DrawPecahan = GambarPecahanDesimal4(canv2,ArSisi);
		
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
	function GetSoal5(){
		const Aljabar = MyPecahanDesimal5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Hasil dari "+ArSisi[0]+"% + "+StringDesimal(ArSisi[1])+" adalah ...";
		
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
		const Aljabar = MyPecahanDesimal6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh()
		var ss
		ss = ""+Nama[0]+" mempunyai tiga utas tali dengan panjang "+StringDesimal(ArSisi[0])+" cm, "+StringDesimal(ArSisi[1])+" dm, dan "+StringDesimal(ArSisi[2])+" m. Panjang tali "+Nama[0]+" semuanya adalah ... m";
		
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
	function GetSoal7(canv){
		const Aljabar = MyPecahanDesimal7();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal7(canv,ArSisi,"Hasil pengurangan dari","adalah ...");
		
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
	function GetSoal8(canv1,canv2){
		const Aljabar = MyPecahanDesimal8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal8Awal(canv1,ArSisi[1]);
		const DrawPecahan = GambarPecahanDesimal8(canv2,ArSisi);
		
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
	function GetSoal9(){
		const Aljabar = MyPecahanDesimal9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = ""+StringDesimal(ArSisi[0])+" + n = 100. Nilai n adalah ... ";
		
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
	function GetSoal10(canv){
		const Aljabar = MyPecahanDesimal10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahanAwal = GambarPecahanDesimal10(canv,ArSisi,"Hasil dari","adalah ...");

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
	function GetSoal11(){
		const Aljabar = MyPecahanDesimal11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Berapa liter air yang tumpah?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+" liter";
		Ar[1] = StringDesimal(Ar[1])+" liter";
		Ar[2] = StringDesimal(Ar[2])+" liter";
		Ar[3] = StringDesimal(Ar[3])+" liter";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal12(){
		const Aljabar = MyPecahanDesimal12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Berat dua ekor ikan "+StringDesimal(ArSisi[0])+" gram. Jika salah satu ikan beratnya "+StringDesimal(ArSisi[1])+" gram, berapa gram berat ikan yang lain?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+" kg";
		Ar[1] = StringDesimal(Ar[1])+" kg";
		Ar[2] = StringDesimal(Ar[2])+" kg";
		Ar[3] = StringDesimal(Ar[3])+" kg";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(canv){
		const Aljabar = MyPecahanDesimal13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var str1a = "Bu Lastri membeli";
		var str1b = "kg jeruk.";
		var str2a = "Ia juga membeli semangka yang beratnya";
		var str2b = "kg lebih berat dari jeruk.";
		const DrawPecahanAwal = GambarPecahanDesimal13(canv,ArSisi,str1a,str1b,str2a,str2b);

		var Ekskul = NamaEkskul();
		var ss
		ss = "Berapa kg berat buah buahan yang dibeli Bu Lastri?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+" kg";
		Ar[1] = StringDesimal(Ar[1])+" kg";
		Ar[2] = StringDesimal(Ar[2])+" kg";
		Ar[3] = StringDesimal(Ar[3])+" kg";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MyPecahanDesimal14();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "sedangkan sisanya untuk ditabung. Berapa uang ayah untuk ditabung?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = "Rp "+StringRibuan(Ar[0])+",00";
		Ar[1] = "Rp "+StringRibuan(Ar[1])+",00";
		Ar[2] = "Rp "+StringRibuan(Ar[2])+",00";
		Ar[3] = "Rp "+StringRibuan(Ar[3])+",00";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal15(canv){
		const Aljabar = MyPecahanDesimal15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var str1 = "Di sebuah kios buah, Tina membeli ";  
		var str2 = "kg jeruk."; 
		var str3 = "Di kios yang sama, Iza membeli jeruk ";
		var str4 = "kali yang dibeli Tina.";
		const DrawPecahanAwal = GambarPecahanDesimal15(canv,ArSisi,str1,str2,str3,str4);
		
		var ss
		ss = "Berapa kg jeruk yang dibeli Iza?";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+" kg";
		Ar[1] = StringDesimal(Ar[1])+" kg";
		Ar[2] = StringDesimal(Ar[2])+" kg";
		Ar[3] = StringDesimal(Ar[3])+" kg";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal16(){
		const Aljabar = MyPecahanDesimal16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Ibu membeli "+StringDesimal(ArSisi[0])+" liter minyak goreng. Minyak goreng tersebut akan dimasukkan ke dalam "+ArSisi[1]+" kantong plastik. Berapa liter minyak goreng dalam masing-masing kantong plastik?";
		
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
	function GetSoal17(canv){
		const Aljabar = MyPecahanDesimal17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarPecahanDesimal17(canv,ArSisi);
		
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
	function GetSoal18(canv){
		const Aljabar = MyPecahanDesimal18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarPecahanDesimal18(canv,ArSisi);
		
		var ss
		ss = "";
		
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
	function GetSoal19(){
		const Aljabar = MyPecahanDesimal19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Hasil pengurangan "+ArSisi[0]+"% \u{2212} "+StringDesimal(ArSisi[1])+" dalam bentuk persen adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringDesimal(Ar[0])+"%";
		Ar[1] = StringDesimal(Ar[1])+"%";
		Ar[2] = StringDesimal(Ar[2])+"%";
		Ar[3] = StringDesimal(Ar[3])+"%";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal20(){
		const Aljabar = MyPecahanDesimal20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
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
	
	
	dd1.innerHTML="<p>Kelas 6 Bab 1 \u{2192} Pecahan dan Desimal </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 288;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 160;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 312;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 160;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 235;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 160;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 267;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 160;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 323;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 370;
		cc1.height = 35;
		cc2.width = 70;
		cc2.height = 160;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 240;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==11){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Dalam sebuah ember terdapat "+StringDesimal(ss[2][0])+" liter air.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Dalam sebuah ember terdapat "+StringDesimal(ss[2][0])+" liter air.</p>";
		cc1.width = 500;
		cc1.height = 35;
		const DrawPecahanAwal11 = GambarPecahanDesimal11(cc1.id,ss[2],"Ternyata ember tersebut terguling dan air dalam ember tinggal","liter.");
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal cerita berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal cerita berikut!</p>";
		cc1.width = 500;
		cc1.height = 80;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==14){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Gaji ayah setiap bulan adalah Rp "+StringRibuan(ss[2][6])+",00.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Gaji ayah setiap bulan adalah Rp "+StringRibuan(ss[2][6])+",00.</p>";
		cc1.width = 287;
		cc1.height = 120;
		var str1 = "untuk biaya transportasi,";
		var str2 = "untuk keperluan sehari-hari,";
		var str3 = "untuk biaya pendidikan anak-anaknya,";
		const DrawPecahanAwal14 = GambarPecahanDesimal14(cc1.id,ss[2],str1,str2,str3);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan soal cerita berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan soal cerita berikut!</p>";
		cc1.width = 456;
		cc1.height = 80;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 120;
		cc1.height = 40;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==18){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pilihlah jawaban yang tepat!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pilihlah jawaban yang tepat!</p>";
		cc1.width = 160;
		cc1.height = 40;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==20){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pecahan biasa dari "+ss[2][1][0]+" adalah ...</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pecahan biasa dari "+ss[2][1][0]+" adalah ...</p>";
		cc1.width = 70;
		cc1.height = 160;
		const DrawPecahan20 = GambarPecahanDesimal20(cc1.id,ss[2]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(dd3);
		hidingElemen(cc2);
		hidingElemen(cc3);
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
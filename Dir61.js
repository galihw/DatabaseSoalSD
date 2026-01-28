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
		/*
		console.log("cbenar = "+cbenar);
		console.log("csalah1 = "+csalah1);
		console.log("csalah2 = "+csalah2);
		console.log("csalah3 = "+csalah3);
		console.log("csalah4 = "+csalah4);
		console.log("csalah5 = "+csalah5);
		console.log("csalah6 = "+csalah6);
		*/
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
		//console.log("ABCD = "+ABCD);
		
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
					ctx.font = "15px Times New Roman";
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
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],10,22);
				ctx.fillText(arrs[1],33,12);
				ctx.fillText(arrs[2],33,32);
				ctx.fillText(arrs[3],70,22);
				ctx.fillText(arrs[4],110,22);
				ctx.fillText(arrs[5],131,12);
				ctx.fillText(arrs[6],131,32);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
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
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],10,22);
				ctx.fillText(arrs[1],33,12);
				ctx.fillText(arrs[2],33,32);
				ctx.fillText(arrs[3],70,22);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal15(nmcanvas,arrs,ss1,ss2,ss3,ss4){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len1 = ss1.length*7.5;
				var len2 = ss3.length*7.5;
				//ctx.drawImage(base1_image, 0+230, -3,base1_image.width, base1_image.height);
				//ctx.drawImage(base1_image, 0+250, 37,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len1, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len2, 37,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],10+230,22);
				ctx.fillText(arrs[1],27+230,12);
				ctx.fillText(arrs[2],27+230,32);
				ctx.fillText(arrs[3],8+250,62);
				ctx.fillText(arrs[4],27+250,52);
				ctx.fillText(arrs[5],27+250,72);
				*/
				ctx.fillText(arrs[0],10+len1,22);
				ctx.fillText(arrs[1],27+len1,12);
				ctx.fillText(arrs[2],27+len1,32);
				ctx.fillText(arrs[3],8+len2,62);
				ctx.fillText(arrs[4],27+len2,52);
				ctx.fillText(arrs[5],27+len2,72);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,280,20);
				ctx.fillText(ss2,len1+60,20);
				ctx.fillText(ss3,0,60);
				//ctx.fillText(ss4,300,60);
				ctx.fillText(ss4,len2+60,60);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal14(nmcanvas,arrs,ss1,ss2,ss3){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABRSURBVFhH7dWxCoAwDADR1C3//7EZtWAW1ytVkHtLsx2FQMY5xQuOfrczhBnCDGGGMEPY/0KPU56ZPa2rqp5u3/xoJ7cOM4QZwgxhhjBDUMQFCWQPQhUyb4oAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 0, 37,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 0, 77,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],12,12);
				ctx.fillText(arrs[1],12,32);
				ctx.fillText(arrs[2],12,52);
				ctx.fillText(arrs[3],12,72);
				ctx.fillText(arrs[4],12,92);
				ctx.fillText(arrs[5],12,112);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,30,20);
				ctx.fillText(ss2,30,60);
				ctx.fillText(ss3,30,100);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal13(nmcanvas,arrs,ss1,ss2,ss3,ss4){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len1 = ss1.length*7.5;
				var len2 = ss3.length*7.5;
				//ctx.drawImage(base1_image, 403-280, -3,base1_image.width, base1_image.height);
				//ctx.drawImage(base1_image, 403-130, 37,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len1, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len2, 37,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],410-280,22);
				ctx.fillText(arrs[1],430-280,12);
				ctx.fillText(arrs[2],430-280,32);
				ctx.fillText(arrs[3],410-130,62);
				ctx.fillText(arrs[4],430-130,52);
				ctx.fillText(arrs[5],430-130,72);
				*/
				ctx.fillText(arrs[0],len1+7,22);
				ctx.fillText(arrs[1],len1+27,12);
				ctx.fillText(arrs[2],len1+27,32);
				ctx.fillText(arrs[3],len2+7,62);
				ctx.fillText(arrs[4],len2+27,52);
				ctx.fillText(arrs[5],len2+27,72);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,450-280,20);
				ctx.fillText(ss2,len1+47,20);
				ctx.fillText(ss3,0,60);
				//ctx.fillText(ss4,450-130,60);
				ctx.fillText(ss4,len2+47,60);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal11(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABcSURBVFhH7dYxCgAxCABBk87/P9bycoU/2AsIt9PEcgkIrucVg+1+xzKQMpAykDKQMpAykDKQMpAaH/jZyZ+ZPXFV1dOffvAWl4QykDKQMpAykDKQMpAykDKQiTg6UA9CJ+HaOAAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*6.7;
				console.log(len)
				//ctx.drawImage(base1_image, 403, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[1],410,22);
				ctx.fillText(arrs[2],430,12);
				ctx.fillText(arrs[3],430,32);
				*/
				ctx.fillText(arrs[1],len+7,22);
				ctx.fillText(arrs[2],len+27,12);
				ctx.fillText(arrs[3],len+27,32);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,450,20);
				ctx.fillText(ss2,len+60,20);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal10(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAnCAYAAACL4Y8gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACVSURBVGhD7doxCoQwAEXBZO9/Z5VFGytBBgy8AbFTeHxs4twOI8zvvAcpMFZgrMBYgbECYwXGCowVGCswVmCswFiBsQJjnw885/xfq2rBWIGxAmOvj4zefh/vr3/6vFVOulow9vlDz2vRqyz2rgVjBcYKjPXjCdaCsQJjBcYKjBUYKzBWYKzAWIGxAmMFxgqMFZgaYwcZMRlBWfnJ+AAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//ctx.drawImage(base1_image, 70, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],75,22);
				ctx.fillText(arrs[1],95,12);
				ctx.fillText(arrs[2],95,32);
				ctx.fillText(arrs[3]+"%",140,22);
				*/
				ctx.fillText(arrs[0],len+5,22);
				ctx.fillText(arrs[1],len+25,12);
				ctx.fillText(arrs[2],len+25,32);
				ctx.fillText(arrs[3]+"%",len+70,22);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,170,20);
				ctx.fillText(ss2,len+100,20);
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
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(StringDesimal(NBelakangKoma(arrs[0],2)),20,22);
				ctx.fillText(arrs[1],68,12);
				ctx.fillText(arrs[2],68,32);
				ctx.fillText(arrs[3],115,22);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
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
					ctx.font = "15px Times New Roman";
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAoCAYAAACsEueQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACBSURBVGhD7dgxDoAgEABB8P9/VgtLXI2J3UwDFYHNVcz9NFjarpUFcYI4QZwgThAniBPECeIEcYI4QZwgThAniBPECeIEccLv36Rzzmv33t2Vvpz1pJ5vcoIP9mBygjhBnCBOECeIE8QJ4gRxgjhBnCBOECeIE8QJ4gRxgji3xjgAT9USQtQNuIoAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//ctx.drawImage(base1_image, 160, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],171,22);
				ctx.fillText(arrs[1],214,12);
				ctx.fillText(arrs[2],214,32);
				*/
				ctx.fillText(arrs[0],len+7,22);
				ctx.fillText(arrs[1],len+54,12);
				ctx.fillText(arrs[2],len+54,32);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,230,20);
				ctx.fillText(ss2,len+80,20);
			}
		}
		
		return 0;
	}
	function GambarPecahanDesimal4Awal(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAoCAYAAAA16j4lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADSSURBVHhe7dqxCoMwFEDRpFs2/f+PTDJlbMurFnFol0bK5R6QFCft5eHy8v0pCeu2nYIyMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDXR54Xde4aHLOcf0bJxjOwHAGhnuv7JRS4sYvjDG2X69v7lHvPc7zptCszaFZ73X+3i7LEmdrLc7d8b1mPcsnTjDc5Ut3+0TXWuOk2Cf64r/zKycYzsBwBoZz8R3OCYYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAOjpfQAYnkuqUPWMtkAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//ctx.drawImage(base1_image, 70, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len-10, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[1],80,12);
				ctx.fillText(arrs[2],80,32);
				
				ctx.fillText(arrs[3],115,22);
				ctx.fillText(arrs[4],135,12);
				ctx.fillText(arrs[5],135,32);
				
				ctx.fillText(arrs[7],170,12);
				ctx.fillText(arrs[8],170,32);
				*/
				ctx.fillText(arrs[1],len,12);
				ctx.fillText(arrs[2],len,32);
				
				ctx.fillText(arrs[3],len+35,22);
				ctx.fillText(arrs[4],len+55,12);
				ctx.fillText(arrs[5],len+55,32);
				
				ctx.fillText(arrs[7],len+90,12);
				ctx.fillText(arrs[8],len+90,32);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,190,20);
				ctx.fillText(ss2,len+120,20);
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
					ctx.font = "15px Times New Roman";
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAnCAYAAACL4Y8gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACVSURBVGhD7doxCoQwAEXBZO9/Z5VFGytBBgy8AbFTeHxs4twOI8zvvAcpMFZgrMBYgbECYwXGCowVGCswVmCswFiBsQJjnw885/xfq2rBWIGxAmOvj4zefh/vr3/6vFVOulow9vlDz2vRqyz2rgVjBcYKjPXjCdaCsQJjBcYKjBUYKzBWYKzAWIGxAmMFxgqMFZgaYwcZMRlBWfnJ+AAAAABJRU5ErkJggg==";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//ctx.drawImage(base1_image, 70, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len-5, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],80,22);
				ctx.fillText(arrs[1],95,12);
				ctx.fillText(arrs[2],95,32);
				ctx.fillText(arrs[3]+"%",140,22);
				*/
				ctx.fillText(arrs[0],len,22);
				ctx.fillText(arrs[1],len+15,12);
				ctx.fillText(arrs[2],len+15,32);
				ctx.fillText(arrs[3]+"%",len+60,22);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,170,20);
				ctx.fillText(ss2,len+88,20);
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
					ctx.font = "15px Times New Roman";
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAoCAYAAAB+Qu3IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACfSURBVGhD7dpLCsJAEEDBGe9/ZxWJO4WgzmOQKgjZ5fNosunM691guctxZjGhI0JHhI4IHRE6InRE6IjQEaEjQkeEjggdETqydeg55+P4ByY6InRE6MhHq6xvv5vvbnn2ur/avq16j1dMdGTr5exz4jZ+xNNMdEToiNARP9BETHRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4ROjHEDEtocQ0Syj3IAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//ctx.drawImage(base1_image, 160, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len-5, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],165,22);
				ctx.fillText(arrs[1],180,12);
				ctx.fillText(arrs[2],180,32);
				ctx.fillText(arrs[3],215,22);
				ctx.fillText(arrs[4],230,12);
				ctx.fillText(arrs[5],230,32);
				*/
				ctx.fillText(arrs[0],len,22);
				ctx.fillText(arrs[1],len+15,12);
				ctx.fillText(arrs[2],len+15,32);
				ctx.fillText(arrs[3],len+50,22);
				ctx.fillText(arrs[4],len+65,12);
				ctx.fillText(arrs[5],len+65,32);
				
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,250,20);
				ctx.fillText(ss2,len+90,20);
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
					ctx.font = "15px Times New Roman";
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAoCAYAAABNefLBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAB1SURBVGhD7djBCoAgEADR3f7/nzVCoUAqIusw8yA6VQyrHcyyCpil3VGMpjCawmgKoymMpjCawujZMnO7/uakKZDRh+OiN/bb/vTp7vuePHPm6gTMSc/Wp/jhJ4f8kVG4pylc3hRGUxhNYTSF0RRGUxjNEFEBuXIcQ7ANAacAAAAASUVORK5CYII=";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				var len = ss1.length*8;
				//console.log(len+" "+161)
				//ctx.drawImage(base1_image, 150, -3,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, len-10, -3,base1_image.width, base1_image.height);
				ctx.font = "15px Times New Roman";
				ctx.textAlign = "center";
				/*
				ctx.fillText(arrs[0],161,12);
				ctx.fillText(arrs[1],161,32);
				ctx.fillText(arrs[2],194,12);
				ctx.fillText(arrs[3],194,32);
				*/
				ctx.fillText(arrs[0],len,12);
				ctx.fillText(arrs[1],len,32);
				ctx.fillText(arrs[2],len+33,12);
				ctx.fillText(arrs[3],len+33,32);
				ctx.textAlign = "left";
				ctx.font = "15px Times New Roman";
				ctx.fillText(ss1,0,20);
				//ctx.fillText(ss2,210,20);
				ctx.fillText(ss2,len+64,20);
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
					ctx.font = "15px Times New Roman";
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
		cc1.width = 300;
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
		cc1.width = 450;
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
		cc1.width = 370;
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
		cc1.width = 370;
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
		cc1.width = 340;
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
		cc1.width = 300;
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
		cc1.width = 500;
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
		cc1.width = 500;
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
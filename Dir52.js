function Print52(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function DeretKelipatan(n,a,b,f){
		var min = [-1,1,-1,1,-1,1,0,0,0,0];
		min = RandomMyArray(min);
		var ab = a;
		var ar = [];
		do{
			ab+=1;
			if(Mods(ab,n)==0){
				if(f)	ar.push(ab);
				else	ar.push(ab-min[ar.length]);
			}
		
		}while(ab<b-1)
		return ar;
	}
	function CariKPK(ar){
		//https://www.ketutrare.com/2019/05/contoh-aplikasi-fpb-dan-kpk-menggunakan-bahasa-c.html
		
		var min = ar[0];
		var max = ar[0];
		for(var i=0;i<ar.length;i++){
			min = Math.min(min,ar[i]);
			max = Math.max(max,ar[i]);
		}
		
		var iter = max;
		var kpk = 1;
		var f = [];
		do {
			iter++;
			ff = 1;
			for(var i=0;i<ar.length;i++){
				f[i] = Mods(iter,ar[i])!=0;
				ff += f[i];
			}
			kpk = iter;
			fakhir = ff==1;
		}while (!fakhir)
		
		return kpk;
	}
	function FaktorDari(n){
		var ar = [];
		var i = 0;
		do{
			i++;
			if(Mods(n,i)==0){
				ar.push(i);
			}
		}while(i<n)
		return ar;
	}
	function FaktorPrimaDari(n){
		var bprime = BilPrimaAntara(0,n+1);
		var ar = [];
		var i = 0;
		do{
			if(Mods(n,bprime[i])==0){
				ar.push(bprime[i]);
			}
			i++;
		}while(i<bprime.length+1)
		return ar;
	}
	function irisan(arrA,arrB){
		var arr = [];
		for(var i=0;i<arrA.length;i++){
			for(var j=0;j<arrB.length;j++){
				if(arrA[i]==arrB[j]){
					arr.push(arrA[i]);
				}
			}
		}
		return arr;
	}
	function gabungan(arrA,arrB){
		var arr = arrA.concat(arrB);
		arr.sort(function(a, b){return a-b});
		var fixArr = [];
		var cek=arr[0];
		fixArr.push(arr[0]);
		for(var i=1;i<arr.length;i++){
			if(arr[i]!==cek){
				fixArr.push(arr[i]);
				cek=arr[i];
			}
		}
		return fixArr;
	}
	function Ar2Deret(ar){
		var suku = ""
		for(var i=0;i<ar.length;i++){
			suku += ar[i];
			if(i<ar.length-2) suku +=", ";
			if(i==ar.length-2){
				if(ar.length==2)	suku +=" dan ";
				else				suku +=", dan ";
			}
			
		}
		if(ar.length==0) return "tidak ada"
		return suku;
	}
	function Ar2DeretTanpaDan(ar){
		var suku = ""
		for(var i=0;i<ar.length;i++){
			suku += ar[i];
			if(i<ar.length-2) suku +=", ";
			if(i==ar.length-2){
				if(ar.length==2)	suku +=" ";
				else				suku +=", ";
			}
			
		}
		if(ar.length==0) return "tidak ada"
		return suku;
	}
	function isPrime(n){
		var ct = 0;
		var i
		for(var i=1;i<=n;i++){
			if(Mods(n,i)==0) ct++;
		}
		return ct==2;
	}
	function BilPrimaAntara(a,b){
		var bil = [];
		var i
		for(var i=a+1;i<b;i++)	if(isPrime(i))	bil.push(i);
		return bil;
	}
	function BilPrimaMulaiDanN(a,n){
		var bil = [];
		var i=0
		var aa = a;
		do{
			aa+=1
			if(isPrime(aa)){
				bil.push(aa);
				i++;
			}
		}while(i<n);
		return bil;
	}
	function TanggalBulan(_tgl,n,thn){
		//var bulanhari = [["Agustus",31],["September",30],["Oktober",31],["November",30],["Oktober",31]];
		var total = _tgl+n;
		var tgl,bln;
		var kabisat = thn%4==0;
		if(total<=31){
			tgl = total;
			bln = " Agustus "+thn;
		}else if(total<=31+30){
			tgl = total-31;
			bln = " September "+thn;
		}else if(total<=31+30+31){
			tgl = total-31-30;
			bln = " Oktober "+thn;
		}else if(total<=31+30+31+30){
			tgl = total-31-30-31;
			bln = " November "+thn;
		}else if(total<=31+30+31+30+31){
			tgl = total-31-30-31-30;
			bln = " Desember "+thn;
		}
		return [tgl,bln]
	}
	function WaktuKPK(jam,menit,n){
		var j = jam;
		var m = menit;
		var mt = Mods(m+n,60);
		var jt = j + Math.floor((m+n-mt)/60);
		jt = TambahNol(jt);
		mt = TambahNol(mt);
		
		return jt+"."+mt
	}
	function TambahNol(n){
		if(n<10) return "0"+n;
		else return n;
	}
	function Konversii2Hari(n){
		var ncvrt = Mods(n,7);
		var arhari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
		var hari = arhari[ncvrt];
		return hari;
	}
	function Konversii2HariTglBlnTahun(day,_tgl,n,thn){
		var ncvrt = Mods(day+1,7);
		var arhari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
		var hari = arhari[ncvrt];
		var ar = TanggalBulan(_tgl,n,thn)
		var arfix = [hari,ar[0],ar[1]];
		return arfix;
	}
	function MyKPKdanFPB1(){
		//ss = "1. Kelipatan bilangan "+ArSisi[0]+" antara lain ...."
		//a.	0, 4, 8, 12, 16, ...
		//b.	1, 4, 8, 12, 16, ...
		//c.	4, 8, 12, 16, 20, ...
		//d.	4, 8, 12, 18, 24, ...
		
		var arAngka = [2,3,4,5,6,7,8,9,11,12,13];
		var arSuku = [5,6,7,8];
		var arPosisiFalse = [0,1,2,3];
		arAngka = RandomMyArray(arAngka);
		arSuku = RandomMyArray(arSuku);
		arPosisiFalse = RandomMyArray(arPosisiFalse);
		
		function Kelipatan(n,u,f,ns){
			var ar = [];
			var nos = ns;//RandomAngkaAtoB(-1,u);
			for(var i=0;i<u;i++){
				
				if(i==nos && !f)	ar.push(2);
				else				ar.push(1);
			}
			
			var suku = ""
			var nn = 0;
			for(var i=0;i<u;i++){
				suku += nn;
				//if(i<u-1) suku +=", ";
				suku +=", ";
				nn+=ar[i]*n;
			}
			suku += "..."
			return suku;
		}
		var siAngka = arAngka[0];
		var siBanyak = arSuku[0];
		var mysuku0 = Kelipatan(siAngka,siBanyak,true,0);
		var mysuku1 = Kelipatan(siAngka,siBanyak,false,arPosisiFalse[0]);
		var mysuku2 = Kelipatan(siAngka,siBanyak,false,arPosisiFalse[1]);
		var mysuku3 = Kelipatan(siAngka,siBanyak-1,false,arPosisiFalse[2]);
		var ArSalah = [mysuku1,mysuku2,mysuku3];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siAngka];
		var arrSalah = [];
		
		var benar = mysuku0;
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
	function MyKPKdanFPB2(){
		var Awal = 10*RandomAngkaAtoB(0,8);
		var Akhir = Awal+20;
		var arKelipatan = [2,3,4,5,6,7];
		arKelipatan = RandomMyArray(arKelipatan);
		var siAngka = arKelipatan[0];
		var siBenar,siSalah1,siSalah2,siSalah3;
		var fcek;
		siBenar = DeretKelipatan(siAngka,Awal,Akhir,true);
		siSalah1 = DeretKelipatan(siAngka,Awal,Akhir,false);
		do{
			siSalah2 = DeretKelipatan(siAngka,Awal,Akhir,false);
			fcek = arraysAreEqual(siSalah1, siSalah2) || arraysAreEqual(siSalah2, siBenar);
		}while(fcek)
		
		do{
			siSalah3 = DeretKelipatan(siAngka,Awal,Akhir,false);
			fcek = arraysAreEqual(siSalah1, siSalah3) || arraysAreEqual(siSalah2, siSalah3) || arraysAreEqual(siBenar, siSalah3);
		}while(fcek)
		
		var ArSalah = [Ar2Deret(siSalah1),Ar2Deret(siSalah2),Ar2Deret(siSalah3)];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siAngka,Awal,Akhir];
		var arrSalah = [];
		
		var benar = Ar2Deret(siBenar);
		arrSalah = ArSalah;
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB3(){
		var Awal = 10*RandomAngkaAtoB(0,8);
		var Akhir = Awal+30;
		var arSekutu = [2,3,4];
		arSekutu = RandomMyArray(arSekutu);
		
		var siA = Math.min(arSekutu[0],arSekutu[1]);
		var siB = Math.max(arSekutu[0],arSekutu[1]);
		var siAngka = siA*siB;
		var siBenar,siSalah1,siSalah2,siSalah3;
		var fcek;
		siBenar = DeretKelipatan(siAngka,Awal,Akhir,true);
		siSalah1 = DeretKelipatan(siAngka,Awal,Akhir,false);
		do{
			siSalah2 = DeretKelipatan(siAngka,Awal,Akhir,false);
			fcek = arraysAreEqual(siSalah1, siSalah2) || arraysAreEqual(siSalah2, siBenar);
		}while(fcek)
		
		do{
			siSalah3 = DeretKelipatan(siAngka,Awal,Akhir,false);
			fcek = arraysAreEqual(siSalah1, siSalah3) || arraysAreEqual(siSalah2, siSalah3) || arraysAreEqual(siBenar, siSalah3);
		}while(fcek)
		
		var ArSalah = [Ar2Deret(siSalah1),Ar2Deret(siSalah2),Ar2Deret(siSalah3)];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,Awal,Akhir];
		var arrSalah = [];
		
		var benar = Ar2Deret(siBenar);
		arrSalah = ArSalah;
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB4(){
		var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var KPK = CariKPK([siA,siB]);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [KPK-siA, KPK-siB, KPK+siA, KPK+siB, siA*siB];
		
		var benar = KPK;
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
	function MyKPKdanFPB5(){
		var siAngka = [2,3,4,5,6,7,8,9,10];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var siC = siAngka[2];
		var KPK = CariKPK([siA,siB,siC]);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC];
		var arrSalah = [];
		
		var arrSalah = [KPK-siA, KPK-siB, KPK-siC, KPK+siA, KPK+siB, KPK+siC, siA*siB*siC];
		
		var benar = KPK;
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
	function MyKPKdanFPB6(){
		var siAngka = [4,6,8,9,10,12,14,15,16,18,20];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var faktor = FaktorDari(siA);
		
		//sortir
		//arr.sort(function(a, b){return a-b});
		var salah1 = faktor.concat([]);
		salah1.push(salah1[salah1.length-2]+1);
		salah1.sort(function(a, b){return a-b});
		
		var salah2 = faktor.concat([]);
		var nA = RandomAngkaAtoB(-1,salah2.length);
		salah2.splice(nA, 1);
		//salah2.push(salah2[salah2.length-1]+1);
		salah2.sort(function(a, b){return a-b});
		
		var salah3 = faktor.concat([]);
		salah3.push(salah3[salah3.length-2]+1);
		salah3.push(salah3[salah3.length-1]+1);
		salah3.sort(function(a, b){return a-b});
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA];
		var arrSalah = [];
		
		var arrSalah = [Ar2Deret(salah1),Ar2Deret(salah2),Ar2Deret(salah3)];
		
		var benar = Ar2Deret(faktor);
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB7(){
		var siAngka = [4,6,8,9,10,12,14,15,16,18,20];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var faktorA = FaktorDari(siA);
		var faktorB = FaktorDari(siB);
		
		var faktor = irisan(faktorA,faktorB);
		var salah1 = gabungan(faktorA,faktorB);
		
		var salah2 = salah1.concat([]);
		var nA = RandomAngkaAtoB(-1,salah2.length);
		salah2.splice(nA, 1);
		salah2.sort(function(a, b){return a-b});
		
		var salah3 = faktor.concat([Math.max(siA,siB)]);
		//salah3.push(salah3[salah3.length-2]+1);
		//salah3.push(salah3[salah3.length-1]+1);
		salah3.sort(function(a, b){return a-b});
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [Ar2Deret(salah1),Ar2Deret(salah2),Ar2Deret(salah3)];
		
		var benar = Ar2Deret(faktor);
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB8(){
		var aa = RandomAngkaAtoB(0,9);
		var siBenar = BilPrimaMulaiDanN(aa,8);
		//console.log(siBenar);
		
		var salah1 = siBenar.concat([]);
		var nA = RandomAngkaAtoB(-1,salah1.length);
		salah1.push(salah1[salah1.length-2]+1);
		salah1.splice(nA, 1);
		salah1.sort(function(a, b){return a-b});
		
		var salah2 = siBenar.concat([]);
		var nA = RandomAngkaAtoB(-1,salah2.length);
		salah2.push(salah2[salah2.length-1]+1);
		salah2.splice(nA, 1);
		salah2.sort(function(a, b){return a-b});
		
		var salah3 = siBenar.concat([]);
		salah3.push(salah3[salah3.length-2]+1);
		salah3.push(salah3[salah3.length-1]+1);
		salah3.sort(function(a, b){return a-b});
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var arrSalah = [Ar2Deret(salah1),Ar2Deret(salah2),Ar2Deret(salah3)];
		
		var benar = Ar2Deret(siBenar);
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB9(){
		var aa = 10*RandomAngkaAtoB(0,3);
		var bb = 20+aa;
		var siBenar = BilPrimaAntara(aa,bb);
		
		var salah1 = siBenar.concat([]);
		var nA = RandomAngkaAtoB(-1,salah1.length);
		salah1.push(salah1[salah1.length-2]+1);
		salah1.splice(nA, 1);
		salah1.sort(function(a, b){return a-b});
		
		var salah2 = siBenar.concat([]);
		var nA = RandomAngkaAtoB(-1,salah2.length);
		salah2.push(salah2[salah2.length-1]+1);
		salah2.splice(nA, 1);
		salah2.sort(function(a, b){return a-b});
		
		var salah3 = siBenar.concat([]);
		salah3.push(salah3[salah3.length-2]+1);
		salah3.push(salah3[salah3.length-1]+1);
		salah3.sort(function(a, b){return a-b});
		
		//console.log(siBenar)
		var arSalah = [salah1,
					   salah2,
					   salah3,
					   [siBenar[0]],
					   [siBenar[1]],
					   [siBenar[2]],
					   [siBenar[0],siBenar[1]],[siBenar[0],siBenar[2]],[siBenar[1],siBenar[2]],
					   [siBenar[0],siBenar[2],siBenar[3]]
					   ]
		arSalah = RandomMyArray(arSalah);
		
		var ss1 = [siBenar[0]];
		var ss2 = [siBenar[1]];
		var ss2 = [siBenar[1]];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [aa,bb];
		var arrSalah = [];
		
		var arrSalah = [Ar2Deret(arSalah[0]),Ar2Deret(arSalah[1]),Ar2Deret(arSalah[2])];
		
		var benar = Ar2Deret(siBenar);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB10(){
		var siAngka = [
						4, 8, 16, 32,
						9, 27, 81,
						25, 125, 625,
						49, 343,

						6, 12, 18, 24, 54,
						10, 20, 50, 100,
						14, 28, 98, 196,
						15, 45, 75, 225,
						21, 63, 147, 441,
						35, 175, 245,
						
						30, 60, 90, 150,
						42, 84, 126, 294,
						105, 315, 525, 735
						]
		
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siBenar = FaktorPrimaDari(siA);
		//console.log("siBenar ",siBenar)
		
		arSalah = [[2],[3],[5],[7], [2,3], [2,5], [2,7],[3,5],[3,7],[5,7],	[2,3,5], [2,3,7], [3,5,7]];
		arSalah = RandomMyArray(arSalah);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA];
		var arrSalah = [];
		
		var arrSalah = [Ar2Deret(arSalah[0]),Ar2Deret(arSalah[1]),Ar2Deret(arSalah[2]),Ar2Deret(arSalah[3]),Ar2Deret(arSalah[4]),Ar2Deret(arSalah[5])];
		
		var benar = Ar2Deret(siBenar);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB11(){
		//var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var siAngka = [[4, 8, 16, 32, 6, 12, 18, 24, 54, 10, 20, 50, 100, 14, 28, 98, 196, 30, 60, 90, 150, 42, 84, 126, 294],
					   [9, 27, 81, 15, 45, 75, 225, 21, 63, 147, 441, 30, 60, 90, 150, 42, 84, 126, 294, 105, 315, 525, 735],
					   [25, 125, 625, 10, 20, 50, 100, 15, 45, 75, 225, 35, 175, 245, 30, 60, 90, 150, 105, 315, 525, 735],
					   [49, 343, 35, 175, 245, 21, 63, 147, 441, 14, 28, 98, 196, 14, 28, 98, 196, 42, 84, 126, 294, 105, 315, 525, 735]
						]
		siAngka = RandomMyArray(siAngka);
		do{
			siAngka[0] = RandomMyArray(siAngka[0]);
			var siA = siAngka[0][0];
			var siB = siAngka[0][1];
			var FPB = CariFPB([siA,siB]);
		}while(FPB==1)
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [FPB-1, FPB-2, FPB-3, FPB-4, FPB-5, FPB-6, FPB-7, FPB-8, FPB-9, FPB-10, FPB+1, FPB+2, FPB+3, FPB+4, FPB+5, FPB+6, FPB+7, FPB+8, FPB+9, FPB+10];
		
		var benar = FPB;
		
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
	function MyKPKdanFPB12(){
		//var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var siAngka = [[4, 8, 16, 32, 6, 12, 18, 24, 54, 10, 20, 50, 100, 14, 28, 98, 196, 30, 60, 90, 150, 42, 84, 126, 294],
					   [9, 27, 81, 15, 45, 75, 225, 21, 63, 147, 441, 30, 60, 90, 150, 42, 84, 126, 294, 105, 315, 525, 735],
					   [25, 125, 625, 10, 20, 50, 100, 15, 45, 75, 225, 35, 175, 245, 30, 60, 90, 150, 105, 315, 525, 735],
					   [49, 343, 35, 175, 245, 21, 63, 147, 441, 14, 28, 98, 196, 14, 28, 98, 196, 42, 84, 126, 294, 105, 315, 525, 735]
						]
		siAngka = RandomMyArray(siAngka);
		do{
			var siA = siAngka[0][0];
			var siB = siAngka[0][1];
			var siC = siAngka[0][2];
			var FPB = CariFPB([siA,siB,siC]);
		}while(FPB==1)
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC];
		var arrSalah = [];
		
		var arrSalah = [FPB-1, FPB-2, FPB-3, FPB-4, FPB-5, FPB-6, FPB-7, FPB-8, FPB-9, FPB-10, FPB+1, FPB+2, FPB+3, FPB+4, FPB+5, FPB+6, FPB+7, FPB+8, FPB+9, FPB+10];
		
		var benar = FPB;
		
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
	function MyKPKdanFPB13(){
		//var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var siAngka = [[4, 8, 16, 32, 6, 12, 18, 24, 54, 10, 20, 50, 100, 14, 28, 98, 196, 30, 60, 90, 150, 42, 84, 126, 294],
					   [9, 27, 81, 15, 45, 75, 225, 21, 63, 147, 441, 30, 60, 90, 150, 42, 84, 126, 294, 105, 315, 525, 735],
					   [25, 125, 625, 10, 20, 50, 100, 15, 45, 75, 225, 35, 175, 245, 30, 60, 90, 150, 105, 315, 525, 735],
					   [49, 343, 35, 175, 245, 21, 63, 147, 441, 14, 28, 98, 196, 14, 28, 98, 196, 42, 84, 126, 294, 105, 315, 525, 735]
						]
		siAngka = RandomMyArray(siAngka);
		siAngka[0] = RandomMyArray(siAngka[0]);
		var siA = siAngka[0][0];
		var siB = siAngka[0][1];
		var FPB = CariFPB([siA,siB]);
		var KPK = CariKPK([siA,siB]);
		
		var KPKFPB = KPK+FPB;
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [KPKFPB-1, KPKFPB-2, KPKFPB-3, KPKFPB-4, KPKFPB-5, KPKFPB-6, KPKFPB-7, KPKFPB-8, KPKFPB-9, KPKFPB-10, KPKFPB+1, KPKFPB+2, KPKFPB+3, KPKFPB+4, KPKFPB+5, KPKFPB+6, KPKFPB+7, KPKFPB+8, KPKFPB+9, KPKFPB+10];
		
		var benar = KPKFPB;
		
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
	function MyKPKdanFPB14(){
		var siAngka = [2,3,4,5,6,7,8,9,10];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var KPK = CariKPK([siA,siB]);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [KPK-1, KPK-2, KPK-3, KPK-4, KPK-5, KPK-6, KPK-7, KPK-8, KPK-9, KPK-10, KPK+1, KPK+2, KPK+3, KPK+4, KPK+5, KPK+6, KPK+7, KPK+8, KPK+9, KPK+10];
		
		var benar = KPK;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=1 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyKPKdanFPB15(){
		const d = new Date();
		let year = d.getFullYear();
		
		var siAngka = [2,3,4,5,6,7,8,9,10];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var KPK = CariKPK([siA,siB]);
		
		var tgl = RandomAngkaAtoB(0,31);
		var hasil = TanggalBulan(tgl,KPK,year);
		var salah1 = TanggalBulan(tgl-3,KPK,year);
		var salah2 = TanggalBulan(tgl-2,KPK,year);
		var salah3 = TanggalBulan(tgl-1,KPK,year);
		var salah4 = TanggalBulan(tgl+1,KPK,year);
		var salah5 = TanggalBulan(tgl+2,KPK,year);
		var salah6 = TanggalBulan(tgl+3,KPK,year);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,tgl,year];
		var arrSalah = [];
		
		var arrSalah = [salah1[0]+salah1[1],salah2[0]+salah2[1],salah3[0]+salah3[1],salah4[0]+salah4[1],salah5[0]+salah5[1],salah6[0]+salah6[1]];
		
		var benar = hasil[0] + hasil[1];
		
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
	function MyKPKdanFPB16(){
		const d = new Date();
		let year = d.getFullYear();
		
		var siAngka = [2,3,4,5,6,7,8,9,10];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var siC = siAngka[2];
		var KPK = CariKPK([siA,siB,siC]);
		
		var jam = RandomAngkaAtoB(0,12);
		var menit = RandomAngkaAtoB(0,50);
		var hasil = WaktuKPK(jam,menit,KPK);
		var salah1 = WaktuKPK(jam,menit-3,KPK);
		var salah2 = WaktuKPK(jam,menit-2,KPK);
		var salah3 = WaktuKPK(jam,menit-1,KPK);
		var salah4 = WaktuKPK(jam,menit+1,KPK);
		var salah5 = WaktuKPK(jam,menit+2,KPK);
		var salah6 = WaktuKPK(jam,menit+3,KPK);
		var salah7 = WaktuKPK(jam-1,menit,KPK);
		var salah8 = WaktuKPK(jam+1,menit,KPK);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC,TambahNol(jam)+"."+TambahNol(menit)];
		var arrSalah = [];
		
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		
		var benar = hasil;
		
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
	function MyKPKdanFPB17(){
		const d = new Date();
		let year = d.getFullYear();
		
		var siAngka = [2,3,4,5,6,7,8,9,10];
		siAngka = RandomMyArray(siAngka);
		var siA = siAngka[0];
		var siB = siAngka[1];
		var siC = siAngka[2];
		var KPK = CariKPK([siA,siB,siC]);
		
		var nhari = RandomAngkaAtoB(0,7);
		var hasil = Konversii2Hari(nhari+KPK);
		var salah1 = Konversii2Hari(nhari+KPK-1);
		var salah2 = Konversii2Hari(nhari+KPK-2);
		var salah3 = Konversii2Hari(nhari+KPK-3);
		var salah4 = Konversii2Hari(nhari+KPK+1);
		var salah5 = Konversii2Hari(nhari+KPK+2);
		var salah6 = Konversii2Hari(nhari+KPK+3);
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC,Konversii2Hari(nhari)];
		var arrSalah = [];
		
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
		var benar = hasil;
		
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
	function MyKPKdanFPB18(){
		const d = new Date();
		let year = d.getFullYear();
		let day = d.getDay();
		let date = d.getDate();
		
		var siAngka = [2,3,4,5,6,7,8];
		do{
			siAngka = RandomMyArray(siAngka);
			var siA = siAngka[0];
			var siB = siAngka[1];
			var siC = siAngka[2];
			var KPK = CariKPK([siA,siB,siC]);
		}while(KPK>120)
		
		var nhari = day;
		var tgl = date;
		
		
		var hasil = Konversii2HariTglBlnTahun(nhari+KPK,tgl,KPK,year);
		var salah1 = Konversii2HariTglBlnTahun(nhari+KPK-3,tgl-3,KPK,year);
		var salah2 = Konversii2HariTglBlnTahun(nhari+KPK-2,tgl-2,KPK,year);
		var salah3 = Konversii2HariTglBlnTahun(nhari+KPK-1,tgl-1,KPK,year);
		var salah4 = Konversii2HariTglBlnTahun(nhari+KPK+1,tgl+1,KPK,year);
		var salah5 = Konversii2HariTglBlnTahun(nhari+KPK+2,tgl+2,KPK,year);
		var salah6 = Konversii2HariTglBlnTahun(nhari+KPK+3,tgl+3,KPK,year);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC,Konversii2Hari(day),tgl,year];
		var arrSalah = [];
		
		var arrSalah = [salah1[0]+", "+salah1[1]+" "+salah1[2],
						salah2[0]+", "+salah2[1]+" "+salah2[2],
						salah3[0]+", "+salah3[1]+" "+salah3[2],
						salah4[0]+", "+salah4[1]+" "+salah4[2],
						salah5[0]+", "+salah5[1]+" "+salah5[2],
						salah6[0]+", "+salah6[1]+" "+salah6[2]
						];
		
		var benar = hasil[0]+", "+hasil[1]+" "+hasil[2];
		
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
	function MyKPKdanFPB19(){
		//var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var siAngka = [[4, 8, 16, 32, 6, 12, 18, 24, 54, 10, 20, 50, 100, 14, 28, 98, 196, 30, 60, 90, 150, 42, 84, 126, 294],
					   [9, 27, 81, 15, 45, 75, 225, 21, 63, 147, 441, 30, 60, 90, 150, 42, 84, 126, 294, 105, 315, 525, 735],
					   [25, 125, 625, 10, 20, 50, 100, 15, 45, 75, 225, 35, 175, 245, 30, 60, 90, 150, 105, 315, 525, 735],
					   [49, 343, 35, 175, 245, 21, 63, 147, 441, 14, 28, 98, 196, 14, 28, 98, 196, 42, 84, 126, 294, 105, 315, 525, 735]
						]
		siAngka = RandomMyArray(siAngka);
		do{
			siAngka[0] = RandomMyArray(siAngka[0]);
			var siA = siAngka[0][0];
			var siB = siAngka[0][1];
			var FPB = CariFPB([siA,siB]);
		}while(FPB==1 || FPB==siA || FPB==siB);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB];
		var arrSalah = [];
		
		var arrSalah = [FPB-1, FPB-2, FPB-3, FPB-4, FPB-5, FPB-6, FPB-7, FPB-8, FPB-9, FPB-10, FPB+1, FPB+2, FPB+3, FPB+4, FPB+5, FPB+6, FPB+7, FPB+8, FPB+9, FPB+10];
		
		var benar = FPB;
		
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
	function MyKPKdanFPB20(){
		//var siAngka = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var siAngka = [[4, 8, 16, 32, 6, 12, 18, 24, 54, 10, 20, 50, 100, 14, 28, 98, 196, 30, 60, 90, 150, 42, 84, 126, 294],
					   [9, 27, 81, 15, 45, 75, 225, 21, 63, 147, 441, 30, 60, 90, 150, 42, 84, 126, 294, 105, 315, 525, 735],
					   [25, 125, 625, 10, 20, 50, 100, 15, 45, 75, 225, 35, 175, 245, 30, 60, 90, 150, 105, 315, 525, 735],
					   [49, 343, 35, 175, 245, 21, 63, 147, 441, 14, 28, 98, 196, 14, 28, 98, 196, 42, 84, 126, 294, 105, 315, 525, 735]
						]
		siAngka = RandomMyArray(siAngka);
		do{
			siAngka[0] = RandomMyArray(siAngka[0]);
			var siA = siAngka[0][0];
			var siB = siAngka[0][1];
			var siC = siAngka[0][2];
			var FPB = CariFPB([siA,siB,siC]);
		}while(FPB==1 || FPB==siA || FPB==siB || FPB==siC);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [siA,siB,siC];
		var arrSalah = [];
		
		var arrSalah = [FPB-1, FPB-2, FPB-3, FPB-4, FPB-5, FPB-6, FPB-7, FPB-8, FPB-9, FPB-10, FPB+1, FPB+2, FPB+3, FPB+4, FPB+5, FPB+6, FPB+7, FPB+8, FPB+9, FPB+10];
		
		var benar = FPB;
		
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
	
	
	function GetSoal1(){
		const Aljabar = MyKPKdanFPB1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Kelipatan bilangan "+ArSisi[0]+" antara lain ....";
		
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
	function GetSoal2(){
		const Aljabar = MyKPKdanFPB2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Bilangan kelipatan "+ArSisi[0]+" yang lebih dari "+ArSisi[1]+" dan kurang dari "+ArSisi[2]+" adalah ...."
		
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
	function GetSoal3(){
		const Aljabar = MyKPKdanFPB3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Kelipatan persekutuan dari bilangan "+ArSisi[0]+" dan "+ArSisi[1]+" antara "+ArSisi[2]+" sampai "+ArSisi[3]+" adalah ....";
		
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
	function GetSoal4(){
		const Aljabar = MyKPKdanFPB4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "KPK dari bilangan "+ArSisi[0]+" dan "+ArSisi[1]+" adalah ....";
		
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
	function GetSoal5(){
		const Aljabar = MyKPKdanFPB5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "KPK dari bilangan "+ArSisi[0]+", "+ArSisi[1]+", dan "+ArSisi[2]+" adalah ....";
		
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
	function GetSoal6(){
		const Aljabar = MyKPKdanFPB6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Faktor dari bilangan "+ArSisi[0]+" adalah ....";
		
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
	function GetSoal7(){
		const Aljabar = MyKPKdanFPB7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Faktor persekutuan dari bilangan "+ArSisi[0]+" dan "+ArSisi[1]+" adalah ....";
		
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
	function GetSoal8(){
		const Aljabar = MyKPKdanFPB8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Di bawah ini yang termasuk kelompok bilangan prima adalah ....";
		
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
	function GetSoal9(){
		const Aljabar = MyKPKdanFPB9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berikut ini yang termasuk bilangan prima antara "+ArSisi[0]+" sampai "+ArSisi[1]+" adalah ....";
		
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
		const Aljabar = MyKPKdanFPB10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Faktor prima dari bilangan "+ArSisi[0]+" adalah ....";
		
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
	function GetSoal11(){
		const Aljabar = MyKPKdanFPB11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Faktor persekutuan terbesar bilangan "+ArSisi[0]+" dan "+ArSisi[1]+" adalah ....";
		
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
		const Aljabar = MyKPKdanFPB12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Faktor persekutuan terbesar (FPB) dari bilangan "+ArSisi[0]+", "+ArSisi[1]+", dan "+ArSisi[2]+" adalah ....";
		
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
	function GetSoal13(){
		const Aljabar = MyKPKdanFPB13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Jumlah antara KPK dari FPB dari bilangan "+ArSisi[0]+" dan "+ArSisi[1]+" adalah ....";
		
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
	function GetSoal14(){
		const Aljabar = MyKPKdanFPB14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" les renang setiap "+ArSisi[0]+" hari sekali, sedangkan "+Nama[1]+" les berenang setiap "+ArSisi[1]+" hari sekali. Maka "+Nama[0]+" dan "+Nama[1]+" les renang bersama-sama setiap ... hari sekali.";
		
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
	function GetSoal15(){
		const Aljabar = MyKPKdanFPB15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" les Matematika setiap "+ArSisi[0]+" hari sekali, sedangkan "+Nama[1]+" les Matematika setiap "+ArSisi[1]+" hari sekali. Jika mereka les Matematika bersamaan pada tanggal "+ArSisi[2]+" Agustus "+ArSisi[3]+", maka maka mereka akan les Matematika bersamaan lagi pada tanggal ....";
		
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
	function GetSoal16(){
		const Aljabar = MyKPKdanFPB16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = "Ada tiga buah lampu masing-masing berwarna merah, kuning, dan hijau. Lampu merah padam setiap "+ArSisi[0]+" detik sekali, lampu kuning setiap "+ArSisi[1]+" detik, dan lampu hijau padam setiap "+ArSisi[2]+" detik. Jika ketiga lampu tersebut padam bersamaan pada pukul "+ArSisi[3]+", maka ketiga lampu tersebut akan padam bersama pada pukul ....";
		
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
	function GetSoal17(){
		const Aljabar = MyKPKdanFPB17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" les piano setiap "+ArSisi[0]+" hari sekali. "+Nama[1]+" les piano "+ArSisi[1]+" hari sekali, dan "+Nama[2]+" setiap "+ArSisi[2]+" hari sekali. Jika mereka les piano bersamaan pada hari "+ArSisi[3]+". Maka mereka akan les piano bersamaan lagi pada hari ....";
		
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
		const Aljabar = MyKPKdanFPB18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokohU();
		var ss
		ss = Nama[0]+" les menari "+ArSisi[0]+" hari sekali. "+Nama[1]+" les menari setiap "+ArSisi[1]+" hari sekali, dan "+Nama[2]+" les menari setiap "+ArSisi[2]+" hari sekali. Jika les menari hari "+ArSisi[3]+", "+ArSisi[4]+" Agustus "+ArSisi[5]+". Maka mereka akan les menari bersamaan lagi pada ....";
		
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
		const Aljabar = MyKPKdanFPB19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokohU();
		var ss
		ss = "Untuk lauk makan malam, Bu "+Nama[0]+" menggoreng "+ArSisi[0]+" tempe dan "+ArSisi[1]+" tahu. Setelah itu tempe dan tahu goreng diletakkan di atas piring dengan jumlah yang sama. Maka Bu "+Nama[0]+" harus menyediakan piring sebanyak ... buah.";
		
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
		const Aljabar = MyKPKdanFPB20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" membuat rangkaian bunga dari "+ArSisi[0]+" tangkai mawar merah, "+ArSisi[1]+" tangkai mawar putih, dan "+ArSisi[2]+" tangkai mawar merah muda. Setiap rangkaian bunga terdiri dari bunga mawar merah, mawar putih, dan mawar merah muda dengan jumlah yang sama banyak. Maka rangkaian bunga paling banyak yang dapat dibuat "+Nama[0]+" adalah ... buah.";
		
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
	
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 2 \u{2192} KPK dan FPB </p>";
	
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

function Print42(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
		
		min = ar[0];
		max = ar[0];
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
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+","+gg[1];
		else 				return ff
	}
	function TambahDesimal(arr){
		var sum = 0;
		for(var i=0;i<arr.length;i++){
			sum+=arr[i]*10**6;
		}
		sum = sum/10**6;
		return sum;
	}
	function Bulat(n){
		var strff = ""+Number(n);
		var gg = strff.split(".");
		var hh = strff.split("");
		var glen = gg[1].length;
		var nlen = n.length-1;
		if(gg[1]==""){	
			glen = 0;
			nlen = n.length;
		}
		var fix = Number(n)*10**glen;
		if(fix.len>nlen){
			fix = Math.round(fix);
		}
		return fix
	}
	function BagiKali(a,n){
		var strff = ""+Number(a);
		var gg = strff.split(".");
		var glen;
		if(gg[1]=="")	glen = 0;
		else			glen = gg[1].length;
		var m = glen - n;
		if(m<0) m = 0;
		var num = (Number(a)*10**n).toFixed(m);
		return num;
	}
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function AngkaKeNama(ar){
		var depan,tengah,akhir
		var mm,nn,mmcvtr,nncvrt
		var belas = ["sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];
		var angka = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"];
		
		// belakang
		if(ar[0]==1){
			nn = ar[0]*10+ar[1];
			nncvrt = nn-10;
			belakang = belas[nncvrt];
		}else{
			mm = ar[0];
			nn = ar[1];
			mmcvrt = mm;
			nncvrt = nn;
			belakang = angka[mmcvrt]+" puluh "+angka[nncvrt];
			if(nn==0)	belakang = angka[mmcvrt]+" puluh";
			if(mm==0)	belakang = angka[nncvrt];
			if(mm==0 && nn==0) belakang="";
		}
		var bFix = belakang;
		return bFix;
	}
	function AngkaKeNamaSatuan(n){
		var angka = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"];
		var bFix = angka[n];
		return bFix;
	}
	function SplitAngkaPuluhan(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		var i;
		for (var i=0; i<len; i++){
			gg.push(1*strff.substr(i,1));
		}
		
		return gg;
	}
	function UrutAkeZ(arr){
		arr.sort(function(a, b){return a-b});
		return arr;
	}
	function UrutZkeA(arr){
		arr.sort(function(a, b){return b-a});
		return arr;
	}
	function MyBilanganPecahan1(){
		var ArSalah = ["Pembilang","Penyebut","Pembagi","Pemfaktor"];
		
		var arSoal = [["di atas","Pembilang"],["di bawah","Penyebut"]];
		arSoal = RandomMyArray(arSoal);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [arSoal[0][0]];
		var arrSalah = [];
		
		var benar = arSoal[0][1];
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
	function MyBilanganPecahan2(){
		var arData = [[2,"Dua"],[3,"Tiga"],[4,"Empat"],[5,"Lima"],[6,"Enam"],[7,"Tujuh"],[8,"Delapan"],[9,"Sembilan"]];
		arData = RandomMyArray(arData);
		var FixAngka = arData[0][0];
		var FixNama = arData[0][1];
		
		var arIn = [];
		arIn[0]=1;
		arIn[1]=arData[0][0];
		
		var ArSisi = [arIn];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		arrSalah = ["Satu "+FixNama,FixNama+" Satu",FixNama+" per Satu"];
		
		var cbenar = "Satu per "+FixNama;
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
	function MyBilanganPecahan3(){
		var arData = [[2,"Dua"],[3,"Tiga"],[4,"Empat"],[5,"Lima"],[6,"Enam"],[7,"Tujuh"],[8,"Delapan"],[9,"Sembilan"]];
		arData = RandomMyArray(arData);
		var FixAngka = arData[0][0];
		var FixNama = arData[0][1];
		
		var arIn = [];
		do{
			arIn[0]=10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9);
			arIn[1]=10*RandomAngkaAtoB(0,9)+RandomAngkaAtoB(0,9);
		}while(arIn[0]==arIn[1]);
		var arOut1 = SplitAngkaPuluhan(arIn[0]);
		var arOut2 = SplitAngkaPuluhan(arIn[1]);
		var FixNama1 = AngkaKeNama(SplitAngkaPuluhan(arIn[0]));
		var FixNama2 = AngkaKeNama(SplitAngkaPuluhan(arIn[1]));
		
		var ArSisi = [arIn];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		arrSalah = ["seper "+FixNama1+" per "+FixNama2,"seper "+FixNama2+" per "+FixNama1,FixNama2+" per "+FixNama1];
		
		var cbenar = FixNama1+" per "+FixNama2;
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
	function MyBilanganPecahan4(){
		var arIn = [];
		do{
			arIn[0]=RandomAngkaAtoB(1,8);
			arIn[1]=RandomAngkaAtoB(1,8);
		}while(arIn[0]==arIn[1]);
		
		var csoal = [AngkaKeNamaSatuan(arIn[0]),AngkaKeNamaSatuan(arIn[1])];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",arIn[0],arIn[1]];
		var csalah1 = ["",arIn[0],arIn[1]];
		var csalah2 = ["",arIn[1],arIn[0]];
		var csalah3 = ["",1,10*arIn[0]+arIn[1]];
		var csalah4 = ["",10*arIn[0]+arIn[1],1];
		arrSalah = [csalah1,csalah2,csalah3,csalah4];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan5(){
		var bar = RandomAngkaAtoB(0,10);
		var kol = RandomAngkaAtoB(3,7);
		var barkol = bar*kol;
		do{
			var atas = RandomAngkaAtoB(0,barkol);
			var bawah = barkol;
		}while(bawah-atas==atas);
		
		var arIn = [];
		do{
			arIn[0]=RandomAngkaAtoB(1,8);
			arIn[1]=RandomAngkaAtoB(1,8);
		}while(arIn[0]==arIn[1]);
		
		var csoal = [bar,kol,atas,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		
		var cbenar = ["",atas,bawah];
		var csalah1 = ["",1,atas];
		var csalah2 = ["",1,bawah];
		var csalah3 = ["",bawah,atas];
		var csalah4 = ["",atas,1];
		var csalah5 = ["",bawah,1];
		var csalah6 = ["",1,atas+bawah];
		var csalah7 = ["",1,bawah-atas];
		var csalah8 = ["",atas+bawah,1];
		var csalah9 = ["",bawah-atas,1];
		var csalah10 = ["",bawah-atas,bawah];
		var csalah11 = ["",bawah-atas,atas];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9,csalah10,csalah11];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan6(){
		var bar = RandomAngkaAtoB(0,10);
		var kol = RandomAngkaAtoB(3,7);
		var barkol = bar*kol;
		do{
			var atas = RandomAngkaAtoB(0,barkol);
			var bawah = barkol;
		}while(bawah-atas==atas);
		
		var arIn = [];
		do{
			arIn[0]=RandomAngkaAtoB(1,8);
			arIn[1]=RandomAngkaAtoB(1,8);
		}while(arIn[0]==arIn[1]);
		
		var csoal = [bar,kol,atas,bawah];
		
		var strAtas,strBawah;
		if(atas>9)	strAtas = AngkaKeNama(SplitAngkaPuluhan(atas));
		else 		strAtas = AngkaKeNamaSatuan(atas);
		if(bawah>9)	strBawah = AngkaKeNama(SplitAngkaPuluhan(bawah));
		else 		strBawah = AngkaKeNamaSatuan(bawah);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		
		var cbenar = ["",atas,bawah];
		var csalah1 = ["",1,atas];
		var csalah2 = ["",1,bawah];
		var csalah3 = ["",bawah,atas];
		var csalah4 = ["",atas,1];
		var csalah5 = ["",bawah,1];
		var csalah6 = ["",1,atas+bawah];
		var csalah7 = ["",1,bawah-atas];
		var csalah8 = ["",atas+bawah,1];
		var csalah9 = ["",bawah-atas,1];
		var csalah10 = ["",bawah-atas,bawah];
		var csalah11 = ["",bawah-atas,atas];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8,csalah9,csalah10,csalah11];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
		}while(ff1);
		
		var gabungJaw = [cbenar,arrSalah[0],arrSalah[1],arrSalah[2]];
		gabungJaw = RandomMyArray(gabungJaw);
		var noBenar = NoJawabanBenar(gabungJaw, cbenar);
		var ABCD = GetABCD(noBenar);
		//console.log("ABCD = "+ABCD);
		
		var ArSisi = [ABCD,csoal,gabungJaw[0],gabungJaw[1],gabungJaw[2],gabungJaw[3],strAtas,strBawah];
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		return fix;
	}
	function MyBilanganPecahan7(){
		var bawah = RandomAngkaAtoB(5,95);
		var	a1 = RandomAngkaAtoB(1,bawah-5);
		var	b1 = a1+1;
		var	c1 = a1+2;
		var	d1 = a1+3;
		
		var csoal = [a1,c1,d1,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		
		var cbenar = ["",b1,bawah];
		var csalah1 = ["",1,bawah];
		var csalah2 = ["",bawah,1];
		var csalah3 = ["",b1,1];
		var csalah4 = ["",1,b1];
		var csalah5 = ["",b1+bawah,1];
		var csalah6 = ["",b1+bawah,bawah];
		var csalah7 = ["",1,b1+bawah];
		var csalah8 = ["",bawah,b1+bawah];
		arrSalah = [csalah1,csalah2,csalah3,csalah4,csalah5,csalah6,csalah7,csalah8];
		arrSalah = RandomMyArray(arrSalah);
		
		
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan8(){
		do{
			var bawah1 = RandomAngkaAtoB(5,95);
			var bawah2 = RandomAngkaAtoB(5,95);
		}while(bawah1==bawah2)
		var	atas1 = 1;
		var	atas2 = 1;
		
		var kali1 = atas1*bawah2;
		var kali2 = atas2*bawah1;
		
		var model = RandomAngkaAtoB(-1,3);
		if(model==2){
			atas2=atas1;
			bawah2=bawah1;
		}else if(model==0){
			if(kali1<kali2){
				var a = atas1;	atas1 = atas2;		atas2 = a;
				var b = bawah1;	bawah1 = bawah2;	bawah2 = b;
			}else if(kali1==kali2){
				atas1++;
			}
		}else{
			if(kali1>kali2){
				var a = atas1;	atas1 = atas2;		atas2 = a;
				var b = bawah1;	bawah1 = bawah2;	bawah2 = b;
			}else if(kali1==kali2){
				atas2++;
			}
		}
		
		var ArSisi = [atas1,bawah1,atas2,bawah2];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var arrSalah = [];
		var FPB
		var arrBenar = [">","<","=","\u{00B1}"];

		var benar = arrBenar[model];
		arrSalah = [">","<","=","\u{00B1}"];
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
	function MyBilanganPecahan9(){
		var bawah = RandomAngkaAtoB(5,95);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		var b1 = arAngka[1];
		var c1 = arAngka[2];
		var d1 = arAngka[3];
		
		var arB = [arAngka[0],arAngka[1],arAngka[2],arAngka[3]];
		arB = UrutAkeZ(arB);
		
		var arrSalah = [];
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				for(var k=0;k<4;k++){
					for(var l=0;l<4;l++){
						var ff = (i==j || i==k || i==l || j==k || j==l || k==l);
						if(!ff){
							arrSalah.push([arAngka[i],arAngka[j],arAngka[k],arAngka[l],bawah])
						}
					}
				}
			}
		}
		
		var csoal = [a1,b1,c1,d1,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [arB[0],arB[1],arB[2],arB[3],bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan10(){
		var bawah = RandomAngkaAtoB(4,10);
		var arAngka = [];
		for(var i=1;i<bawah;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var kali = RandomAngkaAtoB(1,24);
		var a1 = arAngka[0]*kali;
		var b1 = bawah*kali;
		
		var arrSalah = [];
		for(var i=0;i<arAngka.length;i++){
			arrSalah.push([arAngka[i],bawah]);
		}
		
		var csoal = [a1,b1];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [arAngka[0],bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan11(){
		var bawah = RandomAngkaAtoB(4,10);
		var arAngka = [];
		for(var i=1;i<bawah;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var FPB = CariFPB([arAngka[0],bawah]);
		var a1 = arAngka[0]/FPB;
		var b1 = bawah/FPB;
		
		var arrBenar = [];
		for(var i=0;i<arAngka.length;i++){
			arrBenar.push([a1*(i+2),b1*(i+3)]);
			arrBenar.push([a1*(i+3),b1*(i+2)]);
		}
		arrBenar = RandomMyArray(arrBenar);
		
		var arrSalah = [];
		for(var i=0;i<arAngka.length;i++){
			arrSalah.push([a1*(i+2),b1*(i+2)]);
		}
		
		var csoal = [a1,b1];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var cbenar = arrBenar[0];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan12(){
		var bawah = RandomAngkaAtoB(5,20);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		var b1 = arAngka[1];
		var c1 = arAngka[2];
		var d1 = arAngka[3];
		var Nama = NamaTokoh();
		var FPB1 = CariFPB([a1,bawah]);
		var FPB2 = CariFPB([b1,bawah]);
		var FPB3 = CariFPB([c1,bawah]);
		
		var csoal = [a1/FPB1,bawah/FPB1,b1/FPB2,bawah/FPB2,c1/FPB3,bawah/FPB3,Nama[0],Nama[1],Nama[2]];
		
		var banding1,banding2,banding3;
		var arBenar = [];
		var arrSalah = [];
		if(a1>b1){
			arBenar.push("Pita "+Nama[0]+" lebih panjang dari pita "+Nama[1]+"");
			arrSalah.push("Pita "+Nama[1]+" lebih panjang dari pita "+Nama[0]+"");
		}else{
			arBenar.push("Pita "+Nama[1]+" lebih panjang dari pita "+Nama[0]+"");
			arrSalah.push("Pita "+Nama[0]+" lebih panjang dari pita "+Nama[1]+"");
		}
		if(a1>c1){
			arBenar.push("Pita "+Nama[0]+" lebih panjang dari pita "+Nama[2]+"");
			arrSalah.push("Pita "+Nama[2]+" lebih panjang dari pita "+Nama[0]+"");
		}else{
			arBenar.push("Pita "+Nama[2]+" lebih panjang dari pita "+Nama[0]+"");
			arrSalah.push("Pita "+Nama[0]+" lebih panjang dari pita "+Nama[2]+"");
		}
		if(b1>c1){
			arBenar.push("Pita "+Nama[1]+" lebih panjang dari pita "+Nama[2]+"");
			arrSalah.push("Pita "+Nama[2]+" lebih panjang dari pita "+Nama[1]+"");
		}else{
			arBenar.push("Pita "+Nama[2]+" lebih panjang dari pita "+Nama[1]+"");
			arrSalah.push("Pita "+Nama[1]+" lebih panjang dari pita "+Nama[2]+"");
		}
		
		if(a1>b1 && a1>c1){
			arBenar.push("Pita "+Nama[0]+" paling panjang");
			arrSalah.push("Pita "+Nama[1]+" paling panjang");
			arrSalah.push("Pita "+Nama[2]+" paling panjang");
		}else if(b1>a1 && b1>c1){
			arBenar.push("Pita "+Nama[1]+" paling panjang");
			arrSalah.push("Pita "+Nama[0]+" paling panjang");
			arrSalah.push("Pita "+Nama[2]+" paling panjang");
		}else{
			arBenar.push("Pita "+Nama[2]+" paling panjang");
			arrSalah.push("Pita "+Nama[0]+" paling panjang");
			arrSalah.push("Pita "+Nama[1]+" paling panjang");
		}
		if(a1<b1 && a1<c1){
			arBenar.push("Pita "+Nama[0]+" paling pendek");
			arrSalah.push("Pita "+Nama[1]+" paling pendek");
			arrSalah.push("Pita "+Nama[2]+" paling pendek");
		}else if(b1<a1 && b1<c1){
			arBenar.push("Pita "+Nama[1]+" paling pendek");
			arrSalah.push("Pita "+Nama[0]+" paling pendek");
			arrSalah.push("Pita "+Nama[2]+" paling pendek");
		}else{
			arBenar.push("Pita "+Nama[2]+" paling pendek");
			arrSalah.push("Pita "+Nama[0]+" paling pendek");
			arrSalah.push("Pita "+Nama[1]+" paling pendek");
		}
		
		arBenar = RandomMyArray(arBenar);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = arBenar[0];
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
	function MyBilanganPecahan13(){
		var bawah = RandomAngkaAtoB(5,95);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		var b1 = arAngka[1];
		var c1 = arAngka[2];
		var total = a1+b1+c1;

		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			arrSalah.push([total+i,bawah]);
		}
		
		var csoal = [a1,b1,c1,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [total,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan14(){
		var bawah = 2*RandomAngkaAtoB(2,40);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		var FPB;
		do{
			arAngka = RandomMyArray(arAngka);
			var a1 = arAngka[0];
			var b1 = arAngka[1];
			var total = a1+b1;
			FPB = CariFPB([b1,bawah]);
			var strb1 = b1/FPB;
			var strbawah1 = bawah/FPB;
		}while(FPB==1)
		
		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			if(total+i>0)	arrSalah.push([total+i,bawah]);
		}
		
		var csoal = [a1,bawah,strb1,strbawah1];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var cbenar = [total,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan15(){
		var bawah = RandomAngkaAtoB(5,95);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		do{
			arAngka = RandomMyArray(arAngka);
			var a1 = arAngka[0];
			var b1 = arAngka[1];
			var c1 = arAngka[2];
			var total = a1-b1-c1;
		}while(total<=0);

		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			if(total+i>0)	arrSalah.push([total+i,bawah]);
		}
		
		var csoal = [a1,b1,c1,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [total,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan16(){
		var bawah = 2*RandomAngkaAtoB(2,40);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		var FPB;
		do{
			arAngka = RandomMyArray(arAngka);
			var a1 = arAngka[0];
			var b1 = arAngka[1];
			var total = a1-b1;
			FPB = CariFPB([b1,bawah]);
			var strb1 = b1/FPB;
			var strbawah1 = bawah/FPB;
		}while(FPB==1 || total<=0);
		
		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			if(total+i>0)	arrSalah.push([total+i,bawah]);
		}
		
		var csoal = [a1,bawah,strb1,strbawah1];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		
		var cbenar = [total,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
		var bawah = RandomAngkaAtoB(5,95);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		do{
			arAngka = RandomMyArray(arAngka);
			var a1 = arAngka[0];
			var b1 = arAngka[1];
			var c1 = arAngka[2];
			var total = a1+b1-c1;
		}while(total<=0);

		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			if(total+i>0)	arrSalah.push([total+i,bawah]);
		}
		
		var csoal = [a1,b1,c1,bawah];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [total,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan18(){
		var depan = RandomAngkaAtoB(0,3);
		var bawah = RandomAngkaAtoB(5,20);
		var arDepan = [];
		for(var i=1;i<6;i++){
			arDepan.push(i);
		}
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		do{
			arDepan = RandomMyArray(arDepan);
			arAngka = RandomMyArray(arAngka);
			var b1 = arDepan[0];
			var b2 = arDepan[1];
			var bt = b1+b2;
			var a1 = arAngka[0];
			var a2 = arAngka[1];
			var at = a1+a2;
		}while(at>=bawah);
		var Nama = NamaTokoh();
		var FPB1 = CariFPB([a1,bawah]);
		var FPB2 = CariFPB([a2,bawah]);
		
		var csoal = [b1,a1/FPB1,bawah/FPB1,b2,a2/FPB2,bawah/FPB2,Nama[0],Nama[1]];
		var arrSalah = [];
		for(var i=1;i<bawah;i++){
			arrSalah.push([bt,i,bawah]);
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [bt,at,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan19(){
		var bawah = RandomAngkaAtoB(5,20);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		var Nama = NamaTokoh();
		var FPB1 = CariFPB([a1,bawah]);
		
		var Harga = bawah*RandomAngkaAtoB(1,5)*1000;
		var csoal = [Harga,a1/FPB1,bawah/FPB1,Nama[0]];
		
		var Habis = Harga * a1/bawah;
		var Sisa = Harga-Habis;
		var arrSalah = [];
		for(var i=1;i<bawah;i++){
			var Sisanya = Harga-Harga * i/bawah
			Sisanya = "Rp"+StringRibuan(Sisanya)+",00";
			arrSalah.push(Sisanya);
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = "Rp"+StringRibuan(Sisa)+",00";
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
	function MyBilanganPecahan20(){
		var bawah = 2**RandomAngkaAtoB(1,3);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		//var FPB1 = CariFPB([a1,bawah]);
		
		var csoal = [a1,bawah];
		
		var arrSalah = [];
		for(var j=2;j<5;j++){
			for(var i=1;i<2**j;i++){
				arrSalah.push(StringDesimal(i/(2**j)));
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = StringDesimal(a1/bawah);
		var benar = cbenar;
		arrSalah = RandomMyArray(arrSalah);
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
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
	function MyBilanganPecahan21(){
		var a1 = RandomAngkaAtoB(0,9);
		var a2 = RandomAngkaAtoB(0,9);
		var a3 = RandomAngkaAtoB(0,9);
		var atot = 1*(a1+""+a2+""+a3)/10;
		
		var b1 = RandomAngkaAtoB(0,9);
		var b2 = RandomAngkaAtoB(0,9);
		var b3 = RandomAngkaAtoB(0,9);
		var b4 = RandomAngkaAtoB(0,9);
		var b5 = RandomAngkaAtoB(0,9);
		var btot = 1*(b1+""+b2+""+b3+""+b4+""+b5)/1000;
		
		var c1 = RandomAngkaAtoB(0,9);
		var c2 = RandomAngkaAtoB(0,9);
		var c3 = RandomAngkaAtoB(0,9);
		var c4 = RandomAngkaAtoB(0,9);
		var ctot = 1*(c1+""+c2+""+c3+""+c4)/100;
		
		var abctot = TambahDesimal([atot,btot,ctot]);
		var ArSalah = [ Bulat(abctot),
						Bulat(abctot)+1,
						Bulat(abctot)-1,
						Bulat(abctot)+10,
						Bulat(abctot)-10,
						TambahDesimal([BagiKali(atot,1),BagiKali(btot,1),BagiKali(ctot,1)]),
						TambahDesimal([BagiKali(atot,1),BagiKali(btot,1),BagiKali(ctot,1),1]),
						TambahDesimal([BagiKali(atot,1),BagiKali(btot,1),BagiKali(ctot,1),-1]),
						TambahDesimal([BagiKali(atot,1),BagiKali(btot,1),BagiKali(ctot,1),10]),
						TambahDesimal([BagiKali(atot,1),BagiKali(btot,1),BagiKali(ctot,1),-10]),
						TambahDesimal([BagiKali(atot,2),BagiKali(btot,2),BagiKali(ctot,2)]),
						TambahDesimal([BagiKali(atot,2),BagiKali(btot,2),BagiKali(ctot,2),1]),
						TambahDesimal([BagiKali(atot,2),BagiKali(btot,2),BagiKali(ctot,2),-1]),
						TambahDesimal([BagiKali(atot,2),BagiKali(btot,2),BagiKali(ctot,2),10]),
						TambahDesimal([BagiKali(atot,2),BagiKali(btot,2),BagiKali(ctot,2),-10])
						];
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [atot,btot,ctot];
		var arrSalah = [];
		
		
		var benar = abctot;
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
	function MyBilanganPecahan22(){
		var bawah = 2**RandomAngkaAtoB(1,3);
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		
		var csoal = [a1/bawah];
		
		var arrSalah = [];
		for(var j=2;j<5;j++){
			for(var i=1;i<2**j;i++){
				arrSalah.push([i,2**j]);
			}
		}
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = [a1,bawah];
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0],benar) || arraysAreEqual(arrSalah[1],benar) || arraysAreEqual(arrSalah[2],benar);
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
	function MyBilanganPecahan23(){
		var bawah = 4
		var arAngka = [];
		for(var i=1;i<bawah-1;i++){
			arAngka.push(i);
		}
		arAngka = RandomMyArray(arAngka);
		var a1 = arAngka[0];
		arAngka = RandomMyArray(arAngka);
		var b1 = arAngka[0];
		arAngka = RandomMyArray(arAngka);
		var c1 = arAngka[0];
		var b0 = RandomAngkaAtoB(0,4);
		var c0 = RandomAngkaAtoB(0,4);
		var FPB1 = CariFPB([a1,bawah]);
		var FPB2 = CariFPB([c1,bawah]);
		var total = b0*bawah+c0*bawah+a1+b1+c1;

		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			arrSalah.push((total+i)/bawah);
		}
		
		var Nama = NamaTokoh();
		var csoal = [Nama[0],a1/FPB1,bawah/FPB1,(b0*bawah+b1)/bawah,c0,c1/FPB2,bawah/FPB2];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = total/bawah;
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
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
	function MyBilanganPecahan24(){
		var arBawah = [4,5,8,10];
		arBawah = RandomMyArray(arBawah);
		do{
			var a1 = RandomAngkaAtoB(0,arBawah[0]-1);
			var b1 = RandomAngkaAtoB(0,arBawah[1]-1);
			var c1 = RandomAngkaAtoB(0,arBawah[2]-1);
			var d1 = RandomAngkaAtoB(0,arBawah[3]-1);
			var c0 = RandomAngkaAtoB(0,4);
			var FPB1 = CariFPB([a1,arBawah[0]]);
			var FPB2 = CariFPB([d1,arBawah[3]]);
			var total = TambahDesimal([a1/arBawah[0],b1/arBawah[1],(c0*arBawah[2]+c1)/arBawah[2],-d1/arBawah[3]]);
		}while(total<=0);
		
		var arrSalah = [];
		for(var i=-10;i<=10;i++){
			arrSalah.push(TambahDesimal([total*10,i])/10);
		}
		
		var Nama = NamaTokoh();
		var csoal = [a1,arBawah[0],StringDesimal(b1/arBawah[1]),StringDesimal((c0*arBawah[2]+c1)/arBawah[2]),d1,arBawah[3]];
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var FPB
		
		var cbenar = total;
		var benar = cbenar;
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
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
	
	
	function GambarBilanganPecahan24(nmcanvas,arrs,ss1,ss2){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAqCAYAAAAJU2bcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAE5SURBVHhe7d3LioMwAIZRda0P7vP4aq6dNkXBQhhmKLT9zTkQai+bVPlIurD9z10HEGDYHwG+nmABMQQLiCFYQAzBAmIIFhBDsIAYggXEECwghmABMQQLiCFYQAzBAmIIFhBDsIAYggXEEKyKvu8foxWtzZdcggXEeMstkofhM13ctm0/+p9jtdHK3aNbm++rPrUafeX8rOvaTdO0P6tLOP9WWLtjW3S+GGuvXUVtbrXXrmKe56f5nceyLPunrmscx0eQfhsJ/AlFRbmIi1a+mtbm26KrrLAEq0Kw4DvZEgIxBKuirDRaWm20Nl/+pqy8yyjbyeP4+L3v/N472RICMaywgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEKLrbgY5aBVfaqF7AAAAAElFTkSuQmCC";
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
				ctx.fillText(arrs[0],40,15);
				ctx.fillText(arrs[1],40,35);
				ctx.fillText(arrs[2],100,25);
				ctx.fillText(arrs[3],160,25);
				ctx.fillText(arrs[4],220,15);
				ctx.fillText(arrs[5],220,35);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan23(nmcanvas,arrs,arrss){
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
				ctx.drawImage(base1_image, 85+ (str0-39)*8, 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 75+ (str1-31)*8, 46*1-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1],120 + (str0-39)*8 ,11+46*0);
				ctx.fillText(arrs[2],120 + (str0-39)*8 ,30+46*0);
				ctx.fillText(arrs[4],95 + (str1-31)*8 ,20+46*1);
				ctx.fillText(arrs[5],110 + (str1-31)*8 ,11+46*1);
				ctx.fillText(arrs[6],110 + (str1-31)*8 ,30+46*1);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan22(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan20(nmcanvas,arrs,ss1,ss2){
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
				ctx.drawImage(base1_image, 170, -7,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],205,11);
				ctx.fillText(arrs[1],205,30);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,220,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan19(nmcanvas,arrs,arrss){
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
				ctx.drawImage(base1_image, 45,-7,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],80,11);
				ctx.fillText(arrs[1],80,30);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20);
				ctx.fillText(arrss[1],100,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan18(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],30,28+46*i);
					ctx.fillText(arrs[i+2][1],50,18+46*i);
					ctx.fillText(arrs[i+2][2],50,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan18awal(nmcanvas,arrs,arrss){
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
				ctx.drawImage(base1_image, 200+ (str0-46)*8, 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 200+ (str1-46)*8, 46*1-8,base1_image.width, base1_image.height);
				//ctx.drawImage(base1_image, 35+10 + (str0-46)*1 , 46*0-7,base1_image.width, base1_image.height);
				//ctx.drawImage(base1_image, 35+45 + (str1-46)*8 , 46*1-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],220 + (str0-46)*8 ,20+46*0);
				ctx.fillText(arrs[1],235 + (str0-46)*8 ,11+46*0);
				ctx.fillText(arrs[2],235 + (str0-46)*8 ,30+46*0);
				ctx.fillText(arrs[3],220 + (str1-46)*8 ,20+46*1);
				ctx.fillText(arrs[4],235 + (str1-46)*8 ,11+46*1);
				ctx.fillText(arrs[5],235 + (str1-46)*8 ,30+46*1);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan17awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAApCAYAAACBSz00AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADqSURBVHhe7dxBToNAAEBR8CLc/2QcQ6Wxxlh/ah2NdXwvmXTRzQzwYboo6+OzBbjw8PIJvCMOCOKAIA4I4oAgDgjigCAOCOKAIA4I4oAgDgjigCAOCOKAIA4IU8axrutpwAhPDghDf5P9rbvztSmf5/XZpd3rOm71F9dxbc7ffYxuMU0cIwfZOsYMXEJ3bcoXLJwvkllP2kxGbgY/TRwQ/CCHMGUcxxPDU+N/OHYJx9j3/TS2bXvdObz97iu81A2CbRUEcUAQBwRxQBAHBHFAEAcEcUAQBwRxQBAHBHFAEAcEcUAQB3xoWZ4At01NwIiOMdgAAAAASUVORK5CYII="
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
				ctx.fillText(arrs[0],30 ,14);
				ctx.fillText(arrs[3],30,35);
				ctx.fillText(arrs[1],80,14);
				ctx.fillText(arrs[3],80,35);
				ctx.fillText(arrs[2],130,14);
				ctx.fillText(arrs[3],130,35);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan17(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan16awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAArCAYAAABB7ttrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADDSURBVHhe7dpBCoJAAEBR7SLe/2QeozIk2kXfENT3YFBwo/KdcTHj/WmA4LYe4WfiIRMPmXjIxEMmHjLxkImHTDxk4iETD5l4yMRDJh4y8ZCJh0w8ZOIh27QNdRzH9Wxf/945e8Tn+HbPe+wuPk08W17mWT6CvdkAf1CHn3m4Nj/MZOK5iGWZW8Y8z68xTdN76fu89gvLFpmZh0w8ZOIhEw+ZeMjEQyYeMvGQiYdMPGTiIRMPmXjIxEMmHjLxkImHaBgedKs1xAs6FaEAAAAASUVORK5CYII="
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
				ctx.fillText(arrs[0],30 ,14);
				ctx.fillText(arrs[1],30,35);
				ctx.fillText(arrs[2],80,14);
				ctx.fillText(arrs[3],80,35);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan16(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan15awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAApCAYAAACBSz00AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADRSURBVHhe7dxdioJQAIBRnY24/5W5jKYiYqg+om5/E+eAKPjiFT+9Pui82ZqAMz+HNXBCHBDEAUEcEMQBQRwQxAFBHBDEAUEcEMQBQRwQxAFBHBDEAUEcEMQBQRwQhj6Tnef5sPVaj/6y1zjGjIzj2jE/+hzd4mviGDnJxjFm4BL6aH6wwFuN3AyeTRwQvJBDEAf/2m5atlvWdd0vy7Icp2p/993DtAqCJwcEcUAQBwRxQBAHBHFAEAcEcUAQBwRxQBAHBHFAEAcEcUAQB1w0Tb+V/j7AgOlWrwAAAABJRU5ErkJggg=="
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
				ctx.fillText(arrs[0],30 ,14);
				ctx.fillText(arrs[3],30,35);
				ctx.fillText(arrs[1],80,14);
				ctx.fillText(arrs[3],80,35);
				ctx.fillText(arrs[2],130,14);
				ctx.fillText(arrs[3],130,35);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan15(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAArCAYAAABB7ttrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADhSURBVHhe7dtdasJAGEDRpBvJ/leWZbSNqLQv/txQjNNzYPBBCDNy8+lDnD+/TRB8nF/haeIhEw+ZeMjEQyYeMvGQiYdMPGTiIRMPmXjIxEMmHjLxkImHbMh45nk+Lf6WyUO26zHUV93d97Z82dejRzvqOW65t+c9137UMPHs+TDfMZ4jGPIB+EsMAx7t6u0nz1H9h3iOwA9msiHj2SaOqfPbNo23ta7raS3Lcp3QP997hj/9kfnaIhMPmXjIxEMmHjLxkImHTDxk4iETD5l4yMRDJh4y8ZCJh0w8ZOIhmqYvLJBExGutzzAAAAAASUVORK5CYII="
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
				ctx.fillText(arrs[0],30 ,14);
				ctx.fillText(arrs[3],30,35);
				ctx.fillText(arrs[1],80,14);
				ctx.fillText(arrs[3],80,35);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan14(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan13awal(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAApCAYAAACBSz00AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADzSURBVHhe7dxRCoJAFIZRbSPuf2Uuo1Iqovozukg6nQPSQxBemW+sh+yPZx3w5HB5BR6IAwJxQCAOCMQBgTggEAcE4oBAHBCIAwJxQCAOCMQBgTggEAcE4oCgyTj6vp+PvWtljr1y54Cg9DfZX+1qS6d8Pa9PRzNHTWEJLZ5z5bOrmomjcpHNUVNYQpvW5AMWrotk76O1Msc7lc1gbeLYsH+IY8v8IIegyTimnbaF3baVOdY03V2nYxzH+RiG4XbHvX/vGx7qBoGvVRCIAwJxQCAOCMQBgTggEAcE4oBAHBCIAwJxQCAOCMQBgTggEAe81HUnH/dcwK4GHksAAAAASUVORK5CYII=";
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
				ctx.fillText(arrs[0],30 ,14);
				ctx.fillText(arrs[3],30,35);
				ctx.fillText(arrs[1],80,14);
				ctx.fillText(arrs[3],80,35);
				ctx.fillText(arrs[2],130,14);
				ctx.fillText(arrs[3],130,35);
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
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan12(nmcanvas,arrs,arrss){
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
				var str2 = arrss[2].length;
				ctx.drawImage(base1_image, 35+150 + (str0-40)*8 , 46*0-7,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 35+45 + (str1-25)*8 , 46*1-8,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 35+77 + (str2-30)*8 , 46*2-8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],70+150 + (str0-40)*8 ,11+46*0);
				ctx.fillText(arrs[1],70+150 + (str0-40)*8 ,31+46*0);
				ctx.fillText(arrs[2],70+45 + (str1-25)*8 ,10+46*1);
				ctx.fillText(arrs[3],70+45 + (str1-25)*8 ,30+46*1);
				ctx.fillText(arrs[4],70+77 + (str2-30)*8 ,10+46*2);
				ctx.fillText(arrs[5],70+77 + (str2-30)*8 ,30+46*2);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(arrss[0],0,20+46*0);
				ctx.fillText(arrss[1],0,20+46*1);
				ctx.fillText(arrss[2],0,20+46*2);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan11awal(nmcanvas,arrs,ss1,ss2){
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
				ctx.drawImage(base1_image, 175+110, -6,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],210+110,12);
				ctx.fillText(arrs[1],210+110,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,335,20);
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
					ctx.drawImage(base1_image, 0, 46*i,base1_image.width, base1_image.height);
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",0,25+46*i);
				}
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan10awal(nmcanvas,arrs,ss1,ss2){
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
				ctx.drawImage(base1_image, 175, -6,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],210,12);
				ctx.fillText(arrs[1],210,32);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,230,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan10(nmcanvas,arrs){
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
					ctx.fillText(arrs[i+2][0],35,18+46*i);
					ctx.fillText(arrs[i+2][1],35,38+46*i);
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAoCAYAAACrfPvAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAEVSURBVHhe7duxaYdAGEDxMwuII9jaO4ADuJOt8ziAEziDI1g4QBLDV4RgTP4IcvDer7mPa7zicaBg8f4pSSBvsUoYRi8coxeO0QvH6IVj9MIxeuEYvXCMXjhGLxyjF47RC8fohWP0wjF64Ri9cIxeOEYvnGx+F6yqKqZnbdsW07W6rmN61rquMV3rui6mZ83zHNO1YRhiel1RFOnI9Pt6+Gs+1rPnetMre0e8P9f/zL/xx3DheNMLx+iFY/Qnpmn6ehEaxzF28uL57jH6E33fp33fU1mWsZMXz3eP0Z9YliU1TZPato2dvHi+e/x6IxxveuEYvXCMXjhGLxyjF47RC8fohWP0wjF64Ri9cIxeOEYvmJQ+AIxXapqlZuiTAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, 0, -2,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],50,13);
				ctx.fillText(arrs[4],50,33);
				ctx.fillText(arrs[1],90,13);
				ctx.fillText(arrs[4],90,33);
				ctx.fillText(arrs[2],130,13);
				ctx.fillText(arrs[4],130,33);
				ctx.fillText(arrs[3],170,13);
				ctx.fillText(arrs[4],170,33);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan9(nmcanvas,arrs){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base1_image = new Image();
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAoCAYAAACrfPvAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAEVSURBVHhe7duxaYdAGEDxMwuII9jaO4ADuJOt8ziAEziDI1g4QBLDV4RgTP4IcvDer7mPa7zicaBg8f4pSSBvsUoYRi8coxeO0QvH6IVj9MIxeuEYvXCMXjhGLxyjF47RC8fohWP0wjF64Ri9cIxeOEYvnGx+F6yqKqZnbdsW07W6rmN61rquMV3rui6mZ83zHNO1YRhiel1RFOnI9Pt6+Gs+1rPnetMre0e8P9f/zL/xx3DheNMLx+iFY/Qnpmn6ehEaxzF28uL57jH6E33fp33fU1mWsZMXz3eP0Z9YliU1TZPato2dvHi+e/x6IxxveuEYvXCMXjhGLxyjF47RC8fohWP0wjF64Ri9cIxeOEYvmJQ+AIxXapqlZuiTAAAAAElFTkSuQmCC";
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
					ctx.drawImage(base1_image, 0, -2+46*i,base1_image.width, base1_image.height);
					ctx.font = "16px Times New Roman";
					ctx.textAlign = "center";
					ctx.fillText(arrs[i+2][0],50,13+46*i);
					ctx.fillText(arrs[i+2][4],50,33+46*i);
					ctx.fillText(arrs[i+2][1],90,13+46*i);
					ctx.fillText(arrs[i+2][4],90,33+46*i);
					ctx.fillText(arrs[i+2][2],130,13+46*i);
					ctx.fillText(arrs[i+2][4],130,33+46*i);
					ctx.fillText(arrs[i+2][3],170,13+46*i);
					ctx.fillText(arrs[i+2][4],170,33+46*i);
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
		base1_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABhSURBVGhD7dihEYBADADBD/33DAg6gEHc75pE5mzmvK2NHM/chuA6wXWC6wTXCa4TXCe4TnCd4DrBdb98LWfm2b7x5mRv2jrBdYLrBNcJrhNcJ7hOcJ3gOsF1gus2C17rAj6nD078I7FNAAAAAElFTkSuQmCC";
		base1_image.onload = function () {
			CekJaw();
		}
		var inside=0;
		function CekJaw(){
			inside++;
			if(inside==1){
				ctx.drawImage(base1_image, -15, -5,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 65, -5,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0],20,13);
				ctx.fillText(arrs[1],20,33);
				ctx.fillText(arrs[2],100,13);
				ctx.fillText(arrs[3],100,33);
			
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(" ...... " ,45,20);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan7awal(nmcanvas,arrs){
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
				ctx.drawImage(base1_image, -15, -5,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 65, -5,base1_image.width, base1_image.height);
				ctx.drawImage(base1_image, 115, -5,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[1][0],20,13);
				ctx.fillText(arrs[1][3],20,33);
				ctx.fillText(arrs[1][1],100,13);
				ctx.fillText(arrs[1][3],100,33);
				ctx.fillText(arrs[1][2],150,13);
				ctx.fillText(arrs[1][3],150,33);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(", ...... ," ,40,20);
				ctx.fillText(", " ,120,20);
			}
		}
		
		return 0;
	}
		
	function GambarBilanganPecahan7(nmcanvas,arrs){
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
	function GambarBilanganPecahan6(nmcanvas,arrs){
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
	function GambarBilanganPecahan5awal(nmcanvas,Ar){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		ctx.fillRect(0, 0, 400, 200);
		
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 200);
		ctx.lineTo(400, 200);
		ctx.lineTo(400, 0);
		ctx.lineTo(0, 0);
		var dx = 400/Ar[1][1];
		var dy = 200/Ar[1][0];
		for(var i=0;i<Ar[1][1];i++){
			ctx.moveTo(i*dx, 0);
			ctx.lineTo(i*dx, 200);
		}
		for(var i=0;i<Ar[1][0];i++){
			ctx.moveTo(0, i*dy);
			ctx.lineTo(400, i*dy);
		}
		var ct = 0;
		var xct = 0;
		var yct = 0;
		do{
			ctx.fillStyle = "yellow";
			ctx.fillRect(xct*dx, yct*dy, dx, dy);
			xct++;
			if(xct==Ar[1][1]){
				xct=0;
				yct++;
			}
			ct++
		}while(ct<Ar[1][2])
		ctx.stroke();
		
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
	function GambarBilanganPecahan4(nmcanvas,arrs){
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
	function GambarBilanganPecahan3(nmcanvas,arrs,ss1,ss2){
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
				ctx.drawImage(base1_image, 35, -5,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0][0],70,13);
				ctx.fillText(arrs[0][1],70,33);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,23);
				ctx.fillText(ss2,85,23);
			}
		}
		
		return 0;
	}
	function GambarBilanganPecahan2(nmcanvas,arrs,ss1,ss2){
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
				ctx.drawImage(base1_image, 35, -8,base1_image.width, base1_image.height);
				ctx.font = "16px Times New Roman";
				ctx.textAlign = "center";
				ctx.fillText(arrs[0][0],70,10);
				ctx.fillText(arrs[0][1],70,30);
				ctx.textAlign = "left";
				ctx.font = "16px Times New Roman";
				ctx.fillText(ss1,0,20);
				ctx.fillText(ss2,85,20);
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
	function GetSoal1(){
		const Aljabar = MyBilanganPecahan1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Pada pecahan, bilangan yang berada "+ArSisi[0]+" dinamakan ...";
		
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
	function GetSoal2(canv){
		const Aljabar = MyBilanganPecahan2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan2(canv,ArSisi,"Pecahan"," dibaca ...");
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyBilanganPecahan3();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan3(canv,ArSisi,"Pecahan"," dibaca ...");
		
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
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal4(){
		const Aljabar = MyBilanganPecahan4();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Ekskul = NamaEkskul();
		var ss
		ss = "Pecahan "+ArSisi[1][0]+" per "+ArSisi[1][1]+" ditulis ...";
		
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
	function GetSoal5(canv){
		const Aljabar = MyBilanganPecahan5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		const DrawPecahan5awal = GambarBilanganPecahan5awal(canv,ArSisi);
		var Ekskul = NamaEkskul();
		var ss
		ss = "Bagian yang diberi warna kuning tersebut bernilai ...";
		
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
	function GetSoal6(){
		const Aljabar = MyBilanganPecahan6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		ss = Nama[0]+" membelah semangka menjadi "+ArSisi[6]+" bagian. "+Nama[0]+" kemudian memakan "+ArSisi[7]+" bagian semangka. Maka nilai semangka yang dimakan "+Nama[0]+" jika ditulis dalam bentuk pecahan adalah ...";
		
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
	function GetSoal7(canv1,canv2){
		const Aljabar = MyBilanganPecahan7();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan7awal = GambarBilanganPecahan7awal(canv1,ArSisi);
		const DrawPecahan7 = GambarBilanganPecahan7(canv2,ArSisi);
		
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
	function GetSoal8(canv){
		const Aljabar = MyBilanganPecahan8();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan8awal = GambarBilanganPecahan8(canv,ArSisi);
		
		var ss
		ss = "Tanda yang tepat untuk mengisi titik-titik di atas adalah ...";
		
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
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(canv1,canv2){
		const Aljabar = MyBilanganPecahan9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan9awal = GambarBilanganPecahan9awal(canv1,ArSisi[1]);
		const DrawPecahan9abcd = GambarBilanganPecahan9(canv2,ArSisi);
		
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
		
		var textSoal = ss;//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal10(canv1,canv2){
		const Aljabar = MyBilanganPecahan10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan10awal = GambarBilanganPecahan10awal(canv1,ArSisi[1],"Bentuk paling sederhana dari","adalah ...");
		const DrawPecahan10abcd = GambarBilanganPecahan10(canv2,ArSisi);
		
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
	function GetSoal11(canv1,canv2){
		const Aljabar = MyBilanganPecahan11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan11awal = GambarBilanganPecahan11awal(canv1,ArSisi[1],"Pecahan di bawah ini yang tidak senilai dengan","adalah ...");
		const DrawPecahan11abcd = GambarBilanganPecahan11(canv2,ArSisi);
		
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
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal12(){
		const Aljabar = MyBilanganPecahan12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss1=ArSisi[1][6]+" mempunyai pita sepanjang           ,";
		var ss2=ArSisi[1][7]+" sepanjang           ,";
		var ss3="dan "+ArSisi[1][8]+" sepanjang           ,";
		
		var ss
		ss = "Maka dari hal tersebut dapat diketahui bahwa ... ";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		var textSoal = ss+"<p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		ArFix.push([ss1,ss2,ss3]);
		return ArFix;
	}
	function GetSoal13(canv1,canv2){
		const Aljabar = MyBilanganPecahan13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2]
		
		const DrawPecahan13awal = GambarBilanganPecahan13awal(canv1,ArSisi[1]);
		const DrawPecahan13 = GambarBilanganPecahan13(canv2,ArSisi);
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
		
		var textSoal = ss;//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal14(canv1,canv2){
		const Aljabar = MyBilanganPecahan14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan14awal = GambarBilanganPecahan14awal(canv1,ArSisi[1]);
		const DrawPecahan14 = GambarBilanganPecahan14(canv2,ArSisi);
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
	function GetSoal15(canv1,canv2){
		const Aljabar = MyBilanganPecahan15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan15awal = GambarBilanganPecahan15awal(canv1,ArSisi[1]);
		const DrawPecahan15 = GambarBilanganPecahan15(canv2,ArSisi);
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
	function GetSoal16(canv1,canv2){
		const Aljabar = MyBilanganPecahan16();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan16awal = GambarBilanganPecahan16awal(canv1,ArSisi[1]);
		const DrawPecahan16 = GambarBilanganPecahan16(canv2,ArSisi);
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
	function GetSoal17(canv1,canv2){
		const Aljabar = MyBilanganPecahan17();
		//[benar,arrSalah];
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan17awal = GambarBilanganPecahan17awal(canv1,ArSisi[1]);
		const DrawPecahan17 = GambarBilanganPecahan17(canv2,ArSisi);
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
	function GetSoal18(){
		const Aljabar = MyBilanganPecahan18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss1=ArSisi[1][6]+" membuat tongkat sepanjang           meter,";
		var ss2=ArSisi[1][7]+" membuat tongkat sepanjang           meter,";
		
		var ss
		ss = "Total panjang tongkat mereka berdua adalah ..."
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		var textSoal = ss//+"A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		ArFix.push([ss1,ss2]);
		return ArFix;
	}
	function GetSoal19(){
		const Aljabar = MyBilanganPecahan19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		textSoal = "A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal20(canv){
		const Aljabar = MyBilanganPecahan20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan20(canv,ArSisi[1],"Bentuk pecahan desimal dari"," adalah ...");
		
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = ArSisi[2];
		Ar[1] = ArSisi[3];
		Ar[2] = ArSisi[4];
		Ar[3] = ArSisi[5];
		
		var textSoal = "A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal21(){
		const Aljabar = MyBilanganPecahan21();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = StringDesimal(ArSisi[0])+" + "+StringDesimal(ArSisi[1])+" + "+StringDesimal(ArSisi[2])+" = ...";
		
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
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal22(){
		const Aljabar = MyBilanganPecahan22();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		var ss
		ss = "Bentuk pecahan biasa dari "+StringDesimal(ArSisi[1])+" adalah ...";
		
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
	function GetSoal23(){
		const Aljabar = MyBilanganPecahan23();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss1="Bu "+ArSisi[1][0]+" membeli        kg tepung terigu,";
		var ss2=StringDesimal(ArSisi[1][3])+" kg beras,        kg telur.";
		
		var ss
		ss = "";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = StringDesimal(ArSisi[2])+" kg";
		Ar[1] = StringDesimal(ArSisi[3])+" kg";
		Ar[2] = StringDesimal(ArSisi[4])+" kg";
		Ar[3] = StringDesimal(ArSisi[5])+" kg";
		
		var textSoal = "A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(ArSisi[0]);
		ArFix.push(ArSisi);
		ArFix.push([ss1,ss2]);
		return ArFix;
	}
	function GetSoal24(canv){
		const Aljabar = MyBilanganPecahan24();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPecahan = GambarBilanganPecahan24(canv,ArSisi[1]);
		var ss
		ss = "Maka hasilnya adalah ...";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		Ar[0] = StringDesimal(ArSisi[2]);
		Ar[1] = StringDesimal(ArSisi[3]);
		Ar[2] = StringDesimal(ArSisi[4]);
		Ar[3] = StringDesimal(ArSisi[5]);
		
		var textSoal = ss+"<p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
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
					GetSoal20,
					GetSoal21,
					GetSoal22,
					GetSoal23,
					GetSoal24];
	
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
	
	
	
	dd1.innerHTML="<p>Kelas 4 Bab 2 \u{2192} Pecahan </p>";
	if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan bentuk pecahan di bawah ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan bentuk pecahan di bawah ini:</p>";
		cc1.width = 150;
		cc1.height = 30;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan bentuk pecahan di bawah ini:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan bentuk pecahan di bawah ini:</p>";
		cc1.width = 150;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 100;
		cc1.height = 184;
		const DrawPecahan4 = GambarBilanganPecahan4(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan gambar berikut! </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan gambar berikut! </p>";
		cc1.width = 400;
		cc1.height = 200;
		cc2.width = 100;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id);
		const DrawPecahan5 = GambarBilanganPecahan5(cc2.id,ss[2]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		ss = namefunc[no-1](cc1.id);
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 100;
		cc1.height = 184;
		const DrawPecahan6 = GambarBilanganPecahan6(cc1.id,ss[2]);		
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan deretan pecahan berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan deretan pecahan berikut!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 100;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<br>Pecahan yang tepat untuk mengisi titik-titik di atas agar menjadi urutan yang tepat adalah ...<br>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan dua pecahan berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan dua pecahan berikut!</p>";
		cc1.width = 200;
		cc1.height = 35;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan deretan pecahan berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan deretan pecahan berikut!</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<br>Pecahan-pecahan di atas jika ditulis secara urut dari yang terkecil menjadi ...<br>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan berikut!</p>";
		cc1.width = 300;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pecahan berikut!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pecahan berikut!</p>";
		cc1.width = 400;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p></p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diketahui:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diketahui:</p>";
		cc1.width = 350;
		cc1.height = 138;
		const DrawPecahan12 = GambarBilanganPecahan12(cc1.id,ss[2][1],ss[3]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan penjumlahan pecahan berikut</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan penjumlahan pecahan berikut</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Hasil dari penjumlahan pecahan di atas adalah ...</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan penjumlahan pecahan berikut</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan penjumlahan pecahan berikut</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Hasil dari penjumlahan pecahan di atas adalah ...</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pengurangan pecahan berikut</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pengurangan pecahan berikut</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Hasil dari pengurangan pecahan di atas adalah ...</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan pengurangan pecahan berikut</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan pengurangan pecahan berikut</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Hasil dari pengurangan pecahan di atas adalah ...</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==17){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan operasi campuran pecahan berikut</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan operasi campuran pecahan berikut</p>";
		cc1.width = 200;
		cc1.height = 35;
		cc2.width = 200;
		cc2.height = 184;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Hasil dari pengurangan pecahan di atas adalah ...</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==18){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diketahui:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diketahui:</p>";
		cc1.width = 350;
		cc1.height = 92;
		cc2.width = 200;
		cc2.height = 184;
		const DrawPecahan18awal = GambarBilanganPecahan18awal(cc1.id,ss[2][1],ss[3]);
		const DrawPecahan18 = GambarBilanganPecahan18(cc2.id,ss[2]);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==19){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[2][1][3]+" mempunyai uang sebesar Rp"+StringRibuan(ss[2][1][0])+",00.</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[2][1][3]+" mempunyai uang sebesar Rp"+StringRibuan(ss[2][1][0])+",00.</p>";
		cc1.width = 435;
		cc1.height = 35;
		dd2.innerHTML+="<p>Berapakah sisa uang "+ss[2][1][3]+" sekarang?</p>";
		const DrawPecahan19a = GambarBilanganPecahan19(cc1.id,[ss[2][1][1],ss[2][1][2]],["Sebanyak","bagian dari uangnya dipakai untuk membeli barang."]);
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+".</p>";
		else			dd1.innerHTML+="<p>"+nourut+".</p>";
		cc1.width = 300;
		cc1.height = 30;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==22){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 100;
		cc1.height = 184;
		const DrawPecahan22 = GambarBilanganPecahan22(cc1.id,ss[2]);
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==23){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diketahui</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diketahui</p>";
		cc1.width = 350;
		cc1.height = 92;
		dd2.innerHTML+="<p>Total berat belanjaan Bu "+ss[2][1][0]+" adalah ...</p>";
		const DrawPecahan23awal = GambarBilanganPecahan23(cc1.id,ss[2][1],ss[3]);
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
	}else if(no==24){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Perhatikan operasi campuran berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Perhatikan operasi campuran berikut:</p>";
		cc1.width = 300;
		cc1.height = 42;
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

 
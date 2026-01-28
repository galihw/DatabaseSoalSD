function Print51(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function BreakToTitikKoma(arr){
		var titikkoma = "";
		for(var i=0;i<arr.length;i++){
			titikkoma+=StringRibuan(arr[i])
			if(i<arr.length-1) titikkoma+=" ; ";
		}return titikkoma;
	}
	function MyBilanganCacah1(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0);
		
		function NamaKeAngka(ar){
			var depan,tengah,akhir
			var mm,nn,mmcvtr,nncvrt
			var belas = ["sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];
			var angka = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"];
			
			// depan
			if(ar[0]==1){
				nn = ar[0]*10+ar[1]
				nncvrt = nn-10;
				depan = belas[nncvrt]+" ribu";
			}else{
				mm = ar[0];
				nn = ar[1];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				depan = angka[mmcvrt]+" puluh "+angka[nncvrt]+" ribu";
				if(nn==0)	depan = angka[mmcvrt]+" puluh ribu";
			}
			// tengah
			mm = ar[2];
			mmcvrt = mm-1;
			tengah = angka[mmcvrt]+" ratus";
			if(mmcvrt==0)	tengah = "seratus";
			if(mm==0)		tengah = "";
			// belakang
			if(ar[3]==1){
				nn = ar[3]*10+ar[4]
				nncvrt = nn-10;
				belakang = belas[nncvrt];
			}else{
				mm = ar[3];
				nn = ar[4];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				belakang = angka[mmcvrt]+" puluh "+angka[nncvrt];
				if(nn==0)	belakang = angka[mmcvrt]+" puluh";
				if(mm==0)	belakang = angka[nncvrt];
			}
			var bfix = depan+" "+tengah+" "+belakang;
			return bfix;
		}
		var bacaFix = NamaKeAngka([arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]]);
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		
		var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [bacaFix];
		var arrSalah = [];
		
		var benar = angkaFix;
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
	function MyBilanganCacah2(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0 || arAngka[1]==0 || arAngka[2]!==5);
		
		function AngkaKeNama(ar){
			var depan,tengah,akhir
			var mm,nn,mmcvtr,nncvrt
			var belas = ["sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];
			var angka = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"];
			// depan
			if(ar[0]==1){
				nn = ar[0]*10+ar[1]
				nncvrt = nn-10;
				depan = belas[nncvrt]+" ribu";
			}else if(ar[0]==0){
				nn = ar[1];
				nncvrt = nn-1;
				
				if(ar[1]==1)		depan = "seribu";
				else if(ar[1]==0)	depan = "";
				else 				depan = angka[nncvrt]+" ribu";
			}else{
				mm = ar[0];
				nn = ar[1];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				depan = angka[mmcvrt]+" puluh "+angka[nncvrt]+" ribu";
				if(nn==0)	depan = angka[mmcvrt]+" puluh ribu";
			}
			// tengah
			mm = ar[2];
			mmcvrt = mm-1;
			tengah = angka[mmcvrt]+" ratus";
			if(mmcvrt==0)	tengah = "seratus";
			if(mm==0)		tengah = "";
			// belakang
			if(ar[3]==1){
				nn = ar[3]*10+ar[4]
				nncvrt = nn-10;
				belakang = belas[nncvrt];
			}else{
				mm = ar[3];
				nn = ar[4];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				belakang = angka[mmcvrt]+" puluh "+angka[nncvrt];
				if(nn==0)	belakang = angka[mmcvrt]+" puluh";
				if(mm==0)	belakang = angka[nncvrt];
				if(mm==0 && nn==0) belakang="";
				
			}
			var bFix = depan+" "+tengah+" "+belakang;
			return bFix;
		}
		
		var bacaFix = AngkaKeNama([arAngka[0],arAngka[1],5,0,0]);
		
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+0+""+0;
		
		
		var arr4Salah = [arAngka[0],arAngka[1],5,0,0];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = AngkaKeNama([arr4Salah[0],arr4Salah[1],arr4Salah[2],arr4Salah[3],arr4Salah[4]]);
					ff = bacaFix == infix;
				}while(ff)
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = AngkaKeNama([arr4Salah[0],arr4Salah[1],arr4Salah[2],arr4Salah[3],arr4Salah[4]]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff)
				ArSalah.push(infix);
			}
		}
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [angkaFix];
		var arrSalah = [];
		
		var benar = bacaFix
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
	function MyBilanganCacah3(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0||arAngka[1]==0||arAngka[2]==0||arAngka[3]==0||arAngka[4]==0);
		
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		var ArBenar = [[arAngka[0],"puluh ribuan"],
					   [arAngka[1],"ribuan"],
					   [arAngka[2],"ratusan"],
					   [arAngka[3],"puluhan"],
					   [arAngka[4],"satuan"]
					   ]
		var ArSalah = ["puluh ribuan","ribuan","ratusan","puluhan","satuan"]
		
		ArBenar = RandomMyArray(ArBenar);
		ArSalah = RandomMyArray(ArSalah);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ArBenar[0][0],angkaFix];
		var arrSalah = [];
		
		var benar = ArBenar[0][1];
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
	function MyBilanganCacah4(){
		
		var arAngka = [1,2,3,4,5,6,7,8,9];
		arAngka = RandomMyArray(arAngka);
		
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		
		var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var arrSalah = [];
		
		var benar = angkaFix;
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
	function MyBilanganCacah5(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0||arAngka[1]==0||arAngka[2]==0||arAngka[3]==0||arAngka[4]==0);
		
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		
		
		var ArBenar = [[arAngka[0],arAngka[0]+"0.000"],
					   [arAngka[1],arAngka[1]+".000"],
					   [arAngka[2],arAngka[2]+"00"],
					   [arAngka[3],arAngka[3]+"0"],
					   [arAngka[4],arAngka[4]+""]
					   ]
		
		ArBenar = RandomMyArray(ArBenar);
		var ArSalah = [ArBenar[0][0]+"0.000",ArBenar[0][0]+".000",ArBenar[0][0]+"00",ArBenar[0][0]+"0",ArBenar[0][0]+""];
		ArSalah = RandomMyArray(ArSalah);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ArBenar[0][0],angkaFix];
		var arrSalah = [];
		
		var benar = ArBenar[0][1];
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
	function MyBilanganCacah6(){
		var arAngka = [1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0);
		
		var angkaFix = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
		
		
		var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var ArSoal = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSoal.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					for(var j=0;j<ArSoal.length;j++){
						ff = ArSoal[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSoal.push(infix);
			}
		}
		
		ArBenar = [ArSoal[0],ArSoal[1],ArSoal[2],ArSoal[3]];
		ArBenar.sort(function(a, b){return b-a}); // besar ke kecil
		//ArSalah[0].sort(function(a, b){return a-b}); // kecil ke besar
		
		var ArSalah = [];
		
		function arraysAreEqual(arr1, arr2) {
			if (arr1.length !== arr2.length) {
			   return false;
			}
			return arr1.every((val, index) => val === arr2[index]);
		}
		
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				for(var k=0;k<4;k++){
					for(var l=0;l<4;l++){
						ff = i==j || i==k || i==l || j==k || j==l || k==l;
						if(!ff){
							var theAngka = [ArSoal[i],ArSoal[j],ArSoal[k],ArSoal[l]]
							ArSalah.push(theAngka);
						}
					}
				}
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ArSoal];
		var arrSalah = [];
		
		var benar = ArBenar;
		arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arrSalah[1]==arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBilanganCacah7(){
		var arAngka = [1,2,3,4,5,6,7,8,9];
		var angkaFix = [];
		for(var i=0;i<4;i++){
			do{
				arAngka = RandomMyArray(arAngka);
			}while(arAngka[0]==0);
			angkaFix.push([])
			
			angkaFix[i][0] = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
			
			var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
			arr4Salah = RandomMyArray(arr4Salah);
			do{
				arr4Salah = RandomMyArray(arr4Salah);
				var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
				ff = angkaFix[i][0] == infix;
			}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1]);
			angkaFix[i][1] = infix;
		}
		
		function InsertTanda(tf,ar){
			var fixstr="";
			if(tf){
				if(ar[0]<ar[1])		fixstr = StringRibuan(ar[0])+" < "+StringRibuan(ar[1]);
				else				fixstr = StringRibuan(ar[0])+" > "+StringRibuan(ar[1]);
			}else{
				if(ar[0]<ar[1])		fixstr = StringRibuan(ar[0])+" > "+StringRibuan(ar[1]);
				else				fixstr = StringRibuan(ar[0])+" < "+StringRibuan(ar[1]);
			}
			return fixstr;
		}
		
		var arrJaw = ["","","",""];
		for(var i=0;i<4;i++){
			if(i==0){
				arrJaw[i] = InsertTanda(true,angkaFix[i]);
			}else{
				arrJaw[i] = InsertTanda(false,angkaFix[i]);
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = arrJaw[0];
		arrSalah = [arrJaw[1],arrJaw[2],arrJaw[3]];
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBilanganCacah8(){
		var AngkaSoal = [0,0,0];
		var ArSoal = [];
		var split;
		var ceksplit
		do{
			for(var i=0;i<2;i++){
				var arAngka = [0,1,2,3,4,5,6,7,8,9];
				do{
					arAngka = RandomMyArray(arAngka);
				}while(arAngka[0]==0);
				AngkaSoal[i] = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
				ArSoal[i] = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
			}
			AngkaSoal[2] = AngkaSoal[0]+AngkaSoal[1];
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1] || split[0]==split[2] || split[0]==split[3] || split[0]==split[4] || split[1]==split[2] || split[1]==split[3] || split[1]==split[4] || split[2]==split[3] || split[2]==split[4] || split[3]==split[4];
		}while(AngkaSoal[0]==AngkaSoal[1] || AngkaSoal[2]>99999 || ceksplit);
		
		var angkaFix = split[0]+""+split[1]+"."+split[2]+""+split[3]+""+split[4];
		
		var arr4Salah = [split[0],split[1],split[2],split[3],split[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}
		}
		
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[0],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[2];
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
	function MyBilanganCacah9(){
		var AngkaSoal = [0,0,0];
		var ArSoal = [];
		var split;
		var ceksplit
		do{
			for(var i=0;i<2;i++){
				var arAngka = [0,1,2,3,4,5,6,7,8,9];
				do{
					arAngka = RandomMyArray(arAngka);
				}while(arAngka[0]==0);
				AngkaSoal[i] = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
				ArSoal[i] = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
			}
			AngkaSoal[2] = AngkaSoal[0]-AngkaSoal[1];
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1] || split[0]==split[2] || split[0]==split[3] || split[0]==split[4] || split[1]==split[2] || split[1]==split[3] || split[1]==split[4] || split[2]==split[3] || split[2]==split[4] || split[3]==split[4];
		}while(AngkaSoal[0]==AngkaSoal[1] || AngkaSoal[2]<9999 || ceksplit);
		
		var angkaFix = split[0]+""+split[1]+"."+split[2]+""+split[3]+""+split[4];
		
		var arr4Salah = [split[0],split[1],split[2],split[3],split[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[0],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[2];
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
	function MyBilanganCacah10(){
		var AngkaSoal = [0,0,0];
		var ArSoal = [];
		var split;
		var ceksplit
		do{
			do{
			var arAngka1 = [0,1,2,3,4,5,6,7,8,9];
			var arAngka2 = [0,1,2,3,4,5,6,7,8,9];
			arAngka1 = RandomMyArray(arAngka1);
			arAngka2 = RandomMyArray(arAngka2);
			}while(arAngka1[0]==0 || arAngka2[0]==0 );
			AngkaSoal[0] = Number(arAngka1[0]+""+arAngka1[1]+""+arAngka1[2]+""+arAngka1[3]);
			AngkaSoal[1] = Number(arAngka2[0]+""+arAngka2[1]);
			
			AngkaSoal[2] = AngkaSoal[0]*AngkaSoal[1];
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1] || split[0]==split[2] || split[0]==split[3] || split[0]==split[4] || split[1]==split[2] || split[1]==split[3] || split[1]==split[4] || split[2]==split[3] || split[2]==split[4] || split[3]==split[4];
		}while(AngkaSoal[2]>99999 || ceksplit);
		
		var angkaFix = split[0]+""+split[1]+"."+split[2]+""+split[3]+""+split[4];
		
		var arr4Salah = [split[0],split[1],split[2],split[3],split[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==split[0] || arr4Salah[1]!==split[1])
				ArSalah.push(infix);
			}
		}
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[0],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[2];
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
	function MyBilanganCacah11(){
		var AngkaSoal = [0,0,0];
		var ArSoal = [];
		var split;
		var split2;
		var ceksplit
		do{
			do{
			var arAngka1 = [0,1,2,3,4,5,6,7,8,9];
			var arAngka2 = [0,1,2,3,4,5,6,7,8,9];
			arAngka1 = RandomMyArray(arAngka1);
			arAngka2 = RandomMyArray(arAngka2);
			}while(arAngka1[0]==0 || arAngka2[0]==0 || arAngka2[1]==0);
			AngkaSoal[0] = Number(arAngka1[0]+""+arAngka1[1]+""+arAngka1[2]+""+arAngka1[3]);
			AngkaSoal[1] = Number(arAngka2[0]+""+arAngka2[1]);
			
			AngkaSoal[2] = AngkaSoal[0]*AngkaSoal[1];
			split0 = SplitString(AngkaSoal[0]);
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1] || split[0]==split[2] || split[0]==split[3] || split[0]==split[4] || split[1]==split[2] || split[1]==split[3] || split[1]==split[4] || split[2]==split[3] || split[2]==split[4] || split[3]==split[4];
		}while(AngkaSoal[2]>99999 || ceksplit);
		
		var angkaFix = split0[0]+""+split0[1]+"."+split0[2]+""+split0[3];
		
		var arr4Salah = [split0[0],split0[1],split0[2],split0[3]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==split0[0])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==split0[0])
				ArSalah.push(infix);
			}
		}
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[2],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[0];
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
	function MyBilanganCacah12(){
		var AngkaSoal = [0,0,0];
		var ArSoal = [];
		var split;
		var split2;
		var ceksplit
		do{
			do{
			var arAngka1 = [0,1,2,3,4,5,6,7,8,9];
			var arAngka2 = [0,1,2,3,4,5,6,7,8,9];
			arAngka1 = RandomMyArray(arAngka1);
			arAngka2 = RandomMyArray(arAngka2);
			}while(arAngka1[0]==0 || arAngka2[0]==0 || arAngka2[1]==0);
			AngkaSoal[0] = Number(arAngka1[0]+""+arAngka1[1]+""+arAngka1[2]+""+arAngka1[3]);
			AngkaSoal[1] = Number(arAngka2[0]+""+arAngka2[1]);
			
			AngkaSoal[2] = AngkaSoal[0]*AngkaSoal[1];
			split0 = SplitString(AngkaSoal[0]);
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1] || split[0]==split[2] || split[0]==split[3] || split[0]==split[4] || split[1]==split[2] || split[1]==split[3] || split[1]==split[4] || split[2]==split[3] || split[2]==split[4] || split[3]==split[4];
		}while(AngkaSoal[2]>99999 || ceksplit);
		
		var angkaFix = split0[0]+""+split0[1]+"."+split0[2]+""+split0[3];
		
		var arr4Salah = [split0[0],split0[1],split0[2],split0[3]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==split0[0])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]);
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==split0[0])
				ArSalah.push(infix);
			}
		}
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[2],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[0];
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
	function MyBilanganCacah13(){
		var AngkaSoal = [0,0,0];
		var split;
		var ceksplit
		do{
			for(var i=0;i<2;i++){
				var arAngka = [0,1,2,3,4,5,6,7,8,9];
				do{
					arAngka = RandomMyArray(arAngka);
				}while(arAngka[0]==0 || arAngka[1]==0);
				AngkaSoal[i] = Number(arAngka[0]+""+arAngka[1]+"000");
			}
			var limaratus = [0,500];
			limaratus = RandomMyArray(limaratus);
			AngkaSoal[0]+=limaratus[0];
			AngkaSoal[1]+=limaratus[1];
			AngkaSoal[2] = AngkaSoal[0]-AngkaSoal[1];
			split = SplitString(AngkaSoal[2]);
			ceksplit = split[0]==split[1];
		}while(AngkaSoal[0]==AngkaSoal[1] || AngkaSoal[2]<9999 || ceksplit);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [AngkaSoal[0],AngkaSoal[1]];
		var arrSalah = [];
		
		var benar = AngkaSoal[2];
		
		var salah1 = AngkaSoal[2]-500;
		var salah2 = AngkaSoal[2]-1000;
		var salah3 = AngkaSoal[2]-1500;
		var salah4 = AngkaSoal[2]-2000;
		var salah5 = AngkaSoal[2]+500;
		var salah6 = AngkaSoal[2]+1000;
		var salah7 = AngkaSoal[2]+1500;
		var salah8 = AngkaSoal[2]+2000;
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
	function MyBilanganCacah14(){
		var arLiter = [5,6,7,8,9];
		arLiter = RandomMyArray(arLiter);
		var LiterFix = 1000*arLiter[0];
		
		var Liter7hari = 7*LiterFix;
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [LiterFix];
		var arrSalah = [];
		
		var benar = Liter7hari;
		
		var salah1 = Liter7hari-500;
		var salah2 = Liter7hari-1000;
		var salah3 = Liter7hari-1500;
		var salah4 = Liter7hari-2000;
		var salah5 = Liter7hari+500;
		var salah6 = Liter7hari+1000;
		var salah7 = Liter7hari+1500;
		var salah8 = Liter7hari+2000;
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
	function MyBilanganCacah15(){
		var arLiter = [1,2,3,4,5,6,7,8,9];
		arLiter = RandomMyArray(arLiter);
		var harga = Number(arLiter[0]+""+arLiter[1]+"00");
		var banyak = Number(arLiter[2]+""+arLiter[3]);
		
		var HargaTotal = harga*banyak;
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [harga,banyak];
		var arrSalah = [];
		
		var benar = HargaTotal;
		
		var salah1 = HargaTotal-500;
		var salah2 = HargaTotal-1000;
		var salah3 = HargaTotal-1500;
		var salah4 = HargaTotal-2000;
		var salah5 = HargaTotal+500;
		var salah6 = HargaTotal+1000;
		var salah7 = HargaTotal+1500;
		var salah8 = HargaTotal+2000;
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
	function MyBilanganCacah16(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0||arAngka[1]==0||arAngka[2]==0||arAngka[3]==0||arAngka[4]==0);
		
		
		var angkaFix = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
		
		var SoalBenar = ["Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluh ribuan",
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ribuan",
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ratusan",
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluhan",
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat satuan"
					   ]
		var SoalSalah = [
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ribuan",
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ratusan",
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluhan",
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat satuan",
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluh ribuan",
					   
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ratusan",
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluhan",
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat satuan",
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluh ribuan",
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ribuan",
					   
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluhan",
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat satuan",
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluh ribuan",
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ribuan",
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ratusan",
					   
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat satuan",
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluh ribuan",
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ribuan",
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat ratusan",
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai tempat puluhan"
					   
					   ];
					   
		
		SoalBenar = RandomMyArray(SoalBenar);
		SoalSalah = RandomMyArray(SoalSalah);
		
		var model = RandomAngkaAtoB(-1,4);
		ArBenar = ["(1) dan (2)",
				   "(1), (2), dan (3)",
				   "(1), (2), dan (4)",
				   "(1), (2), (3), dan (4)"];
		ArSalah = ["(1) dan (2)",
				   "(1), (2), dan (3)",
				   "(1), (2), dan (4)",
				   "(1), (2), (3), dan (4)"];
				   
		var soalFix = [];
		if(model==0){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalSalah[0];
			soalFix[3] = "(4) "+SoalSalah[1];
		}else if(model==1){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalBenar[2];
			soalFix[3] = "(4) "+SoalSalah[0];
		}else if(model==2){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalSalah[0];
			soalFix[3] = "(4) "+SoalBenar[2];
		}else{
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalBenar[2];
			soalFix[3] = "(4) "+SoalBenar[3];
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [angkaFix,soalFix];
		var arrSalah = [];
		
		var benar = ArBenar[model];
		arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBilanganCacah17(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0||arAngka[1]==0||arAngka[2]==0||arAngka[3]==0||arAngka[4]==0);
		
		var angkaFix = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
		
		var SoalBenar = [
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[0]*10000),
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[1]*1000),
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[2]*100),
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[3]*10),
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[4]*1)
					   ]
		var SoalSalah = [
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[0]*1000),
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[0]*100),
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[0]*10),
					   "Angka "+arAngka[0]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[0]*1),
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[1]*10000),
					   
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[1]*100),
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[1]*10),
					   "Angka "+arAngka[1]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[1]*1),
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[2]*10000),
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[2]*1000),
					   
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[2]*10),
					   "Angka "+arAngka[2]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[2]*1),
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[3]*10000),
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[3]*1000),
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[3]*100),
					   
					   "Angka "+arAngka[3]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[3]*1),
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[4]*10000),
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[4]*1000),
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[4]*100),
					   "Angka "+arAngka[4]+" pada bilangan yang menunjukkan luas kebun binatang menepati nilai "+StringRibuan(arAngka[4]*10)
					   
					   ];
					   
		
		SoalBenar = RandomMyArray(SoalBenar);
		SoalSalah = RandomMyArray(SoalSalah);
		
		var model = RandomAngkaAtoB(-1,4);
		ArBenar = ["(1) dan (2)",
				   "(1), (2), dan (3)",
				   "(1), (2), dan (4)",
				   "(1), (2), (3), dan (4)"];
		ArSalah = ["(1) dan (2)",
				   "(1), (2), dan (3)",
				   "(1), (2), dan (4)",
				   "(1), (2), (3), dan (4)"];
				   
		var soalFix = [];
		if(model==0){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalSalah[0];
			soalFix[3] = "(4) "+SoalSalah[1];
		}else if(model==1){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalBenar[2];
			soalFix[3] = "(4) "+SoalSalah[0];
		}else if(model==2){
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalSalah[0];
			soalFix[3] = "(4) "+SoalBenar[2];
		}else{
			soalFix[0] = "(1) "+SoalBenar[0];
			soalFix[1] = "(2) "+SoalBenar[1];
			soalFix[2] = "(3) "+SoalBenar[2];
			soalFix[3] = "(4) "+SoalBenar[3];
		}
		
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [angkaFix,soalFix];
		var arrSalah = [];
		
		var benar = ArBenar[model];
		arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
	function MyBilanganCacah18(){
		var arAngka = [0,1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0);
		
		function NamaKeAngka(ar){
			var depan,tengah,akhir
			var mm,nn,mmcvtr,nncvrt
			var belas = ["sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"];
			var angka = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh"];
			
			// depan
			if(ar[0]==1){
				nn = ar[0]*10+ar[1]
				nncvrt = nn-10;
				depan = belas[nncvrt]+" ribu";
			}else{
				mm = ar[0];
				nn = ar[1];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				depan = angka[mmcvrt]+" puluh "+angka[nncvrt]+" ribu";
				if(nn==0)	depan = angka[mmcvrt]+" puluh ribu";
			}
			// tengah
			mm = ar[2];
			mmcvrt = mm-1;
			tengah = angka[mmcvrt]+" ratus";
			if(mmcvrt==0)	tengah = "seratus";
			if(mm==0)		tengah = "";
			// belakang
			if(ar[3]==1){
				nn = ar[3]*10+ar[4]
				nncvrt = nn-10;
				belakang = belas[nncvrt];
			}else{
				mm = ar[3];
				nn = ar[4];
				mmcvrt = mm-1;
				nncvrt = nn-1;
				belakang = angka[mmcvrt]+" puluh "+angka[nncvrt];
				if(nn==0)	belakang = angka[mmcvrt]+" puluh";
				if(mm==0)	belakang = angka[nncvrt];
			}
			var bfix = depan+" "+tengah+" "+belakang;
			return bfix;
		}
		var bacaFix = NamaKeAngka([arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]]);
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var ArSalah = [];
		var ff
		for(var i=0;i<4;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = arr4Salah[0]+""+arr4Salah[1]+"."+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4];
					for(var j=0;j<ArSalah.length;j++){
						ff = ArSalah[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSalah.push(infix);
			}
		}
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [bacaFix];
		var arrSalah = [];
		
		var benar = angkaFix;
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
	function MyBilanganCacah19(){
		var arAngka = [1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0);
		
		var angkaFix = arAngka[0]+""+arAngka[1]+"."+arAngka[2]+""+arAngka[3]+""+arAngka[4];
		
		var jawBenar = StringRibuan(arAngka[0]*10000)+" + "+StringRibuan(arAngka[1]*1000)+" + "+(arAngka[2]*100)+" + "+(arAngka[3]*10)+" + "+arAngka[4];
		var jawSalah = [
						arAngka[0]+" + "+arAngka[1]+" + "+arAngka[2]+" + "+arAngka[3]+" + "+arAngka[4],
						StringRibuan((arAngka[0]+""+arAngka[1])*100)+" + "+(arAngka[2]+""+arAngka[3]+""+arAngka[4]),
						(arAngka[0]+""+arAngka[1])+" + "+(arAngka[2]+""+arAngka[3]+""+arAngka[4]),
						(arAngka[0]+""+arAngka[1])+" + "+(arAngka[2]+""+arAngka[3])+" + "+arAngka[4],
						(arAngka[0]+""+arAngka[1])+" + "+arAngka[2]+" + "+(arAngka[3]+""+arAngka[4]),
						StringRibuan((arAngka[0]+""+arAngka[1])*100)+" + "+arAngka[2]*10+" + "+(arAngka[3]+""+arAngka[4])
						]
		
		jawSalah = RandomMyArray(jawSalah);
	
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [angkaFix];
		var arrSalah = [];
		
		var benar = jawBenar;
		arrSalah = jawSalah;
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
	function MyBilanganCacah20(){
		var arAngka = [1,2,3,4,5,6,7,8,9];
		do{
			arAngka = RandomMyArray(arAngka);
		}while(arAngka[0]==0);
		
		var angkaFix = Number(arAngka[0]+""+arAngka[1]+""+arAngka[2]+""+arAngka[3]+""+arAngka[4]);
		
		var arr4Salah = [arAngka[0],arAngka[1],arAngka[2],arAngka[3],arAngka[4]];
		var ArSoal = [];
		var ff
		for(var i=0;i<3;i++){
			arr4Salah = RandomMyArray(arr4Salah);
			if(i==0){
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					ff = angkaFix == infix;
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSoal.push(infix);
			}else{
				do{
					arr4Salah = RandomMyArray(arr4Salah);
					var arinfix = [];
					var infix = Number(arr4Salah[0]+""+arr4Salah[1]+""+arr4Salah[2]+""+arr4Salah[3]+""+arr4Salah[4]);
					for(var j=0;j<ArSoal.length;j++){
						ff = ArSoal[j] == infix;
						if(ff) break;
					}
				}while(ff || arr4Salah[0]!==arAngka[0] || arr4Salah[1]!==arAngka[1])
				ArSoal.push(infix);
			}
		}
		
		ArBenar = [ArSoal[0],ArSoal[1],ArSoal[2]];
		ArBenar.sort(function(a, b){return b-a}); // besar ke kecil
		//ArSalah[0].sort(function(a, b){return a-b}); // kecil ke besar
		if(arraysAreEqual(ArBenar, ArSoal)){
			ArSoal = RandomMyArray(ArSoal);
		}
		
		var ArSalah = [];
		
		function arraysAreEqual(arr1, arr2) {
			if (arr1.length !== arr2.length) {
			   return false;
			}
			return arr1.every((val, index) => val === arr2[index]);
		}
		
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				for(var k=0;k<3;k++){
					ff = i==j || i==k || j==k;
					if(!ff){
						//console.log(i,j,k,l)
						var theAngka = [ArSoal[i],ArSoal[j],ArSoal[k]]
						ArSalah.push(theAngka);
					}
				}
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [ArSoal];
		var arrSalah = [];
		
		var benar = ArBenar;
		arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arrSalah[1]==arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar);
		}while(ff1);
		
		fix.push(ArSisi);
		fix.push(benar);
		fix.push(arrSalah);
		
		return fix;
	}
    
	
	function GetSoal1(){
		const Aljabar = MyBilanganCacah1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Bilangan "+ArSisi[0]+" dapat ditulis  ....";
		
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
		const Aljabar = MyBilanganCacah2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Harga sebuah sandal "+ArSisi[0]+" rupiah. Lambang bilangan tersebut dapat dibaca ....";
		
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
		const Aljabar = MyBilanganCacah3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Angka "+ArSisi[0]+" pada lambang bilangan "+ArSisi[1]+" mempunyai nilai tempat ....";
		
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
		const Aljabar = MyBilanganCacah4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = Nama[0]+" mempunyai bilangan "+ArSisi[0]+" puluh ribuan "+ArSisi[1]+" ribuan "+ArSisi[2]+" ratusan "+ArSisi[3]+" puluhan "+ArSisi[4]+" satuan. Bilangan tersebut adalah ....";
		
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
		const Aljabar = MyBilanganCacah5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Nilai angka "+ArSisi[0]+" pada bilangan "+ArSisi[1]+" adalah ....";
		
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
		const Aljabar = MyBilanganCacah6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Diketahui bilangan sebagai berikut "+StringRibuan(ArSisi[0][0])+" ; "+StringRibuan(ArSisi[0][1])+" ; "+StringRibuan(ArSisi[0][2])+" ; "+StringRibuan(ArSisi[0][3])+". <br>Jika diurutkan dari yang terbesar menjadi ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		Ar[0] = BreakToTitikKoma(Ar[0]);
		Ar[1] = BreakToTitikKoma(Ar[1]);
		Ar[2] = BreakToTitikKoma(Ar[2]);
		Ar[3] = BreakToTitikKoma(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyBilanganCacah7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Pertidaksamaan berikut yang benar adalah ....";
		
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
		const Aljabar = MyBilanganCacah8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Bilangan di bawah ini yang merupakan hasil penjumlahan dari "+StringRibuan(ArSisi[0])+" dan "+StringRibuan(ArSisi[1])+" adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0]+1000*(RandomAngkaAtoB(-2,3));
		Ar[2] = arrSalah[1]+1000*(RandomAngkaAtoB(-2,3));
		Ar[3] = arrSalah[2]+1000*(RandomAngkaAtoB(-2,3));
		
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
	function GetSoal9(){
		const Aljabar = MyBilanganCacah9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Bilangan di bawah ini yang merupakan hasil pengurangan dari "+StringRibuan(ArSisi[0])+" dan "+StringRibuan(ArSisi[1])+" adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0]+1000*(RandomAngkaAtoB(-2,3));
		Ar[2] = arrSalah[1]+1000*(RandomAngkaAtoB(-2,3));
		Ar[3] = arrSalah[2]+1000*(RandomAngkaAtoB(-2,3));
		
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
	function GetSoal10(){
		const Aljabar = MyBilanganCacah10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Bilangan di bawah ini yang merupakan hasil dari "+StringRibuan(ArSisi[0])+" × "+ArSisi[1]+" adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0]+1000*(RandomAngkaAtoB(-2,3));
		Ar[2] = arrSalah[1]+1000*(RandomAngkaAtoB(-2,3));
		Ar[3] = arrSalah[2]+1000*(RandomAngkaAtoB(-2,3));
		
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
	function GetSoal11(){
		const Aljabar = MyBilanganCacah11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		
		ss = "Hasil dari "+StringRibuan(ArSisi[0])+" : "+ArSisi[1]+" adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0]+1000*(RandomAngkaAtoB(-2,3));
		Ar[2] = arrSalah[1]+1000*(RandomAngkaAtoB(-2,3));
		Ar[3] = arrSalah[2]+1000*(RandomAngkaAtoB(-2,3));
		
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
	function GetSoal12(){
		const Aljabar = MyBilanganCacah12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Dalam "+ArSisi[1]+" karung dapat memuat "+StringRibuan(ArSisi[0])+" buah jeruk. Maka banyak buah jeruk tiap karung adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0]+1000*(RandomAngkaAtoB(-2,3));
		Ar[2] = arrSalah[1]+1000*(RandomAngkaAtoB(-2,3));
		Ar[3] = arrSalah[2]+1000*(RandomAngkaAtoB(-2,3));
		
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
	function GetSoal13(){
		const Aljabar = MyBilanganCacah13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Jumlah uang "+Nama[0]+" dan "+Nama[1]+" Rp"+StringRibuan(ArSisi[0])+",00. Jika uang "+Nama[0]+" Rp"+StringRibuan(ArSisi[1])+",00 maka uang "+Nama[1]+" adalah ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = "Rp"+StringRibuan(Ar[0])+",00";
		Ar[1] = "Rp"+StringRibuan(Ar[1])+",00";
		Ar[2] = "Rp"+StringRibuan(Ar[2])+",00";
		Ar[3] = "Rp"+StringRibuan(Ar[3])+",00";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MyBilanganCacah14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Dalam sehari semalam kita dianjurkan untuk mengkonsumsi air minum sebanyak "+StringRibuan(ArSisi[0])+" ml. <br>Maka dalam waktu seminggu kita membutuhkan air minum sebanyak .... ml.";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0])+" ml";
		Ar[1] = StringRibuan(Ar[1])+" ml";
		Ar[2] = StringRibuan(Ar[2])+" ml";
		Ar[3] = StringRibuan(Ar[3])+" ml";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal15(){
		const Aljabar = MyBilanganCacah15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Harga 1 buah buku tulis Rp"+StringRibuan(ArSisi[0])+",00. Apabila ayah membeli "+ArSisi[1]+" buku tulis, maka ayah harus membayar sebesar ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		Ar[0] = "Rp"+StringRibuan(Ar[0])+",00";
		Ar[1] = "Rp"+StringRibuan(Ar[1])+",00";
		Ar[2] = "Rp"+StringRibuan(Ar[2])+",00";
		Ar[3] = "Rp"+StringRibuan(Ar[3])+",00";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal16(){
		const Aljabar = MyBilanganCacah16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Sebuah kebun binatang mempunyai luas lahan mencapai "+StringRibuan(ArSisi[0])+" km². Simaklah pernyataan-pernyataan berikut ini!<br>";
		ss += ""+ArSisi[1][0]+"<br>";
		ss += ""+ArSisi[1][1]+"<br>";
		ss += ""+ArSisi[1][2]+"<br>";
		ss += ""+ArSisi[1][3]+"<br>";
		ss += "Pernyataan yang benar ditunjukkan pada nomor ....";
		
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
		const Aljabar = MyBilanganCacah17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Sebuah Taman Nasional mempunyai mempunyai luas lahan mencapai "+StringRibuan(ArSisi[0])+" km². Simaklah pernyataan-pernyataan berikut ini!<br>";
		ss += ""+ArSisi[1][0]+"<br>";
		ss += ""+ArSisi[1][1]+"<br>";
		ss += ""+ArSisi[1][2]+"<br>";
		ss += ""+ArSisi[1][3]+"<br>";
		ss += "Pernyataan yang benar ditunjukkan pada nomor ....";
			

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
		const Aljabar = MyBilanganCacah18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Sebuah pulau memiliki luas kira-kira "+ArSisi[0]+" kilo meter persegi. Maka luas pulau tersebut bisa ditulis ....";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar+" km²";
		Ar[1] = arrSalah[0]+" km²";
		Ar[2] = arrSalah[1]+" km²";
		Ar[3] = arrSalah[2]+" km²";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar))
		return ArFix;
	}
	function GetSoal19(){
		const Aljabar = MyBilanganCacah19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Bilangan  "+ArSisi[0]+" apabila didekomposisikan menjadi ....";
		
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
		const Aljabar = MyBilanganCacah20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var NamaBil = NamaBilangan();
		var ss
		
		ss = "Jumlah penduduk di Desa Aman adalah "+StringRibuan(ArSisi[0][0])+" jiwa. Jumlah penduduk di Desa Bersih sebanyak "+StringRibuan(ArSisi[0][1])+" jiwa. Sedangkan jumlah penduduk di Cerah Ceria sebanyak "+StringRibuan(ArSisi[0][2])+" jiwa. Urutkan Desa dari yang memiliki penduduk yang paling banyak!";
		
		var Ar = [];
		var ArFix = [];
		// jawaban
		
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		Ar[0] = BreakToTitikKoma(Ar[0]);
		Ar[1] = BreakToTitikKoma(Ar[1]);
		Ar[2] = BreakToTitikKoma(Ar[2]);
		Ar[3] = BreakToTitikKoma(Ar[3]);
		
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
	
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 1 \u{2192} Bilangan Cacah sampai dengan 100.000 </p>";
	
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

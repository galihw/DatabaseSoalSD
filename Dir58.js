function Print58(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function MyData1(){var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = [0,0,0,0,0,0];
		var aa = 60;
		for(var i=0;i<6;i++){
			arrData[i] = aa+RandomAngkaAtoB(1,5);
			aa = arrData[i];
			getData[i]=aa;
		}
		var arrndata = [0,0,0,0,0,0];
		
		do{
			for(var i=0;i<3;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else if(arrData[0]==getData[4]) arrndata[4]++;
					else 					arrndata[5]++;
				}
			}
		}while(arrndata[0]==0 || arrndata[1]==0 || arrndata[2]==0 || arrndata[3]==0 || arrndata[4]==0 || arrndata[5]==0)
		
		var ArSisi=[data];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = arrndata[0];
		var salah1 = arrndata[0]+1;
		var salah2 = arrndata[0]+2;
		var salah3 = arrndata[0]+3;
		var salah4 = arrndata[0]+4;
		var salah5 = arrndata[0]-1;
		var salah6 = arrndata[0]-2;
		var salah7 = arrndata[0]-3;
		var salah8 = arrndata[0]-4;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData2(){
		var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = [0,0,0,0,0,0];
		var aa = 60;
		for(var i=0;i<6;i++){
			arrData[i] = aa+RandomAngkaAtoB(1,5);
			aa = arrData[i];
			getData[i]=aa;
		}
		var arrndata = [0,0,0,0,0,0];
		
		do{
			for(var i=0;i<3;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else if(arrData[0]==getData[4]) arrndata[4]++;
					else 					arrndata[5]++;
				}
			}
		}while(arrndata[0]==0 || arrndata[1]==0 || arrndata[2]==0 || arrndata[3]==0 || arrndata[4]==0 || arrndata[5]==0)
		
		var ArSisi=[data];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = getData[5];
		var salah1 = getData[5]+1;
		var salah2 = getData[5]+2;
		var salah3 = getData[5]+3;
		var salah4 = getData[5]+4;
		var salah5 = getData[5]-1;
		var salah6 = getData[5]-2;
		var salah7 = getData[5]-3;
		var salah8 = getData[5]-4;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData3(){
		var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = [0,0,0,0,0,0];
		var aa = 60;
		for(var i=0;i<6;i++){
			arrData[i] = aa+RandomAngkaAtoB(1,5);
			aa = arrData[i];
			getData[i]=aa;
		}
		var arrndata = [0,0,0,0,0,0];
		
		var imax = 3;
		var jmax = imax+RandomAngkaAtoB(1,4);
		
		do{
			for(var i=0;i<imax;i++){
				for(var j=0;j<jmax;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else if(arrData[0]==getData[4]) arrndata[4]++;
					else 					arrndata[5]++;
				}
			}
		}while(arrndata[0]==0 || arrndata[1]==0 || arrndata[2]==0 || arrndata[3]==0 || arrndata[4]==0 || arrndata[5]==0)
		
		var ArSisi=[data,imax,jmax];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = imax*(jmax);
		var salah1 = imax*(jmax-1);
		var salah2 = imax*(jmax-2);
		var salah3 = imax*(jmax-3);
		var salah4 = imax*(jmax+1);
		var salah5 = imax*(jmax+2);
		var salah6 = imax*(jmax+3);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData4(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [155,157,160,162,165];
		var arrndata = [0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = 5;
		
		arrndata = [0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrndata[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrndata[i];
		}
		
		var dbanyak = getData[0]
		var tbanyak = arrndata[0]
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrndata[i])
			if(tbanyak<arrndata[i]){
				dbanyak = getData[i];
				tbanyak = arrndata[i];
			}
		}
		
		var ArSisi=[arrndata,total];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = dbanyak;
		var salah1 = getData[0];
		var salah2 = getData[1];
		var salah3 = getData[2];
		var salah4 = getData[3];
		var salah5 = getData[4];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData5(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [155,157,160,162,165];
		var arrndata = [0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = 5;
		
		arrndata = [0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrndata[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrndata[i];
		}
		
		var dbanyak = getData[0]
		var tbanyak = arrndata[0]
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrndata[i])
			if(tbanyak<arrndata[i]){
				dbanyak = getData[i];
				tbanyak = arrndata[i];
			}
		}
		
		var iGet = RandomAngkaAtoB(-1,imax);
		var TinggiGet = getData[iGet];
		var FrekuensiGet = arrndata[iGet];
		
		
		var ArSisi=[arrndata,total,TinggiGet];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = FrekuensiGet;
		var salah1 = arrndata[0];
		var salah2 = arrndata[1];
		var salah3 = arrndata[2];
		var salah4 = arrndata[3];
		var salah5 = arrndata[4];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData6(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [155,157,160,162,165];
		var arrndata = [0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = 5;
		
		arrndata = [0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrndata[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrndata[i];
		}
		
		var dbanyak = getData[0]
		var tbanyak = arrndata[0]
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrndata[i])
			if(tbanyak<arrndata[i]){
				dbanyak = getData[i];
				tbanyak = arrndata[i];
			}
		}
		
		var iGet = RandomAngkaAtoB(-1,imax);
		var TinggiGet = getData[iGet];
		var FrekuensiGet = arrndata[iGet];
		
		var selisihMaxMin = Math.abs(arrndata[4] - arrndata[0]);
		
		var ArSisi=[arrndata,total];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = selisihMaxMin;
		var salah1 = selisihMaxMin-1;
		var salah2 = selisihMaxMin-2;
		var salah3 = selisihMaxMin-3;
		var salah4 = selisihMaxMin+3;
		var salah5 = selisihMaxMin+2;
		var salah6 = selisihMaxMin+1;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData7(){
		var data = [];
		var arrData = [0,0,0,0,0,0,0];
		var getData = [75,77,80,85,87,90,95];
		var arrNdata = [0,0,0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = getData.length;
		
		do{
			data = [];
			arrndata = [0,0,0,0,0,0,0];
			for(var i=0;i<imax;i++){
				var n = RandomAngkaAtoB(0,6);
				arrndata[i] = n;
				for(var j=0;j<n;j++){
					data.push(getData[i]);
					//console.log(i," ",getData[i]," ",arrndata[i])
				}
			}
			
			data = RandomMyArray(data);
			
			var total = 0;
			for(var i=0;i<imax;i++){
				total +=arrndata[i];
			}
		}while(total!==25);
		
		var arrAcak = [].concat(arrndata)
		var arrSalah = []
		for(var i=0;i<6;i++){
			arrAcak = RandomMyArray(arrAcak);
			arrSalah[i] = [].concat(arrAcak)
		}
		var ArSisi=[]
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = arrndata;
		var salah1 = arrSalah[0];
		var salah2 = arrSalah[1];
		var salah3 = arrSalah[2];
		var salah4 = arrSalah[3];
		var salah5 = arrSalah[4];
		var salah6 = arrSalah[5];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		var arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arraysAreEqual(arrSalah[0], benar) || arraysAreEqual(arrSalah[1], benar) || arraysAreEqual(arrSalah[2], benar)
			ff2 = arraysAreEqual(arrSalah[0], arrSalah[1]) || arraysAreEqual(arrSalah[0], arrSalah[2]) || arraysAreEqual(arrSalah[1], arrSalah[2])
			
		}while(ff1 || ff2);
		
		var Abjad = ["A","B","C","D"];
		Abjad = RandomMyArray(Abjad);
		if(Abjad[0]=="A"){
			ArSisi=[data,arrndata,arrSalah[0],arrSalah[1],arrSalah[2],"A"];
		}else if(Abjad[0]=="B"){
			ArSisi=[data,arrSalah[0],arrndata,arrSalah[1],arrSalah[2],"B"];
		}else if(Abjad[0]=="C"){
			ArSisi=[data,arrSalah[0],arrSalah[1],arrndata,arrSalah[2],"C"];
		}else{
			ArSisi=[data,arrSalah[0],arrSalah[1],arrSalah[2],arrndata,"D"];
		}
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData8(){
		var data = [];
		var arrData = [0,0,0,0];
		var getData = [2022,2023,2024,2025];
		var arrNdata = [0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
		arrAngka = RandomMyArray(arrAngka);
		var imax = getData.length;
		
		for(var i=0;i<imax;i++){
			arrNdata[i] = arrAngka[i];
		}
		var frekmax = 0;
		var thnmax = 0;
		for(var i=0;i<imax;i++){
			if(frekmax<arrNdata[i]){
				frekmax=arrNdata[i]
				thnmax=getData[i]
			}
		}
		
		var arrBenar = ["Tahun "+thnmax+" penjualan beras paling banyak",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[3]+" ton"
						]
						
		var arrSalah = ["Tahun "+getData[0]+" penjualan beras paling banyak",
						"Tahun "+getData[1]+" penjualan beras paling banyak",
						"Tahun "+getData[2]+" penjualan beras paling banyak",
						"Tahun "+getData[3]+" penjualan beras paling banyak",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						]
		
		
		var ArSisi=[getData,arrNdata];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrBenar[0];
		do{
			var palingbanyak = "Tahun "+thnmax+" penjualan beras paling banyak";
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]==palingbanyak || arrSalah[1]==palingbanyak || arrSalah[2]==palingbanyak;
			
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData9(){
		var data = [];
		var arrData = [0,0,0,0];
		var getData = [2022,2023,2024,2025];
		var arrNdata = [0,0,0,0];
		//var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
		var arrAngka = [0,5,10,15,20,25,30];
		arrAngka = RandomMyArray(arrAngka);
		var imax = getData.length;
		
		for(var i=0;i<imax;i++){
			arrNdata[i] = arrAngka[i]+RandomAngkaAtoB(0,3);
			arrNdata[i] = Math.min(arrNdata[i],30);
		}
		var frekmax = 0;
		var thnmax = 0;
		for(var i=0;i<imax;i++){
			if(frekmax<arrNdata[i]){
				frekmax=arrNdata[i]
				thnmax=getData[i]
			}
		}
		
		var arrBenar = ["Tahun "+thnmax+" penjualan beras paling banyak",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[3]+" ton"
						]
						
		var arrSalah = ["Tahun "+getData[0]+" penjualan beras paling banyak",
						"Tahun "+getData[1]+" penjualan beras paling banyak",
						"Tahun "+getData[2]+" penjualan beras paling banyak",
						"Tahun "+getData[3]+" penjualan beras paling banyak",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[0]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						"Tahun "+getData[1]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[2]+" penjualan beras mencapai "+arrNdata[3]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[0]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[1]+" ton",
						"Tahun "+getData[3]+" penjualan beras mencapai "+arrNdata[2]+" ton",
						]
						
		var isoal = RandomAngkaAtoB(-1,4)
		
		var ArSisi=[getData[isoal],arrNdata];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		arrBenar = RandomMyArray(arrBenar);
		var benar = arrNdata[isoal];
		var salah1 = benar-2;
		var salah2 = benar-4;
		var salah3 = benar-6;
		var salah4 = benar+6;
		var salah5 = benar+4;
		var salah6 = benar+2;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		var arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
			ff4 = arrSalah[0]>30 || arrSalah[1]>30 || arrSalah[2]>30;
			
		}while(ff1 || ff2 || ff3 || ff4);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData10(){
		var data = [];
		var arrData = [0,0,0,0];
		var getData = [2022,2023,2024,2025];
		var arrNdata = [0,0,0,0];
		//var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
		var arrAngka = [0,5,10,15,20,25,30];
		arrAngka = RandomMyArray(arrAngka);
		var imax = getData.length;
		
		for(var i=0;i<imax;i++){
			arrNdata[i] = arrAngka[i]+RandomAngkaAtoB(0,3);
			arrNdata[i] = Math.min(arrNdata[i],30);
		}
		var frekmax = 0;
		var thnmax = 0;
		for(var i=0;i<imax;i++){
			if(frekmax<arrNdata[i]){
				frekmax=arrNdata[i]
				thnmax=getData[i]
			}
		}
		var isoal = RandomAngkaAtoB(-1,4);
		var harga1kg = 1000*RandomAngkaAtoB(5,4);
		var tonfix = arrNdata[isoal];
		var hargatotal = 1000*harga1kg*tonfix;
		
		var ArSisi=[getData[isoal],arrNdata,harga1kg];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = hargatotal;
		var salah1 = 1000*harga1kg*arrNdata[0];
		var salah2 = 1000*harga1kg*arrNdata[1];
		var salah3 = 1000*harga1kg*arrNdata[2];
		var salah4 = 1000*harga1kg*arrNdata[3];
		var salah5 = (hargatotal-1000*harga1kg);
		var salah6 = (hargatotal+1000*harga1kg);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		var arrSalah = RandomMyArray(arrSalah);
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
			
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData11(){
		var JobName = [
						"petani",
						"pedagang",
						"penjahit",
						"polisi",
						"guru",
						"buruh"
						];
		var ArAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		ArAngka = RandomMyArray(ArAngka);
		
		var imax = JobName.length;
		
		var frekmax = 0;
		var Jobmax = "";
		var arFrek = [0,0,0,0,0,0];
		for(var i=0;i<imax;i++){
			arFrek[i] = ArAngka[i];
			if(frekmax<ArAngka[i]){
				frekmax=ArAngka[i];
				Jobmax=JobName[i];
			}
		}
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [arFrek];
		var arrSalah = [];
		
		var benar = Jobmax;
		var salah1 = JobName[0];
		var salah2 = JobName[1];
		var salah3 = JobName[2];
		var salah4 = JobName[3];
		var salah5 = JobName[4];
		var salah6 = JobName[5];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
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
	function MyData12(){
		var arBenar = ["diagram balok","diagram kubus","diagram kerucut","diagram bola","diagram tabung"];
		var arSalah = ["diagram batang","diagram garis","diagram lingkaran"];
		arBenar = RandomMyArray(arBenar);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = arBenar[0];
		var arrSalah = arSalah;
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
	function MyData13(){
		var arrData = [0,0,0,0,0,0];
		var getData = [14,15,16,17,18,19,20,21,22];
		do{
			var total = 0;
			for(var i=0;i<getData.length;i++){
				arrData[i] = RandomAngkaAtoB(0,5);
				total+=arrData[i];
			}
		}while(total!==25);
		
		var Data = [];
		var Batas = RandomAngkaAtoB(15,5);
		var totalBatas = 0;
		for(var i=0;i<getData.length;i++){
			for(var j=0;j<arrData[i];j++){
				getData = RandomMyArray(getData);
				Data.push(getData[0]);
				if(getData[0]<Batas){
					totalBatas++;
				}
			}
		}
		
		Data = RandomMyArray(Data);
		
		var ArSisi=[Data,Batas];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = totalBatas;
		var salah1 = totalBatas+1;
		var salah2 = totalBatas+2;
		var salah3 = totalBatas+3;
		var salah4 = totalBatas+4;
		var salah5 = totalBatas-1;
		var salah6 = totalBatas-2;
		var salah7 = totalBatas-3;
		var salah8 = totalBatas-4;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData14(){
		var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = ["Bulu Tangkis","Bola Voli","Menyanyi","Menari","Menggambar","Sepak Bola"];
		
		var arrNData = [0,0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = arrData.length;
		
		arrNData = [0,0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrNData[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrNData[i];
		}
		
		var NamaMax = getData[0];
		var FrekMax = arrNData[0];
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrNData[i])
			if(FrekMax<arrNData[i]){
				NamaMax = getData[i];
				FrekMax = arrNData[i];
			}
		}
		
		var iSoal = RandomAngkaAtoB(-1,imax);
		var FrekSoal = arrNData[iSoal];
		var NamaSoal = getData[iSoal];
		
		var ArSisi=[arrNData,total,NamaSoal];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = FrekSoal;
		var salah1 = arrNData[0];
		var salah2 = arrNData[1];
		var salah3 = arrNData[2];
		var salah4 = arrNData[3];
		var salah5 = arrNData[4];
		var salah6 = arrNData[5];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData15(){
		var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = ["Bulu Tangkis","Bola Voli","Menyanyi","Menari","Menggambar","Sepak Bola"];
		
		var arrNData = [0,0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = arrData.length;
		
		arrNData = [0,0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrNData[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var NamaMax = getData[0];
		var FrekMax = arrNData[0];
		var NamaMin = getData[0];
		var FrekMin = arrNData[0];
		var iMin = -1;
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrNData[i])
			if(FrekMax<arrNData[i]){
				NamaMax = getData[i];
				FrekMax = arrNData[i];
			}
			if(FrekMin>arrNData[i]){
				NamaMin = getData[i];
				FrekMin = arrNData[i];
				iMin = i;
			}
		}
		
		do{
			var iMin2 = RandomAngkaAtoB(-1,imax);
			var NamaMin2 = getData[iMin2];
			var FrekMin2 = arrNData[iMin];
			arrNData[iMin2] = FrekMin;
		}while(iMin2==iMin)
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrNData[i];
		}
		
		var iSoal = RandomAngkaAtoB(-1,imax);
		var FrekSoal = arrNData[iSoal];
		var NamaSoal = getData[iSoal];
		
		var ArSalah = [];
		for(var i=0;i<imax;i++){
			for(var j=0;j<imax;j++){
				var fmin = (i==iMin && j==iMin2) || (j==iMin && i==iMin2);
				if(i!==j){
					if(!fmin)	ArSalah.push(getData[i]+" dan "+getData[j]);
					//else		console.log(getData[i]+" dan "+getData[j])
				}
			}
		}
		
		var ArSisi=[arrNData,total,NamaSoal];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = NamaMin+" dan "+NamaMin2;
		
		var arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData16(){
		var data = [];
		var arrData = [0,0,0,0,0,0];
		var getData = ["Bulu Tangkis","Bola Voli","Menyanyi","Menari","Menggambar","Sepak Bola"];
		
		var arrNData = [0,0,0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		arrAngka = RandomMyArray(arrAngka);
		var imax = arrData.length;
		
		arrNData = [0,0,0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			arrNData[i] = n;
			arrData = RandomMyArray(arrData);
			data.push(arrData[0]);
		}
		
		data = RandomMyArray(data);
		
		var NamaMax = getData[0];
		var FrekMax = arrNData[0];
		var NamaMin = getData[0];
		var FrekMin = arrNData[0];
		var iMin = -1;
		for(var i=0;i<imax;i++){
			//console.log(getData[i],arrNData[i])
			if(FrekMax<arrNData[i]){
				NamaMax = getData[i];
				FrekMax = arrNData[i];
			}
			if(FrekMin>arrNData[i]){
				NamaMin = getData[i];
				FrekMin = arrNData[i];
				iMin = i;
			}
		}
		
		do{
			var iMin2 = RandomAngkaAtoB(-1,imax);
			var NamaMin2 = getData[iMin2];
			var FrekMin2 = arrNData[iMin];
			arrNData[iMin2] = FrekMin;
		}while(iMin2==iMin)
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=arrNData[i];
		}
		
		var AngkaSoal = [0,1,2,3,4,5];
		AngkaSoal = RandomMyArray(AngkaSoal);
		var iSoal = AngkaSoal[0];
		var FrekSoal = arrNData[iSoal];
		var NamaSoal = getData[iSoal];
		var iSoal2 = AngkaSoal[1];
		var FrekSoal2 = arrNData[iSoal2];
		var NamaSoal2 = getData[iSoal2];
		
		var ArSalah = [];
		for(var i=0;i<imax;i++){
			for(var j=i;j<imax;j++){
				var fmin = (i==iSoal && j==iSoal2) || (j==iSoal2 && i==iSoal);
				if(i!==j){
					if(!fmin)	ArSalah.push(Math.abs(arrNData[i]-arrNData[j]));
					//else		console.log(getData[i]+" dan "+getData[j])
				}
			}
		}
		
		var ArSisi=[arrNData,total,NamaSoal,NamaSoal2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = Math.abs(arrNData[iSoal]-arrNData[iSoal2]);
		
		var arrSalah = ArSalah;
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
		}while(ff1 || ff2);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData17(){
		var arBenar = ["pengumpulan data"];
		var arSalah = ["pengolahan data","penafsiran data","kesimpulan"];

		arBenar = RandomMyArray(arBenar);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = arBenar[0];
		var arrSalah = arSalah;
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
	function MyData18(){
		var arBenar = ["mengira-ngira"];
		var arSalah = ["pencatatan langsung","angket","wawancara","kuesioner"];
		
		arBenar = RandomMyArray(arBenar);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = arBenar[0];
		var arrSalah = arSalah;
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
	function MyData19(){
		var arBenar = ["pengolahan data"];
		var arSalah = ["pengumpulan data","penafsiran data","kesimpulan"];

		arBenar = RandomMyArray(arBenar);
		
		var fix = [];
		var ff1,ff2,ff3,ff4;
		var ArSisi = [1];
		var arrSalah = [];
		
		var benar = arBenar[0];
		var arrSalah = arSalah;
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
	function MyData20(){
		var ArrImage = [
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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"
						]
		var ArrNama = ["Ayam Goreng", "Sayuran Hijau", "Ikan Panggang", "Nasi Goreng"];
		
		var no = RandomAngkaAtoB(-1,3);
		var ArDataPersen = [[25,10,45,20],[25,20,25,30],[25,20,15,40]];
		var ArPersen = ArDataPersen[no];
		var FixImage = ArrImage[no];
		
		var noSoal = RandomAngkaAtoB(-1,4);
		var FixNama = ArrNama[noSoal];
		var FixPersen = ArPersen[noSoal];
		var NSiswa = 10*2*RandomAngkaAtoB(10,10);
		
		var FixBanyak = NSiswa*FixPersen/100;
		
		
		var ArSisi=[FixImage,NSiswa,FixNama];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = FixBanyak;
		var salah1 = FixBanyak+1;
		var salah2 = FixBanyak+2;
		var salah3 = FixBanyak+3;
		var salah4 = FixBanyak+4;
		var salah5 = FixBanyak-1;
		var salah6 = FixBanyak-2;
		var salah7 = FixBanyak-3;
		var salah8 = FixBanyak-4;
		var salah9 = NSiswa*ArPersen[0]/100;
		var salah10 = NSiswa*ArPersen[1]/100;
		var salah11 = NSiswa*ArPersen[2]/100;
		var salah12 = NSiswa*ArPersen[3]/100;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData21(){
		var ArrImage = [
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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"
						]
		var ArrNama = ["Ayam Goreng", "Sayuran Hijau", "Ikan Panggang", "Nasi Goreng"];
		
		var no = RandomAngkaAtoB(-1,3);
		var ArDataPersen = [[25,10,45,20],[25,20,25,30],[25,20,15,40]];
		var ArPersen = ArDataPersen[no];
		var FixImage = ArrImage[no];
		
		var ArNoSoal = [0,1,2,3];
		ArNoSoal = RandomMyArray(ArNoSoal);
		var noSoal1 = ArNoSoal[0];
		var noSoal2 = ArNoSoal[1];
		var FixNama1 = ArrNama[noSoal1];
		var FixNama2 = ArrNama[noSoal2];
		var FixPersen1 = ArPersen[noSoal1];
		var FixPersen2 = ArPersen[noSoal2];
		var NSiswa = 10*2*RandomAngkaAtoB(10,10);
		
		var FixBanyak1 = NSiswa*FixPersen1/100;
		var FixBanyak2 = NSiswa*FixPersen2/100;;
		var Selisih = Math.abs(FixBanyak1-FixBanyak2);
		
		
		var ArSisi=[FixImage,NSiswa,FixNama1,FixNama2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = Selisih;
		var salah1 = Selisih+1;
		var salah2 = Selisih+2;
		var salah3 = Selisih+3;
		var salah4 = Selisih+4;
		var salah5 = Selisih-1;
		var salah6 = Selisih-2;
		var salah7 = Selisih-3;
		var salah8 = Selisih-4;
		var salah9 = Math.abs(NSiswa*ArPersen[0]/100-NSiswa*ArPersen[1]/100);
		var salah10 = Math.abs(NSiswa*ArPersen[0]/100-NSiswa*ArPersen[2]/100);
		var salah11 = Math.abs(NSiswa*ArPersen[0]/100-NSiswa*ArPersen[3]/100);
		var salah12 = Math.abs(NSiswa*ArPersen[1]/100-NSiswa*ArPersen[2]/100);
		var salah13 = Math.abs(NSiswa*ArPersen[1]/100-NSiswa*ArPersen[3]/100);
		var salah14 = Math.abs(NSiswa*ArPersen[2]/100-NSiswa*ArPersen[3]/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12,salah13,salah14];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData22(){
		var ArrImage = [
						"data:image/png;base64,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",
						"data:image/png;base64,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",
						"data:image/png;base64,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"
						]
		var ArrNama = ["Ayam Goreng", "Sayuran Hijau", "Ikan Panggang", "Nasi Goreng"];
		
		var no = RandomAngkaAtoB(-1,3);
		var ArDataPersen = [[25,10,45,20],[25,20,25,30],[25,20,15,40]];
		var ArPersen = ArDataPersen[no];
		var FixImage = ArrImage[no];
		
		var ArNoSoal = [0,1,2,3];
		ArNoSoal = RandomMyArray(ArNoSoal);
		var noSoal1 = ArNoSoal[0];
		var noSoal2 = ArNoSoal[1];
		var FixNama1 = ArrNama[noSoal1];
		var FixNama2 = ArrNama[noSoal2];
		var FixPersen1 = ArPersen[noSoal1];
		var FixPersen2 = ArPersen[noSoal2];
		var NSiswa = 10*2*RandomAngkaAtoB(10,10);
		
		var FixBanyak1 = NSiswa*FixPersen1/100;
		var FixBanyak2 = NSiswa*FixPersen2/100;;
		var Jumlah = Math.abs(FixBanyak1+FixBanyak2);
		
		var ArSisi=[FixImage,NSiswa,FixNama1,FixNama2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = Jumlah;
		var salah1 = Jumlah+1;
		var salah2 = Jumlah+2;
		var salah3 = Jumlah+3;
		var salah4 = Jumlah+4;
		var salah5 = Jumlah-1;
		var salah6 = Jumlah-2;
		var salah7 = Jumlah-3;
		var salah8 = Jumlah-4;
		var salah9 = Math.abs(NSiswa*ArPersen[0]/100+NSiswa*ArPersen[1]/100);
		var salah10 = Math.abs(NSiswa*ArPersen[0]/100+NSiswa*ArPersen[2]/100);
		var salah11 = Math.abs(NSiswa*ArPersen[0]/100+NSiswa*ArPersen[3]/100);
		var salah12 = Math.abs(NSiswa*ArPersen[1]/100+NSiswa*ArPersen[2]/100);
		var salah13 = Math.abs(NSiswa*ArPersen[1]/100+NSiswa*ArPersen[3]/100);
		var salah14 = Math.abs(NSiswa*ArPersen[2]/100+NSiswa*ArPersen[3]/100);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12,salah13,salah14];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData23(){
		var arrData = [0,0,0,0];
		var NamaData = [45,50,55,60];
		
		var NilaiData = [0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10];
		arrAngka = RandomMyArray(arrAngka);
		var imax = arrData.length;
		
		NilaiData = [0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			NilaiData[i] = n;
		}
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=NilaiData[i];
		}
		
		var noSoal = [0,1,2,3];
		noSoal = RandomMyArray(noSoal);
		var isoal1 = noSoal[0];
		var isoal2 = noSoal[1];
		var NilaiData1 = NilaiData[isoal1];
		var NilaiData2 = NilaiData[isoal2];
		var NamaData1 = NamaData[isoal1];
		var NamaData2 = NamaData[isoal2];
		
		var Selisih = Math.abs(NilaiData1-NilaiData2);
		
		var ArSisi=[NilaiData,NamaData1,NamaData2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = Selisih;
		var salah1 = Selisih+1;
		var salah2 = Selisih+2;
		var salah3 = Selisih+3;
		var salah4 = Selisih-1;
		var salah5 = Selisih-2;
		var salah6 = Selisih-3;
		var salah7 = Math.abs(NilaiData[0]-NilaiData[1]);
		var salah8 = Math.abs(NilaiData[0]-NilaiData[2]);
		var salah9 = Math.abs(NilaiData[0]-NilaiData[3]);
		var salah10 = Math.abs(NilaiData[1]-NilaiData[2]);
		var salah11 = Math.abs(NilaiData[1]-NilaiData[3]);
		var salah12 = Math.abs(NilaiData[2]-NilaiData[3]);
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9,salah10,salah11,salah12];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyData24(){
		var arrData = [0,0,0,0];
		var NamaData = [45,50,55,60];
		
		var NilaiData = [0,0,0,0];
		var arrAngka = [1,2,3,4,5,6,7,8,9,10];
		arrAngka = RandomMyArray(arrAngka);
		var imax = arrData.length;
		
		NilaiData = [0,0,0,0];
		for(var i=0;i<imax;i++){
			var n = arrAngka[i];
			NilaiData[i] = n;
		}
		
		var total = 0;
		for(var i=0;i<imax;i++){
			total +=NilaiData[i];
		}
		
		var noSoal = [0,1,2,3];
		noSoal = RandomMyArray(noSoal);
		var isoal1 = noSoal[0];
		var isoal2 = noSoal[1];
		var NilaiData1 = NilaiData[isoal1];
		var NilaiData2 = NilaiData[isoal2];
		var NamaData1 = NamaData[isoal1];
		var NamaData2 = NamaData[isoal2];
		
		var Selisih = Math.abs(NilaiData1-NilaiData2);
		
		var ArSisi=[NilaiData,NamaData1,NamaData2];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = total;
		var salah1 = total+1;
		var salah2 = total+2;
		var salah3 = total+3;
		var salah4 = total-1;
		var salah5 = total-2;
		var salah6 = total-3;
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6];
		
		do{
			arrSalah = RandomMyArray(arrSalah);
			ff1 = arrSalah[0]==benar || arrSalah[1]==benar || arrSalah[2]==benar;
			ff2 = arrSalah[0]==arrSalah[1] || arrSalah[0]==arrSalah[2] || arrSalah[1]==arrSalah[2];
			ff3 = arrSalah[0]<=0 || arrSalah[1]<=0 || arrSalah[2]<=0;
		}while(ff1 || ff2 || ff3);
		
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
		
	function GambarData24(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var x0 = 103.5;
			var y0 = 275.5;
			var dx = 60;
			var dy = -25;
			var rr = 5;
			
			ctx.fillStyle = "blue";
			ctx.globalAlpha = 1;
			ctx.beginPath();
			ctx.moveTo(x0+dx*0, y0+dy*Arr[0][0]);
			ctx.arc(x0+dx*0, y0+dy*Arr[0][0], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*1, y0+dy*Arr[0][1]);
			ctx.arc(x0+dx*1, y0+dy*Arr[0][1], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*2, y0+dy*Arr[0][2]);
			ctx.arc(x0+dx*2, y0+dy*Arr[0][2], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*3, y0+dy*Arr[0][3]);
			ctx.arc(x0+dx*3, y0+dy*Arr[0][3], rr, 0, 2 * Math.PI);
			ctx.fill();
			
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.strokeStyle = "blue";
			ctx.moveTo(x0+dx*0, y0+dy*Arr[0][0]);
			ctx.lineTo(x0+dx*1, y0+dy*Arr[0][1]);
			ctx.lineTo(x0+dx*2, y0+dy*Arr[0][2]);
			ctx.lineTo(x0+dx*3, y0+dy*Arr[0][3]);
			ctx.stroke();
			
		}
		return 0;
	}
	function GambarData23(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			var x0 = 103.5;
			var y0 = 275.5;
			var dx = 60;
			var dy = -25;
			var rr = 5;
			
			ctx.fillStyle = "blue";
			ctx.globalAlpha = 1;
			ctx.beginPath();
			ctx.moveTo(x0+dx*0, y0+dy*Arr[0][0]);
			ctx.arc(x0+dx*0, y0+dy*Arr[0][0], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*1, y0+dy*Arr[0][1]);
			ctx.arc(x0+dx*1, y0+dy*Arr[0][1], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*2, y0+dy*Arr[0][2]);
			ctx.arc(x0+dx*2, y0+dy*Arr[0][2], rr, 0, 2 * Math.PI);
			ctx.moveTo(x0+dx*3, y0+dy*Arr[0][3]);
			ctx.arc(x0+dx*3, y0+dy*Arr[0][3], rr, 0, 2 * Math.PI);
			ctx.fill();
			
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.strokeStyle = "blue";
			ctx.moveTo(x0+dx*0, y0+dy*Arr[0][0]);
			ctx.lineTo(x0+dx*1, y0+dy*Arr[0][1]);
			ctx.lineTo(x0+dx*2, y0+dy*Arr[0][2]);
			ctx.lineTo(x0+dx*3, y0+dy*Arr[0][3]);
			ctx.stroke();
			
		}
		return 0;
	}
	function GambarData22(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = Arr[0];
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
		}
		return 0;
	}
	function GambarData21(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = Arr[0];
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
		}
		return 0;
	}
	function GambarData20(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = Arr[0];
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
		}
		return 0;
	}
	function GambarData16(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData15(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData14(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData13(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px arial";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<5;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarData10(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		//console.log("Nomor Gambar : "+Arr)
		let a_image = new Image();
		let b_image = new Image();
		a_image.src = "data:image/png;base64,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";
		b_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAEhCAIAAABdqg9ZAAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAAAFLSURBVHic7c6xEQEBAABBzFdBH0YtAkpRixZUoQaxHgS8l5sRXPSC3Qp2OF/vr3Fa/JnjbjOcLrfHc5x78m2/XQ9zH34y68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzDqzzqwz68w6s86sM+vMOrPOrDPrzLo/nh12m+d7mrvxbVgtP4gYE9CS3JFnAAAAAElFTkSuQmCC";
		
		a_image.onload = function () {		Cek();	}
		b_image.onload = function () {		Cek();	}
		var inside = 0;
		function Cek(){
			var scl;
			inside++;
			if(inside==2){
				var scale = 0.5;
				ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
				for(var i=0;i<4;i++){
					scl = Arr[i]/30 * scale;
					ctx.drawImage(b_image, 65+47*i, 20+144-144*Arr[i]/30,b_image.width*1*scale, b_image.height*1*scl);
				}
			}
		}
		return 0;
	}
	function GambarData9(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		//console.log("Nomor Gambar : "+Arr)
		let a_image = new Image();
		let b_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAAGTCAIAAACwGB+fAAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAACAASURBVHic7d1xaBT53cfxtaRpofHSKv6RWEHOJqlVWrxdJRzxLhqKHCeJexwlAVMjubZIgichsWK4CznJIW44PEmQHi6nJnAhYNakHtJHck1r/hBNKgGtzS6CVEwKEjFkL7bNH3m+z/6eZ7rPbrJOktnd717erz+G2dnJzG9md36f/c38ZpI1Pz8/PT3tAgBAh+9973tZEk6zs7PpLgkAAP/ru9/9bpb14tvf/vaaNWvSWBoAwCr373//24z8J5zWrl37ne98J03lAQCsdvPz8//4xz/MeFbiWQEASD3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgTlLCaSDC7/ebl7W1tcePHy8sLIyZLRgMnjlz5qWzAQBWG+fD6eOPP25ubo6e4o8YHx+PDh5Jr4qKivjZRkZG3G6346UCAGQQ58NJ0qWxsbGystJkzOjoqMfjkRFpJF24cMHMEw6HTTLJnA0NDXl5edKKkpbT8PBwVVWVjDteKgBABnE+nPr6+qJfSkT19/dLFEmryAqnq1evytDr9fp8PjNFGlW9vb35+fmhUGhoaKi0tNTxggEAMkUqOkRs3LgxZooJsJqamuiJ0n6SxpNk2P379wknAFjNUhFOt27dckXO4FlTAoGAa6HQ2rFjhwwHBwfr6upSUDAAgE7JDafJyUlpJNXX18t4Q0NDzLvxHR9yc3OTWh4AQEZISjh1dnaaQDK8Xq9MycvLe+kfbt261f5a/vKXv4TD4eWUDwDghB/+8IevvvpqMpacitN65iTe6dOnHbyH6fe//31/f//XX38t4z/60Y82bdrk1JIBADZlZ2dnUjjVRZjxoaGhc+fOBSImJiYSt58ePHhgcxXnz5+/fv26Ga+pqdm5c+dKCgwAWJKpqam5ubnkLT/pLafSiHfeeUfC6fPPPz958qT11ujoaMxlp+npaRmuW7duSavYtm1beXm5I6UFANhx5coVyafkLT9Fz9YrKyuTcBoZGTEvS0pKhoeHnzx5EhNOd+/edUXyLDWlAgDolKJwMqljHhUhiouLJZwuXrwY3eKZnJw0z9nbtWtXakoFANDJ4XAaHR2tqqr68MMPJWBM9weJnM8//9ykzr59+8xslZWV7e3t0pZqampqaWnJycmRPzx27Jgr0rWPZ78CwCrncDitXbs2FApVV1fHv9Xf32+dxJORtra25ubm9ghrnoKCgsuXLztbJABAxnE4nKTRMzEx8cknn9y6dWt4eNhMjH4OrOXkyZPbt2/3+XxmNomliooK04pytkgAgIzj/DWnvLw863GuiZVHOF4AAECm4z/hAgDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFAnWeEUDAZv3749PT2dm5u7a9euwsLCmBm6u7vl3fg/rKurS1KRAACZwvlwGh0draqqCoVC0RMbGxt9Pl/0lOrq6gX/vLi42O12O14qAEAGcT6c2traJJm8Xm9ZWZm8HBwcDAQC7e3tmzdvjm8VdXR0xEwhmQAAzodTTU1NZ2dnXl6eeSmB1NTUJOFUX18fH06cxAMAxHM+nMrLy2OmNDQ0SDg5viIAwDcVvfUAAOqkIpzu3Lkjw5KSkvi3Ojs7zcimTZv27t2bk5OTgvIAAJRLRThdvHhRhk1NTfFv1dfXR7/s6OhYxlWosbGx3t7e5ZYOALBkMzMzMlzwjiBHJD2curu7A4GANJtirkU1Njb+4Ac/yM3NlfFHjx719/eHQiGTVUvNpxcvXjx//tzBMgMA7JidnU3SkpMbTsFg0NzP5Pf7Y96Kue1JXibo1JdYVlZWdnb2CosKALBvbm5ufn4+eXVvEsNJkqmoqEhGpFUU/4SIeC0tLaZTn/yhnfktHo+npqZmucUEACzZlStXpqam1q9fn6TlJ/HxRVYyxXcuX5DVG8KcygQArFpJCadlJJOYnJw0IzwkAgBWOefDyU4yDQwMxHQcD4fDv/jFL2SktrbW8SIBADKL8+FkkqmkpOTx48fWbUzGtm3bSktLXZHO5RUVFdbz9x49emQ9QuL48eOOFwkAkFmSdc1pOCJmoqSRCSfJpMD/iX739OnTS+oKAQD4RnI+nLq6uha7LUtaTmakrq7u0KFDIyMj9+/fl5eL/c8nAMDq5Hw4HTx40M5sOTk5pRGOFwAAkOl48CsAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOokJZwmJycHBweHhoaePXu2bt260tLSAwcO5OTkxMwWDoevXr360tkAAKuN8+HU3d1dXV0dPcXv95eUlFy/fj06eILB4P79+0OhUPRsBQUFf/rTn/Ly8hwvFQAggzgfTn19fZIx77//fnFxsby8detWfX398PBwa2urz+ezZjPJJKHV1NS0cePGBw8eSKTJlLq6OlmC46UCAGQQ58Pp9OnThYWF1ku3252bmyvB097eboXTwMCA5JBkmNWcktm2bt3q8XgCgYA0qqKXAABYbZwPp/hcOXDgQMwUCScZfvjhh9En+iSfpCElbawbN24QTgCwmqWit97ExETMFL/fL0NpKsVMr6yslHC6e/duCkoFAFArFeF0+/ZtGdbW1sZMLyoqWnD+Z8+eJb1MAADFkh5O4XD4o48+kpEjR47EvBXfa9z0oViqsbGx3t7e5RUPALAMMzMzMpyenk7S8pMeTq2traFQSJpNbrc7Sat48eLF8+fPk7RwAMBiZmdnk7Tk5IbTwMBAe3t7QUHB2bNn7cz/5MmTZawlKysrOzt7GX8IAFieubm5+fn55NW9SQwnSaaKigoZuXbt2oLPfYjvMv748eNlrMjj8dTU1CyrjACA5bhy5crU1NT69euTtPxkhZOVTOPj4/H9wqUtFQqFJiYmYt569OiRDMvKypJUKgBARkhKOCVOJvHGG29IOH355ZelpaXWxHA43N7e7lputwgAwDeG8+H00mQS5eXlfr9fomj37t0y7ookU2trqyvSqEpe1wkAQEZwPpxMMknGnDhxIuatsrKyuro6VyScvF5vIBCQmUtKSjZs2CDjZp5r1645XiQAQGZJ1jWnUET8dBNO4vLly9JUksbT8PCwmSJ5JsnEg4sAAM6H0/j4uLk5K15+fr41npOT4/P5WlpaZH7zFv8pAwBgpOLBrwlIRHGFCQAQg3/TDgBQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOkkMp3A4fOnSpcHBwZqamvLy8ph333vvvWfPnsX/1eXLl3NycpJXKgCAfskKp9HR0aqqqlAoJONlZWXxM/j9/gX/cGJiorCwMEmlAgBkBOfDSRpMra2t7e3tJSUlb7zxxmIhZIyMjMRMIZkAAM6Hk+SNJFNHR0ddXV1nZ2fimd1ut+MFAABkOufDqaioaGJiIi8vz/ElAwBWCefDiVgCAKxQmruSv/POO2Zky5Ytb7/9dmlpaVqLAwBQIc3hFAgErPH29nav17uMruRjY2O9vb1OFw0AsKiZmRkZTk9PJ2n5aQun/v7+V155Ze3atTL+5MmTmzdvSjhJVrW2tvp8viUt6sWLF8+fP09OMQEAi5qdnU3SktMWTtG35brdbnn5s5/9rLq6WiJqqeGUlZWVnZ3tdAEBAIuam5ubn59PXt2r6PFFBw8elHByRW7gXVIXc4/HU1NTk6xiAQDiXLlyZWpqav369UlavqJwsphzfQCAVUtROEmDyYzwkAgAWOXSE04ff/zx66+/Ht1xXJLJ4/HISGNjY1qKBADQw/lwmpycrKurM+P37t2T4aeffjo4OOiKPAHWvDUyMtLc3CwjXq/XzGYeEVtSUtLS0uJ4kQAAmcX5cJqYmIi+e0mEIsy4CaejR48+ffp0eHg4es6Ojo5Dhw7x/zIAAM6Hk9vtjn/WuGH1dCgtLb1582Y4HB4fHzfTuc4EALAk5ZqTzY7g0kjiqeQAgHiKeusBAGAQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFAnieEUDAZPnDgRCAQ6Ojrq6uoWnOHMmTN+v9+8rK2tPX78eGFhYfKKBADICMkKp87Ozvr6+gQzDAwMVFRURE/xR4yMjLjd7iSVCgCQEZwPp8nJyTfffDMUCrW1tcnL5ubm+HnC4bBJpsbGxoaGhry8PGlFSctpeHi4qqpKxh0vFQAggzgfTuPj4zI0DSBpPy04z9WrV2Xo9Xp9Pp+ZUlhY2Nvbm5+fL6k2NDRUWlrqeMEAAJnC+XDyeDwvbfr09fXJsKamJnqitJ+k8eT3++/fv084AcBq5nw45eTkvHSeQCAgw40bN8ZM37FjhwwHBwcX7EABAFgl0tmVPL7jQ25ublpKAgBQRdd9Tlu3bl3GX42NjfX29jpeGADAYmZmZmQ4PT2dpOXrCqflefHixfPnz9NdCgBYdWZnZ5O0ZF3h9ODBg2X8VVZWVnZ2tuOFAQAsZm5ubn5+Pnl1bzrDaXR0NOayk2khrlu3bknL8Xg8MR3/AABJdeXKlampqfXr1ydp+ekJp5KSkuHh4SdPnsSE0927d2VIP3IAWOXSE07FxcUSThcvXiwvL7cmTk5Omufs7dq1Ky2lAgAokZ5wqqysbG9vDwQCTU1NLS0tOTk5o6Ojx44dc0UeG8GzXwFglXM+nILBYFFRUfSU+ghX5LnjFy5ccEXucGpra2tubm6PsOYsKCi4fPmy40UCAGSWlLacnj17Zo2fPHly+/btPp9veHjYFYmliooK04pKZZEAAAo5H06FhYXz8/N25iyPcLwAAIBMp+s+JwAAXIQTAEAhwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqpCKcgsFgUVFR/PSCggJ5KwUFAABkllSE08zMTArWAgD4xkjdaT2v19vX15ey1QEAMhfXnAAA6hBOAAB1CCcAgDqpC6dAILBmzRozXlJS8pvf/ObgwYMpWzsAIIOkp+U0HPG73/3u+vXrOTk5K1za2NhYb2+vIwUDANhhumFPT08nafmpCCe32z0+Pl5YWGheBoPBGzdu1NfXSz5dunSprq5uhct/8eLF8+fPV1xMAMDSzM7OJmnJKWo5Wclkxs1Lyaeenp6Vh1NWVlZ2dvYKFwIAsG9ubm5+fj55dW/aOkQUFxe7Iuf3Vr4oj8dTU1Oz8uUAAGy6cuXK1NTU+vXrk7T8NPfWKygoSG8BAAAKpS2czp8/L8OKiop0FQAAoFYqwmnNmjVdXV27du0yl5qCweCZM2f8fr+MV1ZWpqAAAIDMkqKWU3V1dfzE/v5+t9udmgIAADJIKsJpZGSkp6dHoigUCrki15kqKioaGhry8vJSsHYAQMZJ0X1OwufzpWBdAIBvAJ6tBwBQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOqkOp9HRURnm5+fn5eWleNUAgEyRonAKh8Pnzp1rbm62phQUFHzxxRdutzs1BQAAZJAUhdNbb701PDwsIyUlJRs2bAgEAqFQyOPxjI+PFxYWpqYMAIBMkYpwGhgYMMlkRZE0pExcnThxoq+vLwVlAABkkFSEk8/nk2F/f7/VSMrJyTl79qy0nKQJNTk5yfUnAEC0pIeTNJJMs2nv3r3R091ud0FBQSgUkuYU4QQAiJb0cJLsMSPSWop5a/v27RJO9+/fLy0tTXYxAAAZJEUdIrxeb/zELVu2OLLwGzduSPvMkUUBAOz461//+uMf//inP/1pkpafzptwN2/e7Mhy/ivCkUUBAGyqqalJ3sJ5QgQAQJ0UhdPTp0/jJw4ODqZm7QAAx33/+99/5ZVXkrTwFIWT6bC3oE2bNi1jgW+++WZubu4KSgQAWBGv1/uTn/wkSQtPejhZDygKBoPRD4MIh8OBQEBGdu7cuYzF/va3v3WkeAAAhVLRciopKZGW05kzZy5cuGBNvHTpkivyhD1ucgIAxEhFOJ06dWrPnj1+v1/Gjxw5IsOenp729nYZ+eyzz1JQAABAZklFOJWWljY2Nkoa+SOs6V1dXdx+CwCIl6IOET6fr7KyUhpMDx8+lJcej2ffvn38vwwAwIJSd5+TOyJlqwMAZC5uwgUAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuGk0eTk5J07dx4/fizjxcXFi/0fLDuzhcPhkZGR+/fvy/i2bds8Hk9OTs6y15h2wWDw9u3b09PTubm5u3btKiwsXPZsNjdZFnXjxg0ZSbzGtBsdHb1165aMbNq0aefOnXl5ecuezeZONuQLdvXqVTPzwYMHndgUh9n8oO0cKS+dR2a4dOlS/MJlb5eXlzuyOasH4aSLHEh1dXWBQCB6YklJyfXr12MOg87Ozvr6+pjZ/H6/VZXIcXLu3Lnm5uaYVYyPj0dXN/bXmF5Sq1ZVVYVCoeiJjY2NPp8veops9bFjx2Q/RE+sra09e/astTk2N1nq6P3798esURZ14cIFR7bIKd3d3dXV1TET+/v7Y2pD2Rwp/PDwcPTEjo4O2RXWS5s7OVr0d0xbONn/bg8NDe3Zsyfmz//4xz+WlpaacZtHk7yMOSot8/Pzy9qI1Ytw0qWvr0+OJTl+3nrrLfkp+ujRo/b2dqlQfvnLX8pb1mxWMkl1s2PHDms2eXnz5k0zjxwnciwVFBRUVFRs3rxZftuaQ6uoqGhmZsY6OG2uMe3a2tqk0vR6vWVlZfJycHBQii1FlU2Lrl6l2KYykipV3rp7964/4tVXXz158qSZx+YmnzhxIn6NsijZ4dFrTDuTTOabICOffvqpFFs+dPmNb7USpG6Vz11G5PtQU1MjW93T0yObLN8iaQFYVbDNnWyRwJMvlcwfEwBK2PygJZJNMsmclZWVcqRcvHhR9oNMnJiYMI1Lm0eTIbO9//770VOk5ZSKDf5mIZx0KS4ujq5TxO7du+V4kGNMKgLzG00qGpNM0b+Of/WrX8lxIgfewMCAmZifnx/z8/ndd981NdTVq1etH7l21qiBVKkSydZpKKkrm5qapK6RXWHVm1LLmFoy+ves1LxSfUtVcvjwYfPnNjc5fo3vvfeehJPU/qrCqaur68CBA1b9eOjQIamL5Ztw/vx5q5FnzjVFNxqszfn1r38tW21ms7OTo0kiyvD06dM6w8nmBy2R7Pr/DcSjR4++9tprkk+ffPKJmWjzaDK2b9+u6huSoQgnXeJPiMvxID/E5DiRH2hmyldffeWKVDTRh4ocaXJ0ST1ihZNUMTEndqx55HffktaoQfwp+4aGBtmW6CnSGnBF6proTJWK46OPPpLNkXaAqURsbnL8Go8cOSK1ecxZr7SLqRkleyRRJJyePXtmTZRAleGpU6eif+PLS7M5Vk1tZydburu7ZS0dHR16fsHEsPNBT05OmmRtaWmxZpO9JFstMSZDE042jyY4iHDKPObEXWVlZcz0t99+Ww6VP//5z+kolAry21aG+/bti5kuDQJpOY2Nja3wooip0eRnwUoWknpS/5pAtU7fGVLhyrZIwPztb39basBI813ao1LRS0PNwaKm3p07d2To9XpjTs3t3bvXjMjeW6x3CZKKcNLOqlnMOQTx8OFD10JnsdeuXSvDxL/rTfW9bdu2Ja1RJ1OtREeFKXZ+fn7MnLm5ua7/228LsrPJUh1/8MEHMiLtkhWVO/nMzxePx2NeTkxMuCIXQuLn3LBhgwxNT7YFxe9k49ixYzL84osvVPWaean4D9ps+5YtW2LmtLbLuuwUb7Gj6d69e52dnWY8+pIeloRw0s5cuW1sbIypBTZu3Bgz50uzZHR0VI5MqaQSHy2LrVGbixcvuhaKiviqJHEYuxbfZKvjtbmW7oqcM1TeJ1hC1BT18OHD0dO3b98eP7MEWOLLRQvuZNktfr+/trZW7S0Hi1nsg968eXP8zKZZudiiEhxNMj2mz150xz/YRDipFgwGzbe8oaHhpTMnzhKps6qqqmTks88+c2qNadTd3W06YtmJCtOmXEyCTZZkiq5lvF5v/DlDbUybRkLUzsko06ZczII72foinT17dsWFTamlfrdNs3JBix1N0mq3uk0K01lURvbs2RPTNQMvRTjpJQfA/v37XZGzB3YqGpk/wbtSZ8kPOvnNmOAX3FLXmC5Sy5j+0zH3My0mQc+OxJtcXFzc0dFhxnt6egIRie/7SS+JE9knEidHjx61M3+Ci/mL7eRLly7JF6mrq0t5wzrGMr7bT58+XeytxY4mWXLMbXAS4fGdJ2EH4aSUHEvynTYHwIKNgydPnsT8EBsfH19saU1NTabOiu6StNQ1KiGVpjmBKbXMYo9+iKl9zC398V66ye4IM15XVzc6OurxeNrb23fv3q1wFw0MDFhxEp8c9+7di/8T+Tm/4KIS7GTT+JBUsy6rWMyUQ4cOacutl37Qjx49ip+42Dk9O0eTRXbFqVOnpOUkf0I4LQnhpJE5luTYWPBH+rp161wLXcRerC+ZuVUl8UMfEq9Rj+hKc7F4iL+CbdoHVgcBYxmbLEHV1tbW3Nxs9dfXQ4pUUVHhintmgSthTxnTOIi5JmdnJy/4HAQzUdvjrxJ/0It1lrHOQ8RcyrVzNMVIfFYZiyGc1HlppWnOaPf09MTc6Pfll1/KUP42euKqSibzqII//OEPMZWjuar/+uuvW1OWvcmJL9KkS4JkckXuyDEjQ0ND0aehpIlpGgfRsf3SnWyd54xmYsm8paqT50s/6K1bt8pQvjYyZ/QBYt1NGD1xGcnkipzkcEW+nCvZkFWIcNLFTqX585//3BU55xD9+13qFNNHK/qK/apKJvHOO+9ILSMtm3fffdeqkbu7u02jwaqC7WyyeVpozIpkoqmFVfW8SpxMRm1trd/v/+CDD6K/CaZnfPQtPnZ28oLPPjC7RdtjEex80NbvmNbWVmse+UP5E9f/v5vQztEkX7aYe+lkl5pPR76cK96g1YVw0uXYsWPmx+zmzZtjzulbT32WCsjUNfKlN0+Qszo6y0vrYJPjxEyU4zP+ScnWhQE7a9TAVJpSNTx+/DimnNatJAcOHDD3/8vMbW1tUn7zdDhXpLa1KhQ7mzwxMWHqFKvzlbWTpQyyoqRvsD1W3SflvBER/a78jjFxdfz4cfnCyFa/9tpr5rFv5hF8rsjDh6z57ezkDGLzu93V1VVdXS0f7sOHD8vKyqzn5sl+sG4xtnk0VUdY3xmrt56q70ymIJx0sR45s+A5fetwOnv2rMxpHsppvSvJFH2F1uqIFf8oZVfUhQGba1RiOCJmovz2N/WmVBDXrl0zjxKP3mqpfaLbAXY2Wapp83CamL5qsq7Lly/rueBvdURcsOOi9WwhGUo8S4zF3IIzMjIS39hKvJMziM3vtoz8/e9/ly+M6Y1pJkqc9Pb2Wh+0zaPJnFiO+SzMgannO5MpCCddjh49ah4IHS/6aod80fv6+hL/qyH51bzg5QHDujBgc41pJwGzWL/n6Ov5shNktwwNDZkeegv+1yI7myx72OfzNTQ0jI+Pm0XJW/JX2nrYy+eY4FM2Z4ANiWdJsq+++sp0pVnw3xHZ3MnxpAyqvi2G/e/2yZMnDx8+LO1ss/nxfTpsHk1yVEb/+6jE/1sLiRFOupRG2Jy5MGJ57y5vjWm0pDZc4o2yv8l5EZr3j6SL/Ss9MnPiTobLbihru9pkLOm7LR90gs23eTS5FnpELJaHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFDnP+H09ddf//Of/0xjUQAAuw/A3QAAACVJREFUMP4TTv/617/SWA4AACz/E07Z2dnpLgYAAP/rW9/61n8D0sE2oEewlsUAAAAASUVORK5CYII=";
		b_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {		Cek();	}
		b_image.onload = function () {		Cek();	}
		var inside = 0;
		function Cek(){
			var scl;
			inside++;
			if(inside==2){
				var scale = 0.5;
				ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
				for(var i=0;i<4;i++){
					scl = Arr[i]/30 * scale;
					ctx.drawImage(b_image, 65+47*i, 20+144-144*Arr[i]/30,b_image.width*1*scale, b_image.height*1*scl);
				}
			}
		}
		return 0;
	}
	function GambarData8(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		//console.log("Nomor Gambar : "+Arr)
		let a_image = new Image();
		let b_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAAGTCAIAAACwGB+fAAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAACAASURBVHic7d1xaBT53cfxtaRpofHSKv6RWEHOJqlVWrxdJRzxLhqKHCeJexwlAVMjubZIgichsWK4CznJIW44PEmQHi6nJnAhYNakHtJHck1r/hBNKgGtzS6CVEwKEjFkL7bNH3m+z/6eZ7rPbrJOktnd717erz+G2dnJzG9md36f/c38ZpI1Pz8/PT3tAgBAh+9973tZEk6zs7PpLgkAAP/ru9/9bpb14tvf/vaaNWvSWBoAwCr373//24z8J5zWrl37ne98J03lAQCsdvPz8//4xz/MeFbiWQEASD3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgTlLCaSDC7/ebl7W1tcePHy8sLIyZLRgMnjlz5qWzAQBWG+fD6eOPP25ubo6e4o8YHx+PDh5Jr4qKivjZRkZG3G6346UCAGQQ58NJ0qWxsbGystJkzOjoqMfjkRFpJF24cMHMEw6HTTLJnA0NDXl5edKKkpbT8PBwVVWVjDteKgBABnE+nPr6+qJfSkT19/dLFEmryAqnq1evytDr9fp8PjNFGlW9vb35+fmhUGhoaKi0tNTxggEAMkUqOkRs3LgxZooJsJqamuiJ0n6SxpNk2P379wknAFjNUhFOt27dckXO4FlTAoGAa6HQ2rFjhwwHBwfr6upSUDAAgE7JDafJyUlpJNXX18t4Q0NDzLvxHR9yc3OTWh4AQEZISjh1dnaaQDK8Xq9MycvLe+kfbt261f5a/vKXv4TD4eWUDwDghB/+8IevvvpqMpacitN65iTe6dOnHbyH6fe//31/f//XX38t4z/60Y82bdrk1JIBADZlZ2dnUjjVRZjxoaGhc+fOBSImJiYSt58ePHhgcxXnz5+/fv26Ga+pqdm5c+dKCgwAWJKpqam5ubnkLT/pLafSiHfeeUfC6fPPPz958qT11ujoaMxlp+npaRmuW7duSavYtm1beXm5I6UFANhx5coVyafkLT9Fz9YrKyuTcBoZGTEvS0pKhoeHnzx5EhNOd+/edUXyLDWlAgDolKJwMqljHhUhiouLJZwuXrwY3eKZnJw0z9nbtWtXakoFANDJ4XAaHR2tqqr68MMPJWBM9weJnM8//9ykzr59+8xslZWV7e3t0pZqampqaWnJycmRPzx27Jgr0rWPZ78CwCrncDitXbs2FApVV1fHv9Xf32+dxJORtra25ubm9ghrnoKCgsuXLztbJABAxnE4nKTRMzEx8cknn9y6dWt4eNhMjH4OrOXkyZPbt2/3+XxmNomliooK04pytkgAgIzj/DWnvLw863GuiZVHOF4AAECm4z/hAgDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFAnWeEUDAZv3749PT2dm5u7a9euwsLCmBm6u7vl3fg/rKurS1KRAACZwvlwGh0draqqCoVC0RMbGxt9Pl/0lOrq6gX/vLi42O12O14qAEAGcT6c2traJJm8Xm9ZWZm8HBwcDAQC7e3tmzdvjm8VdXR0xEwhmQAAzodTTU1NZ2dnXl6eeSmB1NTUJOFUX18fH06cxAMAxHM+nMrLy2OmNDQ0SDg5viIAwDcVvfUAAOqkIpzu3Lkjw5KSkvi3Ojs7zcimTZv27t2bk5OTgvIAAJRLRThdvHhRhk1NTfFv1dfXR7/s6OhYxlWosbGx3t7e5ZYOALBkMzMzMlzwjiBHJD2curu7A4GANJtirkU1Njb+4Ac/yM3NlfFHjx719/eHQiGTVUvNpxcvXjx//tzBMgMA7JidnU3SkpMbTsFg0NzP5Pf7Y96Kue1JXibo1JdYVlZWdnb2CosKALBvbm5ufn4+eXVvEsNJkqmoqEhGpFUU/4SIeC0tLaZTn/yhnfktHo+npqZmucUEACzZlStXpqam1q9fn6TlJ/HxRVYyxXcuX5DVG8KcygQArFpJCadlJJOYnJw0IzwkAgBWOefDyU4yDQwMxHQcD4fDv/jFL2SktrbW8SIBADKL8+FkkqmkpOTx48fWbUzGtm3bSktLXZHO5RUVFdbz9x49emQ9QuL48eOOFwkAkFmSdc1pOCJmoqSRCSfJpMD/iX739OnTS+oKAQD4RnI+nLq6uha7LUtaTmakrq7u0KFDIyMj9+/fl5eL/c8nAMDq5Hw4HTx40M5sOTk5pRGOFwAAkOl48CsAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOokJZwmJycHBweHhoaePXu2bt260tLSAwcO5OTkxMwWDoevXr360tkAAKuN8+HU3d1dXV0dPcXv95eUlFy/fj06eILB4P79+0OhUPRsBQUFf/rTn/Ly8hwvFQAggzgfTn19fZIx77//fnFxsby8detWfX398PBwa2urz+ezZjPJJKHV1NS0cePGBw8eSKTJlLq6OlmC46UCAGQQ58Pp9OnThYWF1ku3252bmyvB097eboXTwMCA5JBkmNWcktm2bt3q8XgCgYA0qqKXAABYbZwPp/hcOXDgQMwUCScZfvjhh9En+iSfpCElbawbN24QTgCwmqWit97ExETMFL/fL0NpKsVMr6yslHC6e/duCkoFAFArFeF0+/ZtGdbW1sZMLyoqWnD+Z8+eJb1MAADFkh5O4XD4o48+kpEjR47EvBXfa9z0oViqsbGx3t7e5RUPALAMMzMzMpyenk7S8pMeTq2traFQSJpNbrc7Sat48eLF8+fPk7RwAMBiZmdnk7Tk5IbTwMBAe3t7QUHB2bNn7cz/5MmTZawlKysrOzt7GX8IAFieubm5+fn55NW9SQwnSaaKigoZuXbt2oLPfYjvMv748eNlrMjj8dTU1CyrjACA5bhy5crU1NT69euTtPxkhZOVTOPj4/H9wqUtFQqFJiYmYt569OiRDMvKypJUKgBARkhKOCVOJvHGG29IOH355ZelpaXWxHA43N7e7lputwgAwDeG8+H00mQS5eXlfr9fomj37t0y7ookU2trqyvSqEpe1wkAQEZwPpxMMknGnDhxIuatsrKyuro6VyScvF5vIBCQmUtKSjZs2CDjZp5r1645XiQAQGZJ1jWnUET8dBNO4vLly9JUksbT8PCwmSJ5JsnEg4sAAM6H0/j4uLk5K15+fr41npOT4/P5WlpaZH7zFv8pAwBgpOLBrwlIRHGFCQAQg3/TDgBQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOkkMp3A4fOnSpcHBwZqamvLy8ph333vvvWfPnsX/1eXLl3NycpJXKgCAfskKp9HR0aqqqlAoJONlZWXxM/j9/gX/cGJiorCwMEmlAgBkBOfDSRpMra2t7e3tJSUlb7zxxmIhZIyMjMRMIZkAAM6Hk+SNJFNHR0ddXV1nZ2fimd1ut+MFAABkOufDqaioaGJiIi8vz/ElAwBWCefDiVgCAKxQmruSv/POO2Zky5Ytb7/9dmlpaVqLAwBQIc3hFAgErPH29nav17uMruRjY2O9vb1OFw0AsKiZmRkZTk9PJ2n5aQun/v7+V155Ze3atTL+5MmTmzdvSjhJVrW2tvp8viUt6sWLF8+fP09OMQEAi5qdnU3SktMWTtG35brdbnn5s5/9rLq6WiJqqeGUlZWVnZ3tdAEBAIuam5ubn59PXt2r6PFFBw8elHByRW7gXVIXc4/HU1NTk6xiAQDiXLlyZWpqav369UlavqJwsphzfQCAVUtROEmDyYzwkAgAWOXSE04ff/zx66+/Ht1xXJLJ4/HISGNjY1qKBADQw/lwmpycrKurM+P37t2T4aeffjo4OOiKPAHWvDUyMtLc3CwjXq/XzGYeEVtSUtLS0uJ4kQAAmcX5cJqYmIi+e0mEIsy4CaejR48+ffp0eHg4es6Ojo5Dhw7x/zIAAM6Hk9vtjn/WuGH1dCgtLb1582Y4HB4fHzfTuc4EALAk5ZqTzY7g0kjiqeQAgHiKeusBAGAQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFAnieEUDAZPnDgRCAQ6Ojrq6uoWnOHMmTN+v9+8rK2tPX78eGFhYfKKBADICMkKp87Ozvr6+gQzDAwMVFRURE/xR4yMjLjd7iSVCgCQEZwPp8nJyTfffDMUCrW1tcnL5ubm+HnC4bBJpsbGxoaGhry8PGlFSctpeHi4qqpKxh0vFQAggzgfTuPj4zI0DSBpPy04z9WrV2Xo9Xp9Pp+ZUlhY2Nvbm5+fL6k2NDRUWlrqeMEAAJnC+XDyeDwvbfr09fXJsKamJnqitJ+k8eT3++/fv084AcBq5nw45eTkvHSeQCAgw40bN8ZM37FjhwwHBwcX7EABAFgl0tmVPL7jQ25ublpKAgBQRdd9Tlu3bl3GX42NjfX29jpeGADAYmZmZmQ4PT2dpOXrCqflefHixfPnz9NdCgBYdWZnZ5O0ZF3h9ODBg2X8VVZWVnZ2tuOFAQAsZm5ubn5+Pnl1bzrDaXR0NOayk2khrlu3bknL8Xg8MR3/AABJdeXKlampqfXr1ydp+ekJp5KSkuHh4SdPnsSE0927d2VIP3IAWOXSE07FxcUSThcvXiwvL7cmTk5Omufs7dq1Ky2lAgAokZ5wqqysbG9vDwQCTU1NLS0tOTk5o6Ojx44dc0UeG8GzXwFglXM+nILBYFFRUfSU+ghX5LnjFy5ccEXucGpra2tubm6PsOYsKCi4fPmy40UCAGSWlLacnj17Zo2fPHly+/btPp9veHjYFYmliooK04pKZZEAAAo5H06FhYXz8/N25iyPcLwAAIBMp+s+JwAAXIQTAEAhwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqpCKcgsFgUVFR/PSCggJ5KwUFAABkllSE08zMTArWAgD4xkjdaT2v19vX15ey1QEAMhfXnAAA6hBOAAB1CCcAgDqpC6dAILBmzRozXlJS8pvf/ObgwYMpWzsAIIOkp+U0HPG73/3u+vXrOTk5K1za2NhYb2+vIwUDANhhumFPT08nafmpCCe32z0+Pl5YWGheBoPBGzdu1NfXSz5dunSprq5uhct/8eLF8+fPV1xMAMDSzM7OJmnJKWo5Wclkxs1Lyaeenp6Vh1NWVlZ2dvYKFwIAsG9ubm5+fj55dW/aOkQUFxe7Iuf3Vr4oj8dTU1Oz8uUAAGy6cuXK1NTU+vXrk7T8NPfWKygoSG8BAAAKpS2czp8/L8OKiop0FQAAoFYqwmnNmjVdXV27du0yl5qCweCZM2f8fr+MV1ZWpqAAAIDMkqKWU3V1dfzE/v5+t9udmgIAADJIKsJpZGSkp6dHoigUCrki15kqKioaGhry8vJSsHYAQMZJ0X1OwufzpWBdAIBvAJ6tBwBQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOoQTAEAdwgkAoA7hBABQh3ACAKhDOAEA1CGcAADqEE4AAHUIJwCAOqkOp9HRURnm5+fn5eWleNUAgEyRonAKh8Pnzp1rbm62phQUFHzxxRdutzs1BQAAZJAUhdNbb701PDwsIyUlJRs2bAgEAqFQyOPxjI+PFxYWpqYMAIBMkYpwGhgYMMlkRZE0pExcnThxoq+vLwVlAABkkFSEk8/nk2F/f7/VSMrJyTl79qy0nKQJNTk5yfUnAEC0pIeTNJJMs2nv3r3R091ud0FBQSgUkuYU4QQAiJb0cJLsMSPSWop5a/v27RJO9+/fLy0tTXYxAAAZJEUdIrxeb/zELVu2OLLwGzduSPvMkUUBAOz461//+uMf//inP/1pkpafzptwN2/e7Mhy/ivCkUUBAGyqqalJ3sJ5QgQAQJ0UhdPTp0/jJw4ODqZm7QAAx33/+99/5ZVXkrTwFIWT6bC3oE2bNi1jgW+++WZubu4KSgQAWBGv1/uTn/wkSQtPejhZDygKBoPRD4MIh8OBQEBGdu7cuYzF/va3v3WkeAAAhVLRciopKZGW05kzZy5cuGBNvHTpkivyhD1ucgIAxEhFOJ06dWrPnj1+v1/Gjxw5IsOenp729nYZ+eyzz1JQAABAZklFOJWWljY2Nkoa+SOs6V1dXdx+CwCIl6IOET6fr7KyUhpMDx8+lJcej2ffvn38vwwAwIJSd5+TOyJlqwMAZC5uwgUAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuGk0eTk5J07dx4/fizjxcXFi/0fLDuzhcPhkZGR+/fvy/i2bds8Hk9OTs6y15h2wWDw9u3b09PTubm5u3btKiwsXPZsNjdZFnXjxg0ZSbzGtBsdHb1165aMbNq0aefOnXl5ecuezeZONuQLdvXqVTPzwYMHndgUh9n8oO0cKS+dR2a4dOlS/MJlb5eXlzuyOasH4aSLHEh1dXWBQCB6YklJyfXr12MOg87Ozvr6+pjZ/H6/VZXIcXLu3Lnm5uaYVYyPj0dXN/bXmF5Sq1ZVVYVCoeiJjY2NPp8veops9bFjx2Q/RE+sra09e/astTk2N1nq6P3798esURZ14cIFR7bIKd3d3dXV1TET+/v7Y2pD2Rwp/PDwcPTEjo4O2RXWS5s7OVr0d0xbONn/bg8NDe3Zsyfmz//4xz+WlpaacZtHk7yMOSot8/Pzy9qI1Ytw0qWvr0+OJTl+3nrrLfkp+ujRo/b2dqlQfvnLX8pb1mxWMkl1s2PHDms2eXnz5k0zjxwnciwVFBRUVFRs3rxZftuaQ6uoqGhmZsY6OG2uMe3a2tqk0vR6vWVlZfJycHBQii1FlU2Lrl6l2KYykipV3rp7964/4tVXXz158qSZx+YmnzhxIn6NsijZ4dFrTDuTTOabICOffvqpFFs+dPmNb7USpG6Vz11G5PtQU1MjW93T0yObLN8iaQFYVbDNnWyRwJMvlcwfEwBK2PygJZJNMsmclZWVcqRcvHhR9oNMnJiYMI1Lm0eTIbO9//770VOk5ZSKDf5mIZx0KS4ujq5TxO7du+V4kGNMKgLzG00qGpNM0b+Of/WrX8lxIgfewMCAmZifnx/z8/ndd981NdTVq1etH7l21qiBVKkSydZpKKkrm5qapK6RXWHVm1LLmFoy+ves1LxSfUtVcvjwYfPnNjc5fo3vvfeehJPU/qrCqaur68CBA1b9eOjQIamL5Ztw/vx5q5FnzjVFNxqszfn1r38tW21ms7OTo0kiyvD06dM6w8nmBy2R7Pr/DcSjR4++9tprkk+ffPKJmWjzaDK2b9+u6huSoQgnXeJPiMvxID/E5DiRH2hmyldffeWKVDTRh4ocaXJ0ST1ihZNUMTEndqx55HffktaoQfwp+4aGBtmW6CnSGnBF6proTJWK46OPPpLNkXaAqURsbnL8Go8cOSK1ecxZr7SLqRkleyRRJJyePXtmTZRAleGpU6eif+PLS7M5Vk1tZydburu7ZS0dHR16fsHEsPNBT05OmmRtaWmxZpO9JFstMSZDE042jyY4iHDKPObEXWVlZcz0t99+Ww6VP//5z+kolAry21aG+/bti5kuDQJpOY2Nja3wooip0eRnwUoWknpS/5pAtU7fGVLhyrZIwPztb39basBI813ao1LRS0PNwaKm3p07d2To9XpjTs3t3bvXjMjeW6x3CZKKcNLOqlnMOQTx8OFD10JnsdeuXSvDxL/rTfW9bdu2Ja1RJ1OtREeFKXZ+fn7MnLm5ua7/228LsrPJUh1/8MEHMiLtkhWVO/nMzxePx2NeTkxMuCIXQuLn3LBhgwxNT7YFxe9k49ixYzL84osvVPWaean4D9ps+5YtW2LmtLbLuuwUb7Gj6d69e52dnWY8+pIeloRw0s5cuW1sbIypBTZu3Bgz50uzZHR0VI5MqaQSHy2LrVGbixcvuhaKiviqJHEYuxbfZKvjtbmW7oqcM1TeJ1hC1BT18OHD0dO3b98eP7MEWOLLRQvuZNktfr+/trZW7S0Hi1nsg968eXP8zKZZudiiEhxNMj2mz150xz/YRDipFgwGzbe8oaHhpTMnzhKps6qqqmTks88+c2qNadTd3W06YtmJCtOmXEyCTZZkiq5lvF5v/DlDbUybRkLUzsko06ZczII72foinT17dsWFTamlfrdNs3JBix1N0mq3uk0K01lURvbs2RPTNQMvRTjpJQfA/v37XZGzB3YqGpk/wbtSZ8kPOvnNmOAX3FLXmC5Sy5j+0zH3My0mQc+OxJtcXFzc0dFhxnt6egIRie/7SS+JE9knEidHjx61M3+Ci/mL7eRLly7JF6mrq0t5wzrGMr7bT58+XeytxY4mWXLMbXAS4fGdJ2EH4aSUHEvynTYHwIKNgydPnsT8EBsfH19saU1NTabOiu6StNQ1KiGVpjmBKbXMYo9+iKl9zC398V66ye4IM15XVzc6OurxeNrb23fv3q1wFw0MDFhxEp8c9+7di/8T+Tm/4KIS7GTT+JBUsy6rWMyUQ4cOacutl37Qjx49ip+42Dk9O0eTRXbFqVOnpOUkf0I4LQnhpJE5luTYWPBH+rp161wLXcRerC+ZuVUl8UMfEq9Rj+hKc7F4iL+CbdoHVgcBYxmbLEHV1tbW3Nxs9dfXQ4pUUVHhintmgSthTxnTOIi5JmdnJy/4HAQzUdvjrxJ/0It1lrHOQ8RcyrVzNMVIfFYZiyGc1HlppWnOaPf09MTc6Pfll1/KUP42euKqSibzqII//OEPMZWjuar/+uuvW1OWvcmJL9KkS4JkckXuyDEjQ0ND0aehpIlpGgfRsf3SnWyd54xmYsm8paqT50s/6K1bt8pQvjYyZ/QBYt1NGD1xGcnkipzkcEW+nCvZkFWIcNLFTqX585//3BU55xD9+13qFNNHK/qK/apKJvHOO+9ILSMtm3fffdeqkbu7u02jwaqC7WyyeVpozIpkoqmFVfW8SpxMRm1trd/v/+CDD6K/CaZnfPQtPnZ28oLPPjC7RdtjEex80NbvmNbWVmse+UP5E9f/v5vQztEkX7aYe+lkl5pPR76cK96g1YVw0uXYsWPmx+zmzZtjzulbT32WCsjUNfKlN0+Qszo6y0vrYJPjxEyU4zP+ScnWhQE7a9TAVJpSNTx+/DimnNatJAcOHDD3/8vMbW1tUn7zdDhXpLa1KhQ7mzwxMWHqFKvzlbWTpQyyoqRvsD1W3SflvBER/a78jjFxdfz4cfnCyFa/9tpr5rFv5hF8rsjDh6z57ezkDGLzu93V1VVdXS0f7sOHD8vKyqzn5sl+sG4xtnk0VUdY3xmrt56q70ymIJx0sR45s+A5fetwOnv2rMxpHsppvSvJFH2F1uqIFf8oZVfUhQGba1RiOCJmovz2N/WmVBDXrl0zjxKP3mqpfaLbAXY2Wapp83CamL5qsq7Lly/rueBvdURcsOOi9WwhGUo8S4zF3IIzMjIS39hKvJMziM3vtoz8/e9/ly+M6Y1pJkqc9Pb2Wh+0zaPJnFiO+SzMgannO5MpCCddjh49ah4IHS/6aod80fv6+hL/qyH51bzg5QHDujBgc41pJwGzWL/n6Ov5shNktwwNDZkeegv+1yI7myx72OfzNTQ0jI+Pm0XJW/JX2nrYy+eY4FM2Z4ANiWdJsq+++sp0pVnw3xHZ3MnxpAyqvi2G/e/2yZMnDx8+LO1ss/nxfTpsHk1yVEb/+6jE/1sLiRFOupRG2Jy5MGJ57y5vjWm0pDZc4o2yv8l5EZr3j6SL/Ss9MnPiTobLbihru9pkLOm7LR90gs23eTS5FnpELJaHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFCHcAIAqEM4AQDUIZwAAOoQTgAAdQgnAIA6hBMAQB3CCQCgDuEEAFDnP+H09ddf//Of/0xjUQAAuw/A3QAAACVJREFUMP4TTv/617/SWA4AACz/E07Z2dnpLgYAAP/rW9/61n8D0sE2oEewlsUAAAAASUVORK5CYII=";
		b_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {		Cek();	}
		b_image.onload = function () {		Cek();	}
		var inside = 0;
		function Cek(){
			var scl;
			inside++;
			if(inside==2){
				var scale = 0.5;
				ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
				for(var i=0;i<4;i++){
					scl = Arr[i]/30 * scale;
					ctx.drawImage(b_image, 65+47*i, 20+144-144*Arr[i]/30,b_image.width*1*scale, b_image.height*1*scl);
				}
			}
		}
		return 0;
	}
	function GambarData7Data(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		//console.log(Arr)
	
		ctx.lineWidth = 2;
		ctx.fillStyle = "white";
		ctx.globalAlpha = 1.00;
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(0,120);
		ctx.lineTo(170,120);
		ctx.lineTo(170,0);
		ctx.lineTo(0,0);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "#000000";
		ctx.stroke(); 
		
		ctx.font = "16px arial";
		ctx.textAlign = "center";
		ctx.fillStyle = "black";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<5;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[iter],xx,yy);
				iter++;
			}
		}
		
	}
	function GambarData7(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		//console.log("Nomor Gambar : "+Arr)
		let a_image = new Image();
		let b_image = new Image();
		let btg0 = new Image();
		let btg1 = new Image();
		let btg2 = new Image();
		let btg3 = new Image();
		let btg4 = new Image();
		let btg5 = new Image();
		let btg6 = new Image();
		a_image.src = "data:image/png;base64,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";
		b_image.src = "data:image/png;base64,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";
			
		a_image.onload = function () {		Cek();	}
		b_image.onload = function () {		Cek();	}
		var inside = 0;
		function Cek(){
			var scl;
			inside++;
			if(inside==2){
				var scale = 0.5;
				var Abjad = ["A","B","C","D"];
				for(var i=0;i<4;i++){
					ctx.drawImage(a_image, 20+0, 202*i,a_image.width*1*scale, a_image.height*1*scale);
					ctx.font = "16px calibri";
					ctx.textAlign = "left";
					ctx.fillText(Abjad[i]+".",3,15+202*i);
				}
				
				for(var i=0;i<4;i++){
					scl = Arr[i+1][0]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*0, 202*i + 20+144-144*Arr[i+1][0]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][1]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*1, 202*i + 20+144-144*Arr[i+1][1]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][2]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*2, 202*i + 20+144-144*Arr[i+1][2]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][3]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*3, 202*i + 20+144-144*Arr[i+1][3]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][4]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*4, 202*i + 20+144-144*Arr[i+1][4]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][5]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*5, 202*i + 20+144-144*Arr[i+1][5]/6,b_image.width*1*scale, b_image.height*1*scl);
				
					scl = Arr[i+1][6]/6 * scale;
					ctx.drawImage(b_image, 20+52.5+29.5*6, 202*i + 20+144-144*Arr[i+1][6]/6,b_image.width*1*scale, b_image.height*1*scl);
				}
			}
		}
		return 0;
	}
	function GambarData6(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData5(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData4(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 0.5;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
		
			ctx.font = "16px calibri";
			ctx.textAlign = "center";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length)		ctx.fillText(Arr[0][i],162.5,yy);
				else					ctx.fillText(Arr[1],162.5,yy);
			}
		}
		return 0;
	}
	function GambarData3(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px calibri";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<Arr[1];i++){
			yy = 20 + 20*i;
			for(var j=0;j<Arr[2];j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarData2(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px calibri";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<3;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarData1(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px calibri";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<3;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GetSoal1(canv){
		const Aljabar = MyData1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData1(canv,ArSisi);
		var ss
		
		ss = "Berdasarkan data tersebut, berapa anak yang mendapatkan nilai ulangan terkecil?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyData2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData2(canv,ArSisi);
		var ss
		
		ss = "Berdasarkan data tersebut, berapa nilai tertinggi yang didapatkan siswa kelas 5 SD Pintar?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyData3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData3(canv,ArSisi);
		var ss
		
		ss = "Berapa total siswa kelas 5 SD Pintar yang mengikuti ulangan matematika?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal4(canv){
		const Aljabar = MyData4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData4(canv,ArSisi);
		var ss
		
		ss = "Berapa tinggi badan terbanyak di SD Cerdas?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyData5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData5(canv,ArSisi);
		var ss
		
		ss = "Siswa SD Cerdas yang memiliki tinggi badan "+ArSisi[2]+" cm berjumlah?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MyData6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData6(canv,ArSisi);
		var ss
		
		ss = "Berapa selisih jumlah siswa yang tinggi badan tertinggi dan tinggi badan terendah?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal7(canv1,canv2){
		const Aljabar = MyData7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawDatadata = GambarData7Data(canv1,ArSisi[0]);
		const DrawData = GambarData7(canv2,ArSisi);
		var ss
		
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(ArSisi[5]); 
		return ArFix;
	}
	function GetSoal8(canv){
		const Aljabar = MyData8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawDataa = GambarData8(canv,ArSisi[1]);
		var ss
		
		ss = "Pernyataan yang sesuai dengan diagram di atas adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal9(canv){
		const Aljabar = MyData9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawDataa = GambarData9(canv,ArSisi[1]);
		var ss
		
		ss = "Berapa ton penjualan beras pada tahun "+ArSisi[0]+"?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar+" ton";
		Ar[1] = arrSalah[0]+" ton";
		Ar[2] = arrSalah[1]+" ton";
		Ar[3] = arrSalah[2]+" ton";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyData10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawDataa = GambarData10(canv,ArSisi[1]);
		var ss
		
		ss = "Jika harga 1 kg beras adalah Rp"+StringRibuan(ArSisi[2])+",00. Maka pendapatan yang didapatkan petani di tahun "+ArSisi[0]+" adalah ...";
		
		var Ar = [];
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
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal11(){
		const Aljabar = MyData11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Berikut ini adalah data pekerjaan orang tua siswa kelas 5 SD Kita Bisa: petani "+ArSisi[0][0]+" orang, pedagang "+ArSisi[0][1]+" orang, penjahit "+ArSisi[0][2]+" orang, polisi "+ArSisi[0][3]+" orang, guru "+ArSisi[0][4]+" orang, buruh "+ArSisi[0][5]+" orang. Paling banyak pekerjaan orang tua siswa adalah ...";
		
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
		const Aljabar = MyData12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Penyajian data dapat disajikan dalam bentuk diagram, <i><b>kecuali</b></i> ...";
		
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
	function GetSoal13(canv){
		const Aljabar = MyData13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData13(canv,ArSisi);
		var ss
		
		ss = "Banyak anggota yang berumur kurang dari "+ArSisi[1]+" tahun adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal14(canv){
		const Aljabar = MyData14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData14(canv,ArSisi);
		var ss
		
		ss = "Banyak siswa yang menggemari "+ArSisi[2]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal15(canv){
		const Aljabar = MyData15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData15(canv,ArSisi);
		var ss
		
		ss = "Jenis hobi yang paling sedikit peminatnya adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal16(canv){
		const Aljabar = MyData16();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData16(canv,ArSisi);
		var ss
		
		ss = "Selisih antara hobi "+ArSisi[2]+" dan "+ArSisi[3]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal17(){
		const Aljabar = MyData17();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Tahapan awal dalam kegiatan statistika adalah ...";
		
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
		const Aljabar = MyData18();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Berikut ini merupakan metode dalam aktivitas pengumpulan data, <i><b>kecuali</b></i> ...";
		
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
		const Aljabar = MyData19();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var ss
		ss = "Tahapan kedua setelah mengumpulkan data adalah ...";
		
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
	function GetSoal20(canv){
		const Aljabar = MyData20();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData20(canv,ArSisi);
		var ss
		
		ss = "Jika banyak siswa seluruhnya adalah "+ArSisi[1]+" orang, maka banyak siswa yang suka "+ArSisi[2]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar+" orang";
		Ar[1] = arrSalah[0]+" orang";
		Ar[2] = arrSalah[1]+" orang";
		Ar[3] = arrSalah[2]+" orang";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal21(canv){
		const Aljabar = MyData21();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData21(canv,ArSisi);
		var ss
		
		ss = "Jika banyak siswa seluruhnya adalah "+ArSisi[1]+" orang, maka selisih siswa yang suka "+ArSisi[2]+" dan "+ArSisi[3]+" adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar+" orang";
		Ar[1] = arrSalah[0]+" orang";
		Ar[2] = arrSalah[1]+" orang";
		Ar[3] = arrSalah[2]+" orang";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal22(canv){
		const Aljabar = MyData22();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData22(canv,ArSisi);
		var ss
		
		ss = "Jika banyak siswa seluruhnya adalah "+ArSisi[1]+" orang, maka jumlah siswa yang suka makan "+ArSisi[2]+" dan siswa yang suka makan "+ArSisi[3]+" yaitu ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar+" orang";
		Ar[1] = arrSalah[0]+" orang";
		Ar[2] = arrSalah[1]+" orang";
		Ar[3] = arrSalah[2]+" orang";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal23(canv){
		const Aljabar = MyData23();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData23(canv,ArSisi);
		var ss
		ss = "Selisih banyak siswa yang mempunyai berat badan "+ArSisi[1]+" kg dengan "+ArSisi[2]+" kg adalah ..."
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal24(canv){
		const Aljabar = MyData24();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawData = GambarData24(canv,ArSisi);
		var ss
		ss = "Banyak siswa kelas 6 adalah ..."
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		Ar[3] = arrSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"<br>";
		var ArFix = [];
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
	
	
	dd1.innerHTML="<p>Kelas 5 Bab 8 \u{2192} Data </p>";
	
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		cc1.width = 630;
		cc1.height = 60; 
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		cc1.width = 630;
		cc1.height = 60; 
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sebuah data hasil ulangan matematika kelas 5 SD Pintar sebagai berikut:</p>";
		cc1.width = 630;
		cc1.height = 60; 
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		cc1.width = 202;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		cc1.width = 202;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data ini merupakan data tinggi badan dari SD Cerdas:</p>";
		cc1.width = 202;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==7){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut merupakan data hasil ulangan siswa kelas 5 SD Penerus Negeri:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut merupakan data hasil ulangan siswa kelas 5 SD Penerus Negeri:</p>";
		cc1.width = 200;
		cc1.height = 120;
		cc2.width = 290;
		cc2.height = 808;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Data tersebut jika diubah ke dalam diagram batang ditunjukkan oleh ...</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==8){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		cc1.width = 281.5;
		cc1.height = 202;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==9){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		cc1.width = 281.5;
		cc1.height = 202;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah diagram batang dari penjualan beras di Desa Maju Bersama (dalam bentuk ton):</p>";
		cc1.width = 281.5;
		cc1.height = 202;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==13){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut merupakan data umur anggota karang taruna Desa Jaya Abadi:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut merupakan data umur anggota karang taruna Desa Jaya Abadi:</p>";
		cc1.width = 630;
		cc1.height = 100;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==14){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		cc1.width = 202;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==15){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		cc1.width = 202;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==16){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut adalah data hobi anak kelas 5 dan 6 SD Merdeka:</p>";
		cc1.width = 202;
		cc1.height = 210;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==20){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		cc1.width = 630;
		cc1.height = 260;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==21){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		cc1.width = 630;
		cc1.height = 260;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==22){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Diagram berikut adalah jenis makanan favorit siswa Kelas 5 SD Makmur:</p>";
		cc1.width = 630;
		cc1.height = 260;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==23){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data berat badan siswa kelas 5 sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data berat badan siswa kelas 5 sebagai berikut:</p>";
		cc1.width = 352;
		cc1.height = 317; 
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==24){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data berat badan siswa kelas 5 sebagai berikut:</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data berat badan siswa kelas 5 sebagai berikut:</p>";
		cc1.width = 352;
		cc1.height = 317; 
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
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
function Print35(no,d1,c1,d2,c2,d3,c3,d4,nourut){
		
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
	function NoJawabanBenar(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (Arr[i]==jwb){
				return i;
				break;
			}
		}
	}
	function NoJawabanBenarEqual(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
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
	function SortAtoZ(ar){
		ar.sort(function(a, b){return a-b});
		return ar
	}
	function SortZtoA(ar){
		ar.sort(function(a, b){return b-a});
		return ar
	}
	function gabunganAZ(arrA,arrB){
		var arr = arrA.concat(arrB);
		arr = SortAtoZ(arr);
		return arr;
	}
	function gabunganZA(arrA,arrB){
		var arr = arrA.concat(arrB);
		arr = SortZtoA(arr);
		return arr;
	}
	function SplitGabungAcak(arrA){
		var arrA1 = [arrA[0],arrA[1]];
		var arrA2 = [arrA[arrA.length-2],arrA[arrA.length-1]];
		var arrA12 = [];
		for(var i=2;i<arrA.length-2;i++){
			arrA12.push(arrA[i]);
		}
		arrA12 = RandomMyArray(arrA12);
		var arr = arrA1.concat(arrA12);
		arr = arr.concat(arrA2);
		return arr;
	}
	function Array2String(arr){
		var str = "";
		for(var i=0;i<arr.length;i++){
			str += arr[i];
			if(i<arr.length-1)	str += " , ";
		}
		return str;
	}
	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
		   return false;
		}
		return arr1.every((val, index) => val === arr2[index]);
	}
	function MyPenyajian1(){
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
			data = [];
			for(var i=0;i<3;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else if(arrData[0]==getData[4]) arrndata[4]++;
					else 							arrndata[5]++;
				}
			}
		}while(arrndata[0]==0 || arrndata[1]==0 || arrndata[2]==0 || arrndata[3]==0 || arrndata[4]==0 || arrndata[5]==0)
		
		var ArSisi=[data];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var dataAZ = gabunganAZ([],data);
		var dataZA = gabunganZA([],data);
		var dataAnZ = SplitGabungAcak(dataAZ)
		
		var benar = Array2String(dataAZ);//dataAZ;
		var salah1 = Array2String(dataZA);//dataZA;
		var salah2 = Array2String(dataAnZ);//dataAnZ;
		arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian2(){
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
			data = [];
			for(var i=0;i<3;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else if(arrData[0]==getData[4]) arrndata[4]++;
					else 							arrndata[5]++;
				}
			}
		}while(arrndata[0]==0 || arrndata[1]==0 || arrndata[2]==0 || arrndata[3]==0 || arrndata[4]==0 || arrndata[5]==0)
		
		var ArSisi=[data];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var dataAZ = gabunganAZ([],data);
		var dataZA = gabunganZA([],data);
		var dataAnZ = SplitGabungAcak(dataZA)
		
		var benar = Array2String(dataAZ);//dataAZ;
		var salah1 = Array2String(dataZA);//dataZA;
		var salah2 = Array2String(dataAnZ);//dataAnZ;
		arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian3(){
		var data = [];
		var arrData = [60,70,80,90,100];
		var getData = [0,0,0,0,0];
		var aa = 60;
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 50;
		var ct=0;
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = [60,70,80,90,100];//balikkan ke urutan semula
		var tanya = arrData[nfix];
		
		var ArSisi=[tanya,arrndata,ctmax];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = arrndata[nfix];
		var salah1 = arrndata[artanya[0]];
		var salah2 = arrndata[artanya[1]];
		var arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian4(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [0,0,0,0,0];
		var aa = 5+RandomAngkaAtoB(1,5);
		for(var i=0;i<5;i++){
			arrData[i] = aa+i;
			getData[i]=arrData[i];
		}
		var arrndata = [0,0,0,0,0];
		
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			data = [];
			for(var i=0;i<4;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else 							arrndata[4]++;
				}
			}
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
			
		}while(fcek0||fceksama)
		
		var bb=[]; bb = bb.concat(arrndata);
		arrndata = RandomMyArray(arrndata);
		var s1=[]; s1 = s1.concat(arrndata);
		arrndata = RandomMyArray(arrndata);
		var s2=[]; s2 = s2.concat(arrndata);
		
		
		var ArSisi=[data,bb,s1,s2,SortAtoZ(arrData)];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = bb;
		var salah1 = s1;
		var salah2 = s2;
		arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian5(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [0,0,0,0,0];
		var aa = 5+RandomAngkaAtoB(1,5);
		for(var i=0;i<5;i++){
			arrData[i] = aa+i;
			getData[i]=arrData[i];
		}
		var arrndata = [0,0,0,0,0];
		var ct
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			data = [];
			for(var i=0;i<4;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else 							arrndata[4]++;
				}
			}
			
			var fcek0 = false;
			var fceksama = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek0=true;
					i=5;
				}
			}
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
			
		}while(fcek0||fceksama)
		
		var ctmax = data.length;
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = SortAtoZ(arrData);//balikkan ke urutan semula
		var tanya = arrData[nfix];
		
		
		var ArSisi=[data,tanya,arrndata,ctmax];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = arrndata[nfix];
		var salah1 = arrndata[artanya[0]];
		var salah2 = arrndata[artanya[1]];
		var arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian6(){
		var data = [];
		var arrData = [0,0,0,0,0];
		var getData = [0,0,0,0,0];
		var aa = 5+RandomAngkaAtoB(1,5);
		for(var i=0;i<5;i++){
			//arrData[i] = aa+i;
			arrData[i] = aa+RandomAngkaAtoB(1,2);
			aa = arrData[i]
			getData[i] = arrData[i];
		}
		var arrndata = [0,0,0,0,0];
		var ct;
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			data = [];
			for(var i=0;i<4;i++){
				for(var j=0;j<5;j++){
					arrData = RandomMyArray(arrData);
					data.push(arrData[0]);
					if(arrData[0]==getData[0])		arrndata[0]++;
					else if(arrData[0]==getData[1]) arrndata[1]++;
					else if(arrData[0]==getData[2]) arrndata[2]++;
					else if(arrData[0]==getData[3]) arrndata[3]++;
					else 							arrndata[4]++;
				}
			}
			
			var fcek0 = false;
			var fceksama = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek0=true;
					i=5;
				}
			}
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		
		var maxi = 0;
		var mini = 100;
		for(var i=0;i<arrData.length;i++){
			if(maxi<arrData[i]) maxi = arrData[i];
			if(mini>arrData[i]) mini = arrData[i];
		}
		var jangkauan = maxi - mini;
		
		
		var ctmax = data.length;
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = SortAtoZ(arrData);//balikkan ke urutan semula
		var tanya = arrData[nfix];
		
		var ArSisi=[data,tanya,arrndata,ctmax];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = jangkauan;
		var salah1 = jangkauan-RandomAngkaAtoB(0,2);
		var salah2 = jangkauan+RandomAngkaAtoB(0,2);
		var arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian7(){
		var data = [];
		var nn
		var max = 300;
		var sisa = max;
		for(var i=0;i<4;i++){
			nn = 50+RandomAngkaAtoB(-10,10);
			data.push(nn);
			sisa-=nn;
		}
		data.push(sisa);
		
		var namaBuku = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]], [4,"buku pengetahuan",data[4]]];
		var namaFix = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]]];
		namaFix = RandomMyArray(namaFix);
		
		var ArSisi=[namaBuku[4][1],data,max,namaFix];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = data[4];
		var salah1 = data[4]-RandomAngkaAtoB(0,4);
		var salah2 = data[4]+RandomAngkaAtoB(0,4);
		var arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian8(){
		var data = [];
		var nn
		var max = 300;
		var sisa = max;
		for(var i=0;i<4;i++){
			nn = 50+RandomAngkaAtoB(-10,10);
			data.push(nn);
			sisa-=nn;
		}
		data.push(sisa);
		
		var namaBuku = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]], [4,"buku pengetahuan",data[4]]];
		var namaFix = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]]];
		namaFix = RandomMyArray(namaFix);
		
		var urut = [0,1,2,3,4];
		urut = RandomMyArray(urut);
		var tanya = namaBuku[urut[0]][1]+" dan "+namaBuku[urut[1]][1];
		var total = namaBuku[urut[0]][2] + namaBuku[urut[1]][2];
		
					 
		
		var ArSisi=[namaBuku[4][1],data,max,namaFix,tanya];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = total;
		var salah1 = benar-RandomAngkaAtoB(0,10);
		var salah2 = benar+RandomAngkaAtoB(0,10);
		var arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian9(){
		var data = [];
		var nn
		var max = 300;
		var sisa = max;
		var ulang = false;
		var minus = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
		minus = RandomMyArray(minus);
		
		data = [];
		sisa = max;
		for(var i=0;i<4;i++){
			nn = 50+minus[i];
			data.push(nn);
			sisa-=nn;
		}
		data.push(sisa);
		//console.log(data);
		
		var namaBuku = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]], [4,"buku pengetahuan",data[4]]];
		var namaFix = [[0,"buku cerita",data[0]], [1,"buku agama",data[1]] , [2,"majalah",data[2]], [3,"komik",data[3]]];
		namaFix = RandomMyArray(namaFix);
		
		var urut = [0,1,2,3,4];
		urut = RandomMyArray(urut);
		var tanya = namaBuku[urut[0]][1];
		var total = namaBuku[urut[0]][2];
		
		var ArSisi=[namaBuku[4][1],data,max,namaFix,total];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = tanya;
		var salah1 = namaBuku[urut[1]][1];
		var salah2 = namaBuku[urut[2]][1];
		var salah3 = namaBuku[urut[3]][1];
		var salah4 = namaBuku[urut[4]][1];
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian10(){
		var data = [];
		var arrData = ["Renang","Sepakbola","Basket","Voli","Bulu Tangkis"];
		var getData = ["","","","",""];
		var aa = 60;
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 50;
		var ct=0;
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		var nfix2 = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = ["Renang","Sepakbola","Basket","Voli","Bulu Tangkis"];//balikkan ke urutan semula
		var tanya = arrData[nfix]+" dan "+arrData[nfix2];
		
		var ArSisi=[tanya,arrndata,ctmax,arrData];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = arrndata[nfix]+arrndata[nfix2];
		var salah1 = arrndata[0]+arrndata[1];
		var salah2 = arrndata[0]+arrndata[2];
		var salah3 = arrndata[1]+arrndata[2];
		var salah4 = arrndata[nfix]+arrndata[0];
		var salah5 = arrndata[nfix]+arrndata[1];
		var salah6 = arrndata[nfix]+arrndata[2];
		var salah7 = arrndata[nfix2]+arrndata[0];
		var salah8 = arrndata[nfix2]+arrndata[1];
		var salah9 = arrndata[nfix2]+arrndata[2];
		var arrSalah = [salah1,salah2,salah3,salah4,salah5,salah6,salah7,salah8,salah9];
		do{
			arrSalah = RandomMyArray(arrSalah);
			fcek1 = arrSalah[0]==benar || arrSalah[1]==benar;
			fcek2 = arrSalah[0]==arrSalah[1]
		}while(fcek1||fcek2)
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian11(){
		var data = [];
		var arrData = ["Renang","Sepakbola","Basket","Voli","Bulu Tangkis"];
		var getData = ["","","","",""];
		var aa = "";
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 50;
		var ct=0;
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = ["Renang","Sepakbola","Basket","Voli","Bulu Tangkis"];//balikkan ke urutan semula
		var tanya = arrndata[nfix];
		
		var ArSisi=[tanya,arrndata,ctmax,arrData];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = arrData[nfix]
		var salah1 = arrData[0];
		var salah2 = arrData[1];
		var salah3 = arrData[2];
		var salah4 = arrData[3];
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian12(){
		var data = [];
		var arrData = ["sate","bakso","nasi goreng","ayam goreng","soto"];
		var getData = ["","","","",""];
		var aa = "";
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 20;
		var ct=0;
		var cetak = "";
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			cetak = "";
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
				cetak+=arrData[0];
				if(ct<ctmax) cetak+=", "
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		
		
		var bb=[]; bb = bb.concat(arrndata);
		arrndata = RandomMyArray(arrndata);
		var s1=[]; s1 = s1.concat(arrndata);
		arrndata = RandomMyArray(arrndata);
		var s2=[]; s2 = s2.concat(arrndata);
		
		var ArSisi=[ctmax,bb,s1,s2,SortAtoZ(arrData),cetak];
		var ff1,ff2,ff3,ff4
		var fix = []
		
		var benar = bb;
		var salah1 = s1;
		var salah2 = s2;
		arrSalah = [salah1,salah2];
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian13(){
		var data = [];
		var arrData = ["sate","bakso","nasi goreng","ayam goreng","soto"];
		var getData = ["","","","",""];
		var aa = "";
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 20;
		var ct=0;
		var cetak = "";
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			cetak = "";
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
				cetak+=arrData[0];
				if(ct<ctmax) cetak+=", "
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = ["sate","bakso","nasi goreng","ayam goreng","soto"];//balikkan ke urutan semula
		var tanya = arrData[nfix];
		
		var ArSisi=[tanya,arrndata,ctmax,arrData,cetak];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = arrndata[nfix]
		var salah1 = arrndata[artanya[0]];
		var salah2 = arrndata[artanya[1]];
		var salah3 = arrndata[artanya[2]];
		var salah4 = arrndata[artanya[3]];
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian14(){
		var data = [];
		var arrData = ["menggambar","menari","berenang","menyanyi","melukis"];
		var getData = ["","","","",""];
		var aa = "";
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 20;
		var ct=0;
		var cetak = "";
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			cetak = "";
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
				cetak+=arrData[0];
				if(ct<ctmax) cetak+=", "
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		arrData = ["menggambar","menari","berenang","menyanyi","melukis"];//balikkan ke urutan semula
		var max = 0;
		var hobi = "";
		var hobielse = [];
		for(var i=0;i<5;i++){
			if(arrndata[i]>max){
				max=arrndata[i];
				hobi = arrData[i];
			}
		}
		for(var i=0;i<5;i++){
			if(hobi!==arrData[i]){
				hobielse.push(arrData[i]);
			}
		}
		
		var artanya = [0,1,2,3,4];
		artanya = RandomMyArray(artanya);
		var nfix = artanya.splice(0, 1)[0];//ambil posisi ke nol//[0] karena array 1 anggota
		arrData = ["menggambar","menari","berenang","menyanyi","melukis"];//balikkan ke urutan semula
		var tanya = arrData[nfix];
		
		var ArSisi=[tanya,arrndata,ctmax,arrData,cetak];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = hobi;
		var salah1 = hobielse[0];
		var salah2 = hobielse[1];
		var salah3 = hobielse[2];
		var salah4 = hobielse[3];
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}
	function MyPenyajian15(){
		var data = [];
		var arrData = ["Apel","Jeruk","Anggur","Pir","Pisang"];
		var getData = ["","","","",""];
		var aa = "";
		for(var i=0;i<5;i++){
			aa = arrData[i];
			getData[i] = aa;
		}
		var arrndata = [0,0,0,0,0];
		var ctmax = 20+RandomAngkaAtoB(0,40);
		var ct=0;
		var cetak = "";
		do{
			ct=0;
			arrndata = [0,0,0,0,0];
			cetak = "";
			do{
				arrData = RandomMyArray(arrData);
				if(arrData[0]==getData[0])		arrndata[0]++;
				else if(arrData[0]==getData[1]) arrndata[1]++;
				else if(arrData[0]==getData[2]) arrndata[2]++;
				else if(arrData[0]==getData[3]) arrndata[3]++;
				else 							arrndata[4]++;
				ct++;
				cetak+=arrData[0];
				if(ct<ctmax) cetak+=", "
			}while(ct<ctmax)
			
			var fmax = 0;
			fmax = Math.max(arrndata[0],Math.max(arrndata[1],Math.max(arrndata[2],Math.max(arrndata[3],arrndata[0]))));
			
			var fcek0 = false;
			for(var i=0;i<5;i++){
				if(arrndata[i]==0){
					fcek=true;
					i=5;
				}
			}
			var fceksama = false;
			for(var i=0;i<4;i++){
				for(var j=i+1;j<5;j++){
					if(arrndata[i]==arrndata[j]){
						fceksama=true;
						j=5;
						i=4;
					}
				}
			}
		}while(fcek0||fceksama)
		
		arrData = ["Apel","Jeruk","Anggur","Pir","Pisang"];//balikkan ke urutan semula
		var max = 0;
		var hobi = "";
		var hobielse = [];
		for(var i=0;i<5;i++){
			if(arrndata[i]>max){
				max=arrndata[i];
				hobi = arrData[i];
			}
		}
		for(var i=0;i<5;i++){
			if(hobi!==arrData[i]){
				hobielse.push(arrData[i]);
			}
		}
		
		var ArSisi=[arrndata,arrData];
		var ff1,ff2,ff3,ff4
		var fix = [];
		
		var benar = ctmax;
		var salah1 = ctmax+1;
		var salah2 = ctmax+2;
		var salah3 = ctmax-1;
		var salah4 = ctmax-2;
		var arrSalah = [salah1,salah2,salah3,salah4];
		arrSalah = RandomMyArray(arrSalah);
		
		fix.push(ArSisi)
		fix.push(benar)
		fix.push(arrSalah)
		return fix;
	}

	function GambarPenyajian12(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACyCAMAAAA0yqA2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvRQTFRFKSkpJycnJCQkHR0dIiIiNjY2AAAAAAAACQklDQ0wCgojAwMLCAgfCgokDg4XFBRMGhpiExNHBgYXEBA/FBRLEREkamqZjY2xISFnVFSJhISqQkJ+WlqOkpK0JSVqe3ukpaXBIyNoYGCSmpq6TEyEZ2eWqqrFKChsQ0N+PDx6NjZ1Hh5kMjJyRUWALy9wS0uEU1OJKSlsJCRpR0eBVVWLGxtjMDBxV1eMXl6ROzt5HBxkWFiNTEyFVlaMLy9xRUV/pqbCh4escHCdsrLKxsbYw8PWxcXX0tLg2NjksbHKysrbtLTLZGSVtLTMvLzRzs7ednaivb3SzMzcw8PV0dHftrbNPz97fX2mHR1kiIitISFmoqLAfHylHh5loqK/oKC+QUF9WVmNpKTBVlaLgYGpeXmjwsLV2dnl6+vxRER/nZ28l5e4hISrJSVpd3eiv7/TXFyPMjJzi4uwoaG/gICnICBmc3OfJiZqlZW2r6/IIyNpSEiCKytthYWrq6vGKytuOjp4qKjDZ2eX8/P33d3oenqk1NTi9PT4zc3dsLDJUVGIwcHV7+/01NTh09Phm5u6n5+9JydqHx9lIiJoBgYZCQkhBgYYAgIIBgYVCQkQS0tLdXV1WFhYISEhSkpKV1dXAQEBpaWl////v7+/SUlJpKSkU1NT////JSUlOjo6KysrEBAQGxsbTU1NeHh4WlpaIyMjWVlZLCwsGRkZDAwMCwsQOzs7ExNJGBgifn5+np68Jydrj4+y29vmwcHUIiJneHiiMTFy7u7zbGyaLi5wNzd26+vyOjp3WlqNKChrgICo7Ozyf3+nWFiMg4Oq6enwqqrEMzNzi4uvjY2wx8fYx8fZSkqD4ODqwMDUPj574eHrGxti39/pXl6Qz8/ePz98q6vF1dXi4eHqysray8vbPT161tbjlJS2NTV0VFSKHBxjNDR0ZGSU5OTsaWmX6env5OTt6urxiYmu9vb59/f53NznKiptHR1lBQUJHBwcd3d3goKCrB8HxwAAAPx0Uk5T////////AP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////////////////////////////////6f/ZUQAABARJREFUeJzt3VtIFGEYBuD5dA9mkbUklmEX0VLQibwKS7CgMHXLJTOKogNFGaQdIJBOUBcRVBRdiQZF20HKUlLSEi26iBAKipKsi6hUBPNcLWtmM7N2sfrdrH0wh973ZtaZ/d9/H3YGl//mJ4UUw0JEQ1JdDiI3GWcRpDgoSO44m1B6QZEJKFxAEcv/SXERBcOvJhB9H3vdjJRJRH3MWxOIusOvPESdY6+bkZJI1MG81aKUn/HUriSH1N8hIwl91ijT9NfvPDRdPbweNcykFPWjvlJSqat3tv7hfzmpq1mlzA+qjwk98SzWzz6KHGZ2ypyp9MmTQI3uHyGVMmNWbVZ7cnPP4olUv6o2FDnM7JR0qvQTVaSkOu+qlETt6+hv7lGflU1U0xs5zKSUmJXvIilLJgcSyKffVx1hSjyVRQ4zH2V3/ao3ix5maY933yjKFp3SYhnKIfVU5Qe/Vz0EK0fdYAW65bpOmfu8LnKg+SjezvwS9RCX4PhWHPhS/Lz21LmNpZmJ1d1T1fO763cqXxsygg2t2pnIgeajjDugiAUULqCIRZpy3haUYed+cl+2BcWxw0VX7bE6SbHbQRGaHxSuChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobFWUFOeg0MR/58e3wlWBIhVhivuakZQhqckpZjO5b9qCEkt5drrBQJGZHxSuChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobBUoUgGFrbIXBUt6MvNjSY+rstezAorM/KBwVaBIBRS2ChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobBWW9KSCJT22yl7PCigy84PCVYEiFVDYKlCkAgpbBYpUQGGrQJEKKGwVKFIBha0CRSqgsFVY0pMKlvTYKns9K6DIzA8KVwWKVEBhq0CRCihsFShSAYWtAkUqoLBVoEgFFLYKFKmAwlZpS3p31wq1RZ+YqtwbQlX6kp6B34rj9t+dE/852pKekfuv3OJ3IRxP9BsMFImAwgUUsZiWMju5MD+6EQZT7oT/DxH5x1xxXmqMbn6DKd6VWYWX6XdsTvjPmrMf20auWI6ipobyB5TMoser75fUqT+jcgfiZq7Lzg5albJnI9GJogOBQxmuNRV5VJF3vMGilOUnaH1bUs/TpS/o5kXvvAdNFw4HllmTsmlvcJnicx1N1SiZZ9TbLGRZyuDhhcqp8vIFGuWttudpv1UpL9eU+Rqn7IuvevEj5feGe0c8zwJWpQzc1/Y3PrjVn9REx3LKrlw86E+zIqVlEs1QFN/7FdrmtC3pr5KbTnoff007/bC1JLoi4yliAYULKGIBhYvdKAbueDu8iyqFqqi/gEqFusaXbdVSTb6J5JLqMjx/AMaOPf3R2cMlAAAAAElFTkSuQmCC";
		
		a_image.onload = function () {
			var scale = 1;
			var Abjad = ["A","B","C"];
			for(var j=0;j<3;j++){
				ctx.drawImage(a_image, 30, 178*j,a_image.width*1*scale, a_image.height*1*scale);
				
				ctx.font = "14px calibri";
				ctx.textAlign = "center";
				ctx.fillStyle = "white";
				ctx.fillText("Berat",90,20+178*j);
				ctx.fillStyle = "black";
				var xx = 20;
				var yy = 37.5;
				
				for(var i=0;i<=Arr[j+1].length;i++){
					yy = 42.5 + 25*i+178*j;
					if(i<Arr[j+1].length){
						ctx.fillText(Arr[j+1][i],192.5,yy);
						ctx.fillText(Arr[4][i],90,yy);
					}else{
						ctx.fillText(Arr[0],192.5,yy);
					}
				}
				ctx.fillText(Abjad[j]+".",10,20+178*j);
			}
		}
		return 0;
	}
	function GambarPenyajian11(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillStyle = "white";
			ctx.fillText("Nilai",60,20);
			ctx.fillStyle = "black";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length){
					ctx.fillText(Arr[0][i],162.5,yy);
					ctx.fillText(Arr[2][i],60,yy);
				}else{
					ctx.fillText(Arr[1],162.5,yy);
				}
			}
		}
		return 0;
	}
	function GambarPenyajian10(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,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";
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillStyle = "white";
			ctx.fillText("Nilai",60,20);
			ctx.fillStyle = "black";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length){
					ctx.fillText(Arr[0][i],162.5,yy);
					ctx.fillText(Arr[2][i],60,yy);
				}else{
					ctx.fillText(Arr[1],162.5,yy);
				}
			}
		}
		return 0;
	}
	function GambarPenyajian6(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px arial";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<4;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarPenyajian5(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px arial";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<4;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarPenyajian4Tabel(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACyCAMAAAA0yqA2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvRQTFRFKSkpJycnJCQkHR0dIiIiNjY2AAAAAAAACQklDQ0wCgojAwMLCAgfCgokDg4XFBRMGhpiExNHBgYXEBA/FBRLEREkamqZjY2xISFnVFSJhISqQkJ+WlqOkpK0JSVqe3ukpaXBIyNoYGCSmpq6TEyEZ2eWqqrFKChsQ0N+PDx6NjZ1Hh5kMjJyRUWALy9wS0uEU1OJKSlsJCRpR0eBVVWLGxtjMDBxV1eMXl6ROzt5HBxkWFiNTEyFVlaMLy9xRUV/pqbCh4escHCdsrLKxsbYw8PWxcXX0tLg2NjksbHKysrbtLTLZGSVtLTMvLzRzs7ednaivb3SzMzcw8PV0dHftrbNPz97fX2mHR1kiIitISFmoqLAfHylHh5loqK/oKC+QUF9WVmNpKTBVlaLgYGpeXmjwsLV2dnl6+vxRER/nZ28l5e4hISrJSVpd3eiv7/TXFyPMjJzi4uwoaG/gICnICBmc3OfJiZqlZW2r6/IIyNpSEiCKytthYWrq6vGKytuOjp4qKjDZ2eX8/P33d3oenqk1NTi9PT4zc3dsLDJUVGIwcHV7+/01NTh09Phm5u6n5+9JydqHx9lIiJoBgYZCQkhBgYYAgIIBgYVCQkQS0tLdXV1WFhYISEhSkpKV1dXAQEBpaWl////v7+/SUlJpKSkU1NT////JSUlOjo6KysrEBAQGxsbTU1NeHh4WlpaIyMjWVlZLCwsGRkZDAwMCwsQOzs7ExNJGBgifn5+np68Jydrj4+y29vmwcHUIiJneHiiMTFy7u7zbGyaLi5wNzd26+vyOjp3WlqNKChrgICo7Ozyf3+nWFiMg4Oq6enwqqrEMzNzi4uvjY2wx8fYx8fZSkqD4ODqwMDUPj574eHrGxti39/pXl6Qz8/ePz98q6vF1dXi4eHqysray8vbPT161tbjlJS2NTV0VFSKHBxjNDR0ZGSU5OTsaWmX6env5OTt6urxiYmu9vb59/f53NznKiptHR1lBQUJHBwcd3d3goKCrB8HxwAAAPx0Uk5T////////AP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////////////////////////////////6f/ZUQAABARJREFUeJzt3VtIFGEYBuD5dA9mkbUklmEX0VLQibwKS7CgMHXLJTOKogNFGaQdIJBOUBcRVBRdiQZF20HKUlLSEi26iBAKipKsi6hUBPNcLWtmM7N2sfrdrH0wh973ZtaZ/d9/H3YGl//mJ4UUw0JEQ1JdDiI3GWcRpDgoSO44m1B6QZEJKFxAEcv/SXERBcOvJhB9H3vdjJRJRH3MWxOIusOvPESdY6+bkZJI1MG81aKUn/HUriSH1N8hIwl91ijT9NfvPDRdPbweNcykFPWjvlJSqat3tv7hfzmpq1mlzA+qjwk98SzWzz6KHGZ2ypyp9MmTQI3uHyGVMmNWbVZ7cnPP4olUv6o2FDnM7JR0qvQTVaSkOu+qlETt6+hv7lGflU1U0xs5zKSUmJXvIilLJgcSyKffVx1hSjyVRQ4zH2V3/ao3ix5maY933yjKFp3SYhnKIfVU5Qe/Vz0EK0fdYAW65bpOmfu8LnKg+SjezvwS9RCX4PhWHPhS/Lz21LmNpZmJ1d1T1fO763cqXxsygg2t2pnIgeajjDugiAUULqCIRZpy3haUYed+cl+2BcWxw0VX7bE6SbHbQRGaHxSuChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobFWUFOeg0MR/58e3wlWBIhVhivuakZQhqckpZjO5b9qCEkt5drrBQJGZHxSuChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobBUoUgGFrbIXBUt6MvNjSY+rstezAorM/KBwVaBIBRS2ChSpgMJWgSIVUNgqUKQCClsFilRAYatAkQoobBWW9KSCJT22yl7PCigy84PCVYEiFVDYKlCkAgpbBYpUQGGrQJEKKGwVKFIBha0CRSqgsFVY0pMKlvTYKns9K6DIzA8KVwWKVEBhq0CRCihsFShSAYWtAkUqoLBVoEgFFLYKFKmAwlZpS3p31wq1RZ+YqtwbQlX6kp6B34rj9t+dE/852pKekfuv3OJ3IRxP9BsMFImAwgUUsZiWMju5MD+6EQZT7oT/DxH5x1xxXmqMbn6DKd6VWYWX6XdsTvjPmrMf20auWI6ipobyB5TMoser75fUqT+jcgfiZq7Lzg5albJnI9GJogOBQxmuNRV5VJF3vMGilOUnaH1bUs/TpS/o5kXvvAdNFw4HllmTsmlvcJnicx1N1SiZZ9TbLGRZyuDhhcqp8vIFGuWttudpv1UpL9eU+Rqn7IuvevEj5feGe0c8zwJWpQzc1/Y3PrjVn9REx3LKrlw86E+zIqVlEs1QFN/7FdrmtC3pr5KbTnoff007/bC1JLoi4yliAYULKGIBhYvdKAbueDu8iyqFqqi/gEqFusaXbdVSTb6J5JLqMjx/AMaOPf3R2cMlAAAAAElFTkSuQmCC";
		
		a_image.onload = function () {
			var scale = 1;
			var Abjad = ["A","B","C"];
			for(var j=0;j<3;j++){
				ctx.drawImage(a_image, 30, 178*j,a_image.width*1*scale, a_image.height*1*scale);
				
				ctx.font = "14px calibri";
				ctx.textAlign = "center";
				ctx.fillStyle = "white";
				ctx.fillText("Berat",90,20+178*j);
				ctx.fillStyle = "black";
				var xx = 20;
				var yy = 37.5;
				
				for(var i=0;i<=Arr[j+1].length;i++){
					yy = 42.5 + 25*i+178*j;
					if(i<Arr[j+1].length){
						ctx.fillText(Arr[j+1][i],192.5,yy);
						ctx.fillText(Arr[4][i],90,yy);
					}else{
						ctx.fillText(Arr[0].length,192.5,yy);
					}
				}
				ctx.fillText(Abjad[j]+".",10,20+178*j);
			}
		}
		return 0;
	}
	function GambarPenyajian4(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px arial";
		ctx.textAlign = "center";
		var iter = 0;
		var xx = 20;
		var yy = 20;
		for(var i=0;i<4;i++){
			yy = 20 + 20*i;
			for(var j=0;j<5;j++){
				xx = 20 + 30*j;
				ctx.fillText(Arr[0][iter],xx,yy);
				iter++;
			}
		}
		
		return 0;
	}
	function GambarPenyajian3(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		let a_image = new Image();
		a_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACxCAMAAACyXtKYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvRQTFRFKSkpJycnJCQkHR0dIiIiNjY2AAAAAAAACQklDQ0wCgojAwMLCAgfCgokDg4XFBRMGhpiExNHBgYXEBA/FBRLEREkamqZjY2xISFnVFSJhISqQkJ+WlqOkpK0JSVqe3ukpaXBIyNoYGCSmpq6TEyEZ2eWqqrFKChsQ0N+PDx6NjZ1Hh5kMjJyRUWALy9wS0uEU1OJKSlsJCRpR0eBVVWLGxtjMDBxV1eMXl6ROzt5HBxkWFiNTEyFVlaMLy9xRUV/pqbCh4escHCdsrLKxsbYw8PWxcXX0tLg2NjksbHKysrbtLTLZGSVtLTMvLzRzs7ednaivb3SzMzcw8PV0dHftrbNPz97fX2mHR1kiIitISFmoqLAfHylHh5loqK/oKC+QUF9WVmNpKTBVlaLgYGpeXmjwsLV2dnl6+vxRER/nZ28l5e4hISrJSVpd3eiv7/TXFyPMjJzi4uwoaG/gICnICBmc3OfJiZqlZW2r6/IIyNpSEiCKytthYWrq6vGKytuOjp4qKjDZ2eX8/P33d3oenqk1NTi9PT4zc3dsLDJUVGIwcHV7+/01NTh09Phm5u6n5+9JydqHx9lIiJoBgYZCQkhBgYYAgIIBgYVCQkQS0tLdXV1WFhYISEhSkpKV1dXAQEBpaWl////v7+/SUlJpKSkU1NT////JSUlOjo6KysrEBAQGxsbTU1NeHh4WlpaIyMjWVlZLCwsGRkZDAwMCwsQOzs7ExNJGBgifn5+np68Jydrj4+y29vmwcHUIiJneHiiMTFy7u7zbGyaLi5wNzd26+vyOjp3WlqNKChrgICo7Ozyf3+nWFiMg4Oq6enwqqrEMzNzi4uvjY2wx8fYx8fZSkqD4ODqwMDUPj574eHrGxti39/pXl6Qz8/ePz98q6vF1dXi4eHqysray8vbPT161tbjlJS2NTV0VFSKHBxjNDR0ZGSU5OTsaWmX6env5OTt6urxiYmu9vb59/f53NznKiptHR1lBQUJHBwcd3d3goKCrB8HxwAAAPx0Uk5T////////AP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////////////////////////////////6f/ZUQAAA/9JREFUeJzt3VtIFGEYBuD5dNc1i6wlsQy7iJaCTuRVaIIJhVpbLplRFB0oOkCaCYF0AruIoKLwSjQo2g5SllGSlmjRRYiQUJRkXURHBPOcLWtmM7N2sfrdrH0wh973ZtaZ/d9/H3YGl//mJ4UUw0JEw1JdDiIXGWcRpDgoQK5Ym1B6QZEJKFxAEcv/SYkhCoReTSL6Mf66GSlTiPqYt8YTdYdeuYk6x183IyWBqIN5q0UpP+Pom5IUVH+HjCb4UaPM0F+/cdNM9fByzDCTUtSP2qqkUFfvXP3D/3JSV5tKWRhQHxN64l6qn30UPszslHnT6YM7nppcg0GVMmtOXc63pLaepZOpYVVdMHyY2SnpVOMjqk5Ocd5WKQna19Hf1qM+K5uptjd8mEkpUZlvwinLpvrjyavfVx0hShxVhg8zH2VPw6pXSx7maI933xjKVp3SbhnKYfVUzTufRz0EasbcYPt1y1WdMv95ffhA81E8nfnl6iE23vG9xP+p5Hld6dlNFVkJD7qnq+f3NOxSPjdmBBq/aGfCB5qPMuGAIhZQuIAiFmnKOVtQRpwHyVVmC4pjZwxdtsfqJEXvAEVoflC4KlCkAgpbBYpUQGGrQJEKKGwVKFIBha0CRSqgsFURUpxDQhP/nR/fClcFilSEKa4rRlKGpSanqC3kum4LSjTl2ekGA0VmflC4KlCkAgpbBYpUQGGrQJEKKGwVKFIBha0CRSqgsFWgSAUUtspeFCzpycyPJT2uyl7PCigy84PCVYEiFVDYKlCkAgpbBYpUQGGrQJEKKGwVKFIBha0CRSqgsFVY0pMKlvTYKns9K6DIzA8KVwWKVEBhq0CRCihsFShSAYWtAkUqoLBVoEgFFLYKFKmAwlZhSU8qWNJjq+z1rIAiMz8oXBUoUgGFrQJFKqCwVaBIBRS2ChSpgMJWgSIVUNgqUKQCClulLendXifUFnmi7uVeE6rSl/QM/FYcN//unPjP0Zb0jNx/5Qa/C+FEot9goEgEFC6giMW0lLlJBfmRjTCYciv0f4jIN+6K82JTZPMbTPFk5hSU0e/otaE/a8+8/zp6xXIUNbWUP6BkFT5efbe8Xv0ZlTsQO3v9mjUBq1L2biI6UXjIfzgjJrs6j6rzjjdalLLiBG34mtjzdHkzXb/gWXC/5XyxP82alM37AmmKN+ZoikbJOq3eZkHLUoaKFyulVVWLNMprbc/TfqtSXmRXepumHYi71zyY/HvjnSPuZ36rUgbuavsbF23zJbbQsbWVly4U+VKtSGmfQrMUxft2pbY5bXt6a1LLSc/jz6mnHn4pj6zIeIpYQOECilhA4WI3ioE73o7sphqhKurfTxVCXRPL9gdSTd7JfwCcFj32H6J54wAAAABJRU5ErkJggg==";
		
		a_image.onload = function () {
			var scale = 1;
			ctx.drawImage(a_image, 0, 0,a_image.width*1*scale, a_image.height*1*scale);
			
			ctx.font = "14px calibri";
			ctx.textAlign = "center";
			ctx.fillStyle = "white";
			ctx.fillText("Nilai",60,20);
			ctx.fillStyle = "black";
			var xx = 20;
			var yy = 37.5;
			for(var i=0;i<=Arr[0].length;i++){
				yy = 42.5 + 25*i;
				if(i<Arr[0].length){
					ctx.fillText(Arr[0][i],162.5,yy);
					ctx.fillText(60+i*10,60,yy);
				}else{
					ctx.fillText(Arr[1],162.5,yy);
				}
			}
		}
		return 0;
	}
	function GambarPenyajian2(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		ctx.font = "16px arial";
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
	function GambarPenyajian1(nmcanvas,Arr){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		
		ctx.font = "16px arial";
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
		const Aljabar = MyPenyajian1();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian1(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Urutkanlah data nilai di atas dari terkecil ke terbesar!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal2(canv){
		const Aljabar = MyPenyajian2();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian2(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Urutkanlah data nilai di atas dari terbesar ke terkecil!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal3(canv){
		const Aljabar = MyPenyajian3();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian3(canv,[ArSisi[1],ArSisi[2]]);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berapakah jumlah siswa yang mendapatkan nilai "+ArSisi[0]+"?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal4(canv1,canv2){
		const Aljabar = MyPenyajian4();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian4(canv1,ArSisi);
		const DrawPenyajianT = GambarPenyajian4Tabel(canv2,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = "";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal5(canv){
		const Aljabar = MyPenyajian5();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian5(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Banyak balita yang memiliki berat badan "+ArSisi[1]+" kg?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal6(canv){
		const Aljabar = MyPenyajian6();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian6(canv,ArSisi);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Jangkauan data tersebut adalah ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal7(){
		const Aljabar = MyPenyajian7();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berikut data penjualan buku selama satu minggu di toko Berilmu. <br>";
		ss += "Diketahui "+ArSisi[3][0][1]+" "+ArSisi[3][0][2]+" buku, "+ArSisi[3][1][1]+" "+ArSisi[3][1][2]+" buku, "+ArSisi[3][2][1]+" "+ArSisi[3][2][2]+" buku, "+ArSisi[3][3][1]+" "+ArSisi[3][3][2]+" buku, dan sisanya buku pengetahuan. <br>";
		ss += "Jika total penjualan buku seluruhnya selama satu minggu sebanyak "+ArSisi[2]+" buku.<br>";
		ss += "Maka penjualan buku pengetahuan sebanyak ... buku.<br>";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal8(){
		const Aljabar = MyPenyajian8();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berikut data penjualan buku selama satu minggu di toko Berilmu. <br>";
		ss += "Diketahui "+ArSisi[3][0][1]+" "+ArSisi[3][0][2]+" buku, "+ArSisi[3][1][1]+" "+ArSisi[3][1][2]+" buku, "+ArSisi[3][2][1]+" "+ArSisi[3][2][2]+" buku, "+ArSisi[3][3][1]+" "+ArSisi[3][3][2]+" buku, dan sisanya buku pengetahuan. <br>";
		ss += "Jika total penjualan buku seluruhnya selama satu minggu sebanyak "+ArSisi[2]+" buku.<br>";
		ss += "Banyak penjualan "+ArSisi[4]+" jika digabungkan adalah ... buku.<br>";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal9(){
		const Aljabar = MyPenyajian9();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berikut data penjualan buku selama satu minggu di toko Berilmu. <br>";
		ss += "Diketahui "+ArSisi[3][0][1]+" "+ArSisi[3][0][2]+" buku, "+ArSisi[3][1][1]+" "+ArSisi[3][1][2]+" buku, "+ArSisi[3][2][1]+" "+ArSisi[3][2][2]+" buku, "+ArSisi[3][3][1]+" "+ArSisi[3][3][2]+" buku, dan sisanya buku pengetahuan. <br>";
		ss += "Jika total penjualan buku seluruhnya selama satu minggu sebanyak "+ArSisi[2]+" buku.<br>";
		ss += "Buku yang terjual sebanyak "+ArSisi[4]+" buku adalah .... <br>";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal10(canv){
		const Aljabar = MyPenyajian10();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian10(canv,[ArSisi[1],ArSisi[2],ArSisi[3]]);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berapa banyak siswa yang menyukai olahraga "+ArSisi[0]+"?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal11(canv){
		const Aljabar = MyPenyajian11();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		const DrawPenyajian = GambarPenyajian11(canv,[ArSisi[1],ArSisi[2],ArSisi[3]]);
		var Nama = NamaTokoh();
		var ss
		
		ss = "Olahraga yang disukai dengan banyak "+ArSisi[0]+" siswa adalah .... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal12(){
		const Aljabar = MyPenyajian12();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Data makanan kesukaan siswa kelas 3 SD Cinta Ibu.<p>";
		ss += ArSisi[5]+"<p>"
		ss += "Buatlah tabel dari data diatas!";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		//var noBenar = NoJawabanBenar(Ar, jawab);
		var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		var textSoal = ss//+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal13(){
		const Aljabar = MyPenyajian13();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Data makanan kesukaan siswa kelas 3 SD Cinta Ibu.<p>";
		ss += ArSisi[4]+"<p>"
		ss += "Banyak siswa yang menyukai "+ArSisi[0]+" ada ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		//var noBenar = NoJawabanBenarEqual(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		ArFix.push(ArSisi);
		return ArFix;
	}
	function GetSoal14(){
		const Aljabar = MyPenyajian14();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Berikut adalah Data Kegemaran Siswa Kelas 3 di SD Cerdas Pintar, <br>";
		ss += "yaitu siswa yang "+ArSisi[3][0]+" ada "+ArSisi[1][0]+" orang, "+ArSisi[3][1]+" ada "+ArSisi[1][1]+" orang, "+ArSisi[3][2]+" ada "+ArSisi[1][2]+" orang, "+ArSisi[3][3]+" ada "+ArSisi[1][3]+" orang, dan "+ArSisi[3][4]+" ada "+ArSisi[1][4]+" orang.<br>";
		ss += "Kegemaran apakah yang paling banyak diminati siswa?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar)); 
		return ArFix;
	}
	function GetSoal15(){
		const Aljabar = MyPenyajian15();
		var ArSisi=Aljabar[0];
		var benar=Aljabar[1];
		var arrSalah=Aljabar[2];
		
		var Nama = NamaTokoh();
		var ss
		
		ss = "Anak-anak di Kelas 3A diminta untuk mencatat jenis buah yang mereka bawa untuk makan siang. <p>"
		ss += "Hasilnya sebagai berikut:<br>";
		ss += "- "+ArSisi[1][0]+" ada "+ArSisi[0][0]+" orang, <br>- "+ArSisi[1][1]+" ada "+ArSisi[0][1]+" orang, <br>- "+ArSisi[1][2]+" ada "+ArSisi[0][2]+" orang, <br>- "+ArSisi[1][3]+" ada "+ArSisi[0][3]+" orang, dan <br>- "+ArSisi[1][4]+" ada "+ArSisi[0][4]+" orang.<p>";
		ss += "Dari data di atas, berapa <i>Total Anak</i> yang membawa buah untuk makan siang?";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = arrSalah[0];
		Ar[2] = arrSalah[1];
		//Ar[3] = arrSalah[2];
		
		//Ar[0] = StringRibuan(Ar[0]);
		//Ar[1] = StringRibuan(Ar[1]);
		//Ar[2] = StringRibuan(Ar[2]);
		//Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>";
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
					GetSoal15];
	
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
	
	
	
	dd1.innerHTML="<p>Kelas 3 Bab 5 \u{2192} Penyajian Data dalam Tabel </p>";
	if(no==1){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sebuah data hasil ulangan matematika kelas III SD Pintar sebagai berikut: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sebuah data hasil ulangan matematika kelas III SD Pintar sebagai berikut: </p>";
		cc1.width = 210;
		cc1.height = 60;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==2){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Sebuah data hasil ulangan matematika kelas III SD Cerdas Ceria sebagai berikut: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Sebuah data hasil ulangan matematika kelas III SD Cerdas Ceria sebagai berikut: </p>";
		cc1.width = 210;
		cc1.height = 60;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==3){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data ini merupakan data tinggi badan dari SD Hebat Sekali: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data ini merupakan data tinggi badan dari SD Hebat Sekali: </p>";
		cc1.width = 210;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==4){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut data berat badan 20 balita dalam kg: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut data berat badan 20 balita dalam kg: </p>";
		cc1.width = 210;
		cc1.height = 80;
		cc2.width = 240;
		cc2.height = 534;
		ss = namefunc[no-1](cc1.id,cc2.id);
		dd2.innerHTML+="<p>Buatlah tabel berdasarkan data berat badan 20 balita!</p>";
		dd3.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc3);
	}else if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut data berat badan 20 balita dalam kg: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut data berat badan 20 balita dalam kg: </p>";
		cc1.width = 210;
		cc1.height = 80;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==6){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Berikut data berat badan 20 balita dalam kg: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Berikut data berat badan 20 balita dalam kg: </p>";
		cc1.width = 210;
		cc1.height = 80;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==10){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data hobi olah raga siswa kelas III SD Terbaik sebagai berikut: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data hobi olah raga siswa kelas III SD Terbaik sebagai berikut: </p>";
		cc1.width = 210;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==11){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Data hobi olah raga siswa kelas III SD Terbaik sebagai berikut: </p>";
		else			dd1.innerHTML+="<p>"+nourut+". Data hobi olah raga siswa kelas III SD Terbaik sebagai berikut: </p>";
		cc1.width = 210;
		cc1.height = 177;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML+="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==12){
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		cc1.width = 240;
		cc1.height = 534;
		const DrawPenyajian12 = GambarPenyajian12(cc1.id,ss[2]);
		dd4.innerHTML+="<br>Jawaban : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
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

 
 
var names=new Array();
names[0]="Yaakov";
names[1]="Jenny";
names[2]="Joy";
names[3]="jim";
names[4]="pal";
names[5]="frenk";
names[6]="bally";
names[7]="paula";
names[8]="laura";
names[9]="jane";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
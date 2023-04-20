let names = ["Yaakov","John","Jen","jason","laura","frank","larry"];
names.forEach( e => {
    if(e.charAt(0)==='J'|| e.charAt(0)==='j'){
        console.log("Goodbye "+ e)
	} else {
        console.log("Hello "+ e)
    }
}
)

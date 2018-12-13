var ar = ['a', 'b', 'c', 'd'];

ar[10] = 'x';
ar[8] = new Date();

ar.push('w');
ar = ar.slice(3, 7);

ar = ar.filter((v, i) => v.indexOf('a') >= 0);
ar.forEach((v) => console.log(v));
ar.map((v) => { return { name: v, lastname: '' } });
let str = ar.reduce((prev, v) => { return prev + v });

export class X {

	f() { // a e b vivino qui
		var a = 10;
		if (true) { // c vive qui
			var b = 10;
			let c = 20;
			
			const d = 10;
			
		}
		// qui posso usare a e b, ma non c
	}
}

function a() {
	console.log('ciao');
}

function b(arg) {
	arg();
}

b(a);
b(a());
b(function() { // closure
});
b(() => {}}

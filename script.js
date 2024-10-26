//unenal zangvac mejy 5 hat object, objectnery unenan title
//text, img ev info keyer
//infoyi vra pahel zangvac, vori mej ka3 hat object
//amen objecti mej ka 1 nkar, ekrani vra tpeluc skzbic ereva IMG key i tak
//pahac nkarnery, ayd nkarneri vra click aneluc, takic tpi info keyi miji nkarnery



 var arr = [
	{
		id: "menu1",
		title: "menu1",
		des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		src: "2.jpg",
		info:[
		{
			src:"1.jpeg"
		},
		{
			src:"3.jpeg"
		},
		{
			src:"4.jpeg"
		}
	        ]
	},
	{
		id: "menu2",
		title: "menu2",
		des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		src: "5.jpeg",
		info:[
			{
			src:"6.jpeg"
		},
		{
			src:"7.jpeg"
		},
		{
			src:"8.jpeg"
		}
				]
	},
	{
		id: "menu3",
		title: "menu3",
		des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		src: "9.webp",
		info:[
			{
			src:"10.jpeg"
		},
		{
			src:"11.webp"
		},
		{
			src:"12.jpeg"
		}
		]
	},
	{
		id: "menu4",
		title: "menu4",
		des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		src: "13.webp",
		info:[
			{
			src:"14.jpeg"
		},
		{
			src:"15.jpeg"
		},
		{
			src:"16.webp"
		}
		]
	},
	{
		id: "menu5",
		title: "menu5",
		des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		src: "20.jpeg",
		info:[
			{
			src:"19.jpeg"
		},
		{
			src:"18.webp"
		},
		{
			src:"17.webp"
		}
		]
	}
]
 

var box = document.getElementById('box')
var mainStr = ""
for (var i of arr) {
    mainStr += `<img src="${i.src}" width="300px" height="300px" onclick="f('${i.id}')">`
}
box.innerHTML = mainStr

var minBox = document.createElement('div')
minBox.style.display = 'flex'
minBox.style.justifyContent = 'center'
minBox.style.alignItems = 'center'	
minBox.style.flexWrap = 'wrap'
minBox.style.gap = '10px'
minBox.style.marginTop = '20px'
document.body.appendChild(minBox)
function f(a) {
    var infoStr = ""
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === a) {
            for (var info of arr[i].info) {
                infoStr += `<img src="${info.src}" width="300px" height="300px">`
            }
        }
    }
    minBox.innerHTML = infoStr
}


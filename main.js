
function imageBase(){
	this.date="";
	this .fname="";
}


$(document).ready(function() {

	$("#fileUpload").change(function() {
			alert("2");
	});


	$('.divLeft a').click(function() {

			 var new_div = $(this).attr('id');
			 $('.active').attr('class','');
			 $(this).attr('class', 'active');
			 $('#left3').load('next.html #'+new_div);

			//  code for prashiks page
			 if( new_div == "reportAdd"){

				  console.log("inside "+$('#left3').find('#reportAdd #chartContainer').attr('id'));

				 var chart = new CanvasJS.Chart( $('#left3').find('#reportAdd #chartContainer').attr('id'), {theme : "theme2",
				 title:{text: "Current Status"},data: [{type: "line", lineThickness : 1.75,markerSize : 12,
				 dataPoints: [
					 {label:"2006",y:0},
					 {label:"2007", y: 2.7},
					 {label:"2008", y: 3.2},
					 {label:"2009", y: 3},
					 {label:"2010",y: 4},
					 {label:"2011",y: 7},
					 {label:"2012", y:10},
					 {label:"2013",y:8},
					 {label:"2014",y:8.5},
					 {label:"2015",y:9},
					 {label:"2016",y:13},
					 {label:"2017",y:13.4}
				 ]
			 }],
			 axisY:{label:"No. of clicks",suffix : "K"}		//Also can use <prefix : "$",>
		 	});

			chart.render();

	 }//IF ENDS

	});

});


function showTemplate(id) {

	// alert(id);
	category= id;
  	$('#left3').load('next.html #loadTemplate_'+id);

}

function loadTemplate(id) {

	$('#left3').load("next.html #"+id);
}

function selectLogo() {

		document.getElementById("logoImg").click();
}

function selectImage() {

		document.getElementById("designSelect").click();
}

function uploadLogo(files) {
	var val =  document.getElementById("logo");
	val.src = window.URL.createObjectURL(files[0]);
}

function uploadImg(files) {


	var val =  document.getElementById("myDesign");
	val.src = window.URL.createObjectURL(files[0]);
}

function upLoadDesign() {

		var mydesign = document.getElementById("myDesign");
		mydesign.setAttribute("src","banner3.jpeg");
}


	function generate() {

		html2canvas($('#addImage'),{

			onrendered: function (canvas) {

				console.log($('#template2').class());
				$('#saveimage').attr('href',canvas.toDataURL('image/png'));
				$('#saveimage').attr('download','MyAdd.png');
				$('#template #saveimage')[0].click();

			}
		});

	}

	function resize(){

	    var heights = window.innerHeight;
	    document.getElementById("left2").style.height = heights + "px";
		 document.getElementById("left3").style.height = heights + "px";

	}

	resize();

	window.onresize = function() {
	    resize();
	};


function myexpress(){
			if(document.getElementById("cat").checked)
				document.getElementById("logos").style.display="block";
			else
				document.getElementById("logos").style.display="none";
}

// Mayuri
function fillClientDetails() {

	$("#left3").load("next.html #clientDetails")
}

function popupFun(){
		 //  var popup = document.getElementById("loki");
		 popup.classList.toggle("show");
		alert("in pop")
	}
	  var d= new Date();
	  var count=0,i=1;
	  function add_text(){
		// this.style.borderColor="red 2px";


	  // var a=document.getElementById("ad_check").checked;
		if(count<3){
			var container= document.getElementById("target");
			var input = document.createElement("input");
		  input.type="text"
		  input.id="target"+i;
		  input.style="border: 3px solid #ccc";
			container.appendChild(input); // put it into the DOM
		  count++;
		  i++;
		}

	}
	function resetAll(){
	  document.getElementById('fName').style.borderColor= '';
	  document.getElementById('lName').style.borderColor= '';
	  document.getElementById('mo_num').style.borderColor= '';
	  document.getElementById('ID').style.borderColor= '';
	  document.getElementById('adv').style.borderColor= '';
	  document.getElementById('date').style.borderColor='';
	  document.getElementById('email').style.borderColor= '';
	  document.getElementById("fName").style.color='';
		document.getElementById("lName").style.color='';
		  document.getElementById("ID").style.color='';
		document.getElementById("adv").style.color='';
	  document.getElementById("date").style.color='';
	  document.getElementById("email").style.color='';

	}
	function validate(){
	  var flag=0;
	 var e_re=/^[a-zA-Z0-9.%_+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi;
	 var mo_re =  /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g;
	 var name_re= /^[a-zA-Z ]{2,30}$/;
	 var Id_re= /^[a-zA-Z]{2}[0-9]{3}$/
	 var namePat = new RegExp(name_re);
	 var numPat = new RegExp(mo_re);
	 var ePattern =  new RegExp(e_re );
	 var idPat= new RegExp(Id_re);
	 var strEmail =document.getElementById("email").value;
	 var moNum= document.getElementById("mo_num").value;
	 var namef= document.getElementById("fName").value;
	  document.getElementById("fName").style.color='';
		document.getElementById("lName").style.color='';
		  document.getElementById("ID").style.color='';
		document.getElementById("adv").style.color='';
	  document.getElementById("date").style.color='';
	  document.getElementById("email").style.color='';
	  if(document.getElementById("fName").value==""){
		document.getElementById('fName').style.borderColor= "red";
		flag=1;
	 }else{
		document.getElementById('fName').style.borderColor= '';

	 }
	 if(document.getElementById("lName").value==""){
		document.getElementById('lName').style.borderColor= "red";
		flag=1;
	 }else{ document.getElementById('lName').style.borderColor= '';

	 }

	 if(document.getElementById("mo_num").value==""){
		 document.getElementById("mo_num").style.borderColor= "red";
		  flag=1

	  }else{
		document.getElementById("mo_num").style.borderColor= '';
		  flag=0;
	  }
		if(document.getElementById("email").value==""){
		document.getElementById("email").style.borderColor= "red";
		flag=1;
	  }else{
	  document.getElementById("email").style.borderColor= '';


	  }
		if(document.getElementById("ID").value==""){
		document.getElementById("ID").style.borderColor= "red";
		flag=1;
	  }else{
	  document.getElementById("ID").style.borderColor= '';

	  }
		if(document.getElementById("adv").value==""){
		document.getElementById("adv").style.borderColor= "red";
		flag=1;
		 }else{
		 document.getElementById("adv").style.borderColor= '';

		}
	  if(document.getElementById("date").value==""){
		document.getElementById("date").style.bordercolor= "red";
		flag=1;
		}else{
		document.getElementById("date").style.bordercolor= '';
		 }
	 if(document.getElementById("sDate").value==""){
		document.getElementById("sDate").style.bordercolor= "red";
		flag=1;
	 }else{
	 document.getElementById("sDate").style.bordercolor= '';
	 }
	  if(document.getElementById("eDate").value==""){
		document.getElementById("eDate").style.bordercolor= "red";
		flag=1;
	 }else{
		document.getElementById("eDate").style.bordercolor= '';
	 }

		if(!numPat.test(moNum)){
		  alert("invalid mobile num");
		  flag=1;
		 }


		 if(!ePattern.test(strEmail)){

			document.getElementById("email").style.color= "red";
			document.getElementById("email").value="*please Enter valid email Id*";
			document.getElementById("email").style.borderColor= "red";
			flag=1;
		 }

		  if(!namePat.test(namef)){

			document.getElementById("fName").style.color= "red";
			document.getElementById("fName").value="*please Enter valid name*";
			document.getElementById("fName").style.borderColor= "red";
			flag=1;
		 }
		 var namel= document.getElementById("lName").value
		 if(!namePat.test(namel)){
			document.getElementById("lName").style.color= "red";
			document.getElementById("lName").value="*please Enter valid name*";
			document.getElementById("lName").style.borderColor= "red";
			flag=1;
		 }
		 var advName=document.getElementById("adv").value;
		  if(!namePat.test(advName)){
			document.getElementById("adv").style.color= "red";
			document.getElementById("adv").value="*please Enter valid name*";
			document.getElementById("adv").style.borderColor= "red";
			flag=1;
		 }
		 var id= document.getElementById("ID").value
		  if(!idPat.test(id)){
			document.getElementById("ID").style.borderColor= "red";
			document.getElementById("ID").value="*please Enter valid ID*";
			 document.getElementById("ID").style.color="red";
			flag=1;
		 }
		  alert("Are you sure to submit the form?");
		 if(flag==0){
		  return true;
		 }
		 else{
			alert("some fields are empty");
			return false;
		 }

	}

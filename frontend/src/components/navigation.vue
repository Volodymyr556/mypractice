<template>
    <nav>
        <router-link to="/" class="btn">
            На початкову сторінку
        </router-link>
        <router-link to="/about" class="btn">
            Про авторів
        </router-link>

        <router-link to="/create" class="btn">
            Створити нове запитання
        </router-link>
    </nav>
</template>
<script>
export default {
    name: "NavigationPanel"
}
</script>
<style>
.btn {
	display: inline-block;	
	box-sizing: border-box;
	padding: 0 24px;
	margin: 0 15px 15px 0;
	outline: none;
	border: none;    
	border-radius: 3px;
	height: 37px;
	line-height: 37px;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: normal;
	text-decoration: none;
	color: #07bc4c;
	background-color: #fff;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
}
.btn:focus-visible {
	box-shadow: 0 0 0 3px lightskyblue;
}
.btn:hover {
	box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
}
.btn:active {
	background-color: #efefef !important;
}
.btn:disabled {
	background-color: #eee;
	color: #444;
	pointer-events: none;
}
 
.btn-2 {
	display: inline-block;	
	box-sizing: border-box;
	padding: 0 24px;
	margin: 0 15px 15px 0;
	outline: none;
	border: none;    
	border-radius: 3px;
	height: 37px;
	line-height: 37px;
	font-size: 14px; 
	text-transform: uppercase;
	font-weight: normal;
	text-decoration: none;
	color: #fff;
	background-color: #05cd51;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;
	transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
}
.btn-2:focus-visible {
	box-shadow: 0 0 0 3px lightskyblue;
}
.btn-2:hover {
	box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
}
.btn-2:active {
	background-color: #058c38 !important;
}
.btn-2:disabled {
	background-color: #aed2bc;
	color: #444;
	pointer-events: none;
}
</style>
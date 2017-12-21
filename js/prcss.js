// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>
console.log("gumagana")

let process = {
	menu:function(){
		
		let content = <div>
	
		    <h1 align='center'> SPECIAL KAKANIN</h1>
			<audio id="audio_bomb">
				<source src="audio/horse.ogg" type="audio/ogg" />
			</audio>
			<ul>
				<li><a href='#' onClick={process.page1}>PUTO MILK</a></li>
				<li><a href='#' onClick={process.page2}>PUTO BUNGBONG</a></li>
				<li><a href='#' onClick={process.page3}>BAYE-BAYE</a></li>
				<li><a href='#' onClick={process.page4}>YEMA CAKE</a></li>
				<li><a href='#' onClick={process.page5}>SUMAN CASSAVA</a></li>
				<li><a href='#' onClick={process.page6}>TIKOY</a></li>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h1 align='center' >MILK PUTO</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
				<div align='center'>
						<img src='img/milkputo.jpg' width='100px' size='100px' />

				<p align='center'>
				<br/>INGREDIENTS
					<br/>*6 cups evaporated milk
					<br/>*1 cup condensed milk
					<br/>*3 cups galapong 
					<br/>*1 and 1/2 cups glutinous rice(malagkit)
					<br/>*2 bottles 7 ups
					<br/>*1 cup white sugar
					<br/>*1 cup whole corn kernels 
					<br/>*3 cups freshy shredded buko

					<br/>INTRUCTIONS
						<br/>In a pot,combine the evaporated and condensed milk
						<br/>Milled rice,glutinious rice,7-up and sugar
						<br/>Mix well.Boil for 3 minutes,stirring continously
						<br/>Strain, Transfer the boiled rice to a moderate heat
						<br/> and cook over stirring continously.
						<br/>Add the corn and buko and continue cooking until thick
						<br/>Pour into a 12 inch-round wooden container,cover with
						<br/> cheesecloth(katsa) and steam for 40 minutes to an hour
						<br/>slice diagonally and Serve.
					</p>
				</div>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h1 align='center'>Puto Bungbong</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
				<div align='center'>
						<img src='img/putobongbong.jpg' width='100px' />
					<p align='center'>
						<br/>INGREDIENTS
					<br/>*1 pack(400 grams)glutinous rice flour
					<br/>*2 packs (115 grams)purple yam powder
					<br/>*21/2 cups of water
					<br/>*Brown sugar or mascuvado(raw sugar)
					<br/>*Banana leaves
					<br/>*Grated coconut

					<br/>PROCEDURE
						<br/>Preapre steamer with enough water for steaming
						<br/>In large bowl,combine purple yam powder
						<br/>and Glutinous rice flour,Mix Together until
						<br/>well combined.Gradually ad enough  water to the rice flour
						<br/> To make a dough.Knead until smooth.
						<br/>Pinch off about 2 tablespoons of the dough
						<br/>Using your hands make a ball and roll into a round 
						<br/>And long shape,about 4 to 5 inches in long 
						<br/>Spread margarine or butter in a heat proof plate
						<br/>And layered the dough,steam for 3-4 minutes or until
						<br/>Done and Apply margarine or Butter then roll in shedded coconut 
						<br/>And then Serve with muscovado sugar.
					</p>
				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h1 align='center'>Baye-Baye</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
				<div align='center'>
						<img src='img/baye.jpg' width='100px' />

					<p align='center'>
						<br/>INGREDIENTS
					<br/>*2 cups pinipig
					<br/>*1 cup coconut water
					<br/>*1/2 cup sugar
					<br/>*1 1/2 cups butong(young cococnut)Grated
					<br/>*

					<br/>PROCEDURE
						<br/>1.Grind toasted pinipig,In a bowl,mix ground pinipg,
						<br/>coconut water and sugar.Blend well and add grated.
						<br/>butong.
						<br/>2.Divide into serving portions wrap each serving in
						<br/> banana leaves or wax paper.Chill before srving
						<br/>
					
					</p>
				</div>

			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h1 align='center'>Yema Cake</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
			<div align='center'>
						<img src='img/yema.jpg' width='100px' />
					<p align='center'>
						<br/>INGREDIENTS
					<br/>*Cake batter,2 2/1 cup cake flour,3 teaspoon baking powder
					<br/>*1 teaspoon salt,1/2 cup vegetable oil,6 eggs,1/4 cup sugar
					<br/>*1 cup whole milk,1 teaspoon lemon extract,meringue,6 egg white
					<br/>*1 cup sugar,1 teaspoon cream of tartar,yema frosting,1 can 
					<br/>*(354g)evaporated milk,1 can(392g)condensed milk
					<br/>*6 eggs yolks

					<br/>PROCEDURE
						<br/>Put cake flour,baking powder and salt in a mixing bowl
						<br/>Put together egg yolks,sugar,milk and lemon essense.
						<br/>Beat in slow speed or mix with a wire whisk until well blended.
						<br/>set a side.On a separate bowl,mix egg white and cream of tartar.
						<br/>Gradually add in sugar and continue to beat until stiff but not dry.
						<br/>Combine flour mixture and egg white mixture.Slowly add vegetable oil 
						<br/>And fold using a rubber spatula.line or grease cake pan and pour the 
						<br/>mixture.Bake in a preheated oven at 347 F for 40 minutes 
						<br/>
					</p>	
					</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page5:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h1 align='center'>Suman Cassava</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
			<div align='center'>
						<img src='img/suman.jpg'  width='100px' />

					<p align='center'>
						<br/>INGREDIENTS
					<br/>*3 cups grated Cassava(raw),3/4 cup brown sugar
					<br/>*1/4 cup thick coconut milk or coconut cream
					<br/>*1 cup shredded young buko banana leaves
					<br/>*wilted for wrapping
					<br/>*
					<br/>*

					<br/>PROCEDURE
						<br/>Mix all the ingredients together until well combined
						<br/>scoop 1/4 of the mixture and wrap tighly.
						<br/>Fold or roll to enclose the mixture into the steamer.
						<br/>Steam for 45 minutes to 1 hour or until done.
						<br/>Remove from the steamer and let cool down .
						<br/>
						<br/>Serve and Enjoy!!!!!!
						<br/>
						<br/>
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h1 align='center'>Tikoy</h1>
				<br/><a href='#' onClick={process.menu}>BACK</a>
			<div align='center'>
						<img src='img/tikoy.jpg' width='100px' height='100px' size='100px' />
					<p align='center'>
						<br/>INGREDIENTS
					<br/>*1 tbsp white sesame seeds,1tbsp milk,3 1/4 cups or 400 grams glutinous rice flour
					<br/>*2/3 cup brown sugar,1/2 cup chinese dates,softened in water,cut other dried fruit
					<br/>*or 1/4 dates and 1/4 cups nuts,water as needed,
					<br/>*1tbsp vegetable oil or nonstick cooking spray
					<br/>*

					<br/>PROCEDURE
						<br/>Prepare the work for steaming.In a bowl,mis the boiling water and the sugar.
						<br/>Stir constantly to dissolve.(if using peen tong,break the candy into several pieces,
						<br/>so that it will dissove more easily in the boiling water).cool
						<br/>Seek the chinese dates in hot water for at least 30 minutes to soften.
						<br/>Another way is to place them in a bowl with water and microwave on high
						<br/>heat for 30 seconds.Cut the dates in half and remove the pits.
						<br/>Place the glutinous rice flour in a large bowl.
						<br/>Make a hole in the middle and add the milk and begin shapping and dough
						<br/>Add 1 tablespoon of water to the dough at a time.
						<br/>Until you have a smooth dough with a satiny texture.
						<br/>Mix 1/2-3/4 of the Chinese dates,nuts or other dried fruits 
						<br/>as you are adding water and working with the dough
						<br/>Grease a 7 inch square cake pan with vegetable oil or non stick cooking spray
						<br/>Place the dough in the cake over medium-high to high heat for 45 minutes
						<br/> Or until the edges of the cake pull away from the pan
						<br/>Remove the cake from the heat and cool.
						<br/>Use a Nkife to loosen the edges then remove the cake.
						<br/>Wrap in wax paper and refrigerate over night.
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},


	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/horse.ogg" type="audio/ogg" />
					</audio>
					<div align='center'>
						<img src='img/image.jpg' width='100px' />
						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);
// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		
		let content = <div>
		    <h1 align='center'> PINOY KAKANIN</h1>
		    <div align='center'>
						<img src='img/milkputo.jpg' width='100px' height='50px' />
						<img src='img/yema.jpg' width='100px' height='50px' />
						<img src='img/putobongbong.jpg' width='100px' height='50px' />
						<img src='img/suman.jpg' width='100px' height='50px' />
						<img src='img/tikoy.jpg' width='100px' height='50px' />
						<img src='img/pininat.jpg' width='100px' height='50px' />
						<img src='img/baye.jpg' width='100px' height='50px' />
			</div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-black"  onClick={process.page1}>PUTO MILK</a>
				<a href='#' class=" button button-fill color-black"  onClick={process.page2}>PUTO BUNGBONG</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page3}>BAYE-BAYE</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page10}>MAJA-BLANKA</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page11}>PALITAW</a>
				
			</p>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-black" onClick={process.page6}>Bitso-Bitso</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page4}>YEMA CAKE</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page7}>SUMAN CASSAVA</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page8}>kalamay</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page9}>kutsinta</a>
				</p>
				<p class="buttons-row">
				<a href='#' class=" button button-fill color-black" onClick={process.page12}>HALAYANG-UBE</a>
				</p>
				</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h2 align='center' >MILK PUTO</h2>
				<p class="buttons-row" width="100px" height="50px">
				<a href='#'  class="button button-fill color-blue"  onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/milkputo.jpg' />

				<p align='center'>
				<br/><div>INGREDIENTS</div>
					<div>*6 cups evaporated milk,1 cup condensed milk,3 cups galapong,1 and 1/2 cups glutinous rice(malagkit)</div>
					<div>*2 bottles 7 ups,1 cup white sugar,1 cup whole corn kernels,3 cups freshy shredded buko</div>

				
					<br/><div>INTRUCTIONS</div>

						<div>In a pot,combine the evaporated and condensed milk,Milled rice,glutinious rice,7-up and sugar</div>
						<div>Mix well.Boil for 3 minutes,stirring continously,Strain, Transfer the boiled rice to a moderate heat</div>
						<div> and cook over stirring continously.Add the corn and buko and continue cooking until thick</div>
						<div>Pour into a 12 inch-round wooden container,cover with cheesecloth(katsa) and steam for 40 minutes to an hour</div>
						<div>slice diagonally and Serve.</div>
					</p>
				</div>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Puto Bungbong</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/putobongbong.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>*1 pack(400 grams)glutinous rice flour,2 packs (115 grams)purple yam powder</div>
					<div>*21/2 cups of water,Brown sugar or mascuvado(raw sugar)</div>
					<div>*Banana leaves,*Grated coconut</div>

					<br/><div>PROCEDURE</div>
						<div>Preapre steamer with enough water for steaming,In large bowl,combine purple yam powder</div>
						<div>And Glutinous rice flour,Mix Together until,well combined.Gradually ad enough  water to the rice flour</div>
						 <div>To make a dough.Knead until smooth.Pinch off about 2 tablespoons of the dough</div>
						<div>Using your hands make a ball and roll into a round,And long shape,about 4 to 5 inches in long</div>
						<div>Spread margarine or butter in a heat proof plate,And layered the dough,steam for 3-4 minutes or until</div>
						<div>Done and Apply margarine or Butter then roll in shedded coconut,And then Serve with muscovado sugar.</div>
					</p>
				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Baye-Baye</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue"onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/baye.jpg' width='100px' height='50px' />

					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>*2 cups pinipig</div>
					<div>*1 cup coconut water</div>
					<div>*1/2 cup sugar</div>
					<div>*1 1/2 cups butong(young cococnut)Grated</div>

					<br/><div>PROCEDURE</div>
					<div>1.Grind toasted pinipig,In a bowl,mix ground pinipg,</div>
					<div>coconut water and sugar.Blend well and add grated butong.</div>
					<div>2.Divide into serving portions wrap each serving in</div>
					<div> banana leaves or wax paper.Chill before srving</div>
					</p>
				</div>

			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Yema Cake</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/yema.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>*Cake batter,2 2/1 cup cake flour,3 teaspoon baking powder</div>
					<div>*1 teaspoon salt,1/2 cup vegetable oil,6 eggs,1/4 cup sugar</div>
					<div>*1 cup whole milk,1 teaspoon lemon extract,meringue,6 egg white</div>
					<div>*1 cup sugar,1 teaspoon cream of tartar,yema frosting,1 can </div>
					<div>*(354g)evaporated milk,1 can(392g)condensed milk</div>
					<div>*6 eggs yolks

					<br/><div>PROCEDURE</div>
						<div>Put cake flour,baking powder and salt in a mixing bowl</div>
						<div>Put together egg yolks,sugar,milk and lemon essense.</div>
						<div>Beat in slow speed or mix with a wire whisk until well blended.</div>
						<div>set a side.On a separate bowl,mix egg white and cream of tartar.</div>
						<div>Gradually add in sugar and continue to beat until stiff but not dry.</div>
						<div>Combine flour mixture and egg white mixture.Slowly add vegetable oil </div>
						<div>And fold using a rubber spatula.line or grease cake pan and pour the </div>
						<div>mixture.Bake in a preheated oven at 347 F for 40 minutes </div>
						</div>
					</p>	
					</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Bitso-Bitso</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/tikoy.jpg' width='100px'  height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>*1 tbsp white sesame seeds,1tbsp milk,3 1/4 cups or 400 grams glutinous rice flour,2/3 cup brown sugar,1/2 cup chinese dates,softened in water,cut other dried fruit</div>
					<div>*or 1/4 dates and 1/4 cups nuts,water as needed,1tbsp vegetable oil or nonstick cooking spray</div>
		

					<br/><div>PROCEDURE</div>
						<div>Prepare the work for steaming.In a bowl,mis the boiling water and the sugar,Stir constantly to dissolve.(if using peen tong,break the candy into several pieces,</div>
						<div>so that it will dissove more easily in the boiling water).cool,Seek the chinese dates in hot water for at least 30 minutes to soften.</div>
						<div>Another way is to place them in a bowl with water and microwave on high,heat for 30 seconds.Cut the dates in half and remove the pits.</div>
						<div>Place the glutinous rice flour in a large bowl.Make a hole in the middle and add the milk and begin shapping and dough</div>
						<div>Add 1 tablespoon of water to the dough at a time.Until you have a smooth dough with a satiny texture.</div>
						<div>Mix 1/2-3/4 of the Chinese dates,nuts or other dried fruits,as you are adding water and working with the dough</div>
						<div>Grease a 7 inch square cake pan with vegetable oil or non stick cooking spray,Place the dough in the cake over medium-high to high heat for 45 minutes</div>
						<div> Or until the edges of the cake pull away from the pan,Remove the cake from the heat and cool.</div>
						<div>Use a Nkife to loosen the edges then remove the cake.Wrap in wax paper and refrigerate over night</div>
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>suman</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/suman.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>*3 cups grated Cassava(raw),3/4 cup brown sugar</div>
					<div>*1/4 cup thick coconut milk or coconut cream</div>
					<div>*1 cup shredded young buko banana leaves</div>
					<div>*wilted for wrapping</div>

					<br/><div>PROCEDURE</div>
						<div>Mix all the ingredients together until well combined</div>
						<div>scoop 1/4 of the mixture and wrap tighly.</div>
						<div>Fold or roll to enclose the mixture into the steamer.</div>
						<div>Steam for 45 minutes to 1 hour or until done.</div>
						<div>Remove from the steamer and let cool down .</div>
						<div>Serve and Enjoy!!!!!!</div>
						<br/>
						<br/>
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Kalamay</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/kalamay.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
					<div>2 1/2 cups Glutinous Rice</div>
					<div>4 cups Coconut Milk(or 1 can coconut milk plus enough water to make 4 cups),3/4 cup Sugar</div>
					<div>1/2 teaspoon anise seed(optional),</div>
							<div>TOPPING</div>
					<div>1 can Coconut Cream or 1 1/2 cups Kakang Gata</div>
					<div>250 grams Brown Palm Sugar or Dark Brown Sugar</div>
					<div>Banana Leaves, heated,Vegetable or Canola Oil</div>
								<div>PREPARATION TIME : 5 minutes</div>
					

									<div>COOKING TIME : 40 minutes</div>

					<div>1 Dissolve the sugar in the coconut milk and put in a pot. Add the anise seeds.</div>
					<div>2 Wash the glutinous rice and pour into the coconut milk and sugar mixture.</div>
					<div>3 Bring to a boil, then turn the heat down to simmer for about 15-20 minutes or until the liquid is fully absorbed by the rice.</div>
					<div>4 On a separate pan over medium heat, put the Coconut cream and Palm sugar and cook stirring continuously until the liquid has reduced in half.</div>
					<div>5 Assemble the Kalamay in a baking dish. Place the banana leaves at the bottom, and brush with oil. Spread the cooked sweet rice onto the leaves and flatten evenly.</div>
					<div>6 Spread the topping onto the sweet rice and bake in a 350 degrees F, pre-heated oven for 20 - 25 minutes.</div>
					<div>7 Cool for 30 minutes before serving.</div>
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>kutsinta</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/kutsinta.jpg' width='100px' height='50px' />
							<p align='center'>
							<div>INGREDIENTS</div>
							<div>1/2 cup Glutinous Rice Flour,1/2 cup Rice Flour,2 tsp Chinese Lye Water(Lihia, as pictured</div>
							<div>3/4 cup Brown Sugar,1 1/2 cup Water,1 drop Red Liquid food color</div>
							<div>Cooking Oil for brushing muffin pan,Grated coconut for dipping</div>
							<div>PREPARATION TIME : 10 minutes</div>
							<div>COOKING TIME : 25 - 30 minutes</div>

							<div>1Heat the water and melt the brown sugar. Do not boil. Add the lihia.</div>
							<div>2Mix in the rice flour and glutinous rice flour, dissolve thoroughly.</div>
							<div>3Strain to remove lumps, then add the food color.</div>
							<div>4Brush the muffin pans with oil and pour the mixture halfway through.</div>
							<div>5Steam for 25 minutes or until the top is set when touched.</div>
							<div>6Serve with a side of grated coconut.</div>
							</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Maja-Blanka</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/maja-blanka.jpg' width='100px' height='50px' />
						<p align='center'>
						<br/><div>INGREDIENTS</div>
						<div>2 cans or 3 cups Coconut Milk,1 can Coconut Cream or 1 1/2 cupsKakang Gata</div>
						<div>2 pieces Sweet Corn, cooked and corn shredded off the cob</div>
						<div>1 cup Cornstarch,1 cup Sugar</div>
						<div>Topping</div>
						<div>2 cups Shredded Coconut, liquid extracted, (sapal), then toasted</div>

						<div>INTRUCTIONS</div>
						<div>1  Dissolve cornstarch on coconut milk, then sift.</div>
						<div>2 Mix all ingredients together, except the topping and cook over low heat.</div>
						<div>3 Stir continuously until thick or about 30 minutes.</div>
						<div>4 Transfer to a greased container and even out the top surface.</div>
						<div>5 Cool for 30 minutes before spreading toasted coconut on top.</div>
						<div>6 Serve cold or at room temperature.</div>
						</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>PALITAW</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/palitaw.jpg' width='100px' height='50px' />
						<p align='center'>
						<div>INGREDIENTS</div>
						<div>2 1/2 cups Glutinous Rice Flour,1 cup Water</div>
						<div>2 cup Shredded Coconut,1 cup Sugar</div>
						<div>1/2 cup Sesame Seeds</div>

						<div>INTRUCTIONS</div>
						<div>1  Toast the sesame seeds until light golden brown. Ground or pound as finely as possible. Cool and mix with the sugar. Set aside.</div>
						<div>2 Make a glutinous rice dough by mixing the flour and water.</div>
						<div>3 Using an ice cream scooper, portion the dough into small balls.</div>
						<div>4 Boil a pot of water. Shape each ball into 2 inch cylinder, then flatten to make like an oval shaped disc.</div>
						<div>5 Shape each ball into 2 inch cylinder, then flatten to make like an oval shaped disc and drop one by one on the boiling water. Once they float to the surface, scoop them out and dredge on shredded coconut.</div>
						<div>6 Serve with the sugar-sesame seeds mixture on a separate plate.</div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>HALAYANG-UBE</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/halayang-ube.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>INGREDIENTS</div>
						<div>2 pounds Ube Root, boiled and peeled,1 can Coconut milk or coconut cream</div>
						<div>3/4 cup Butter, softened,1 can Condensed milk</div>
						<div>1 1/3 cup Sugar,pinch of Salt</div>

						<div>INTRUCTIONS</div>

						<div>1  Cut the boiled and peeled Ube into 2 inch cubes. Using a potato masher or potato ricer, mash until smooth and no chunks are visible. See Cook's tips below for an alternate process.</div>
						<div>2 Mix the ingredients in a pan, leave out 1/4 cup butter.</div>
						<div>3 Cook stirring continuously on medium heat until the liquid is reduced and fully absorbed by the yam, about 5-10 minutes.</div>
						<div>4 Turn the heat to medium low and continue stirring until you get a very thick consistency.</div>
						<div>5 Brush your serving pan or container with remaining butter and spread out the Halayang Ube. The butter will prevent it from sticking to the container.</div>
						<div>6 Cool and refrigerate before serving.</div>
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
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
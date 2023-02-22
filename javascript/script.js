//Create deck constructor
function card(name, meaning, message, warning, image) {
    this.name = name;
    this.meaning = meaning;
    this.message = message;
    this.warning = warning;
    this.image = image;
    
}

// Card names, descriptions and images.
let deck = [
    new card("The Cloud", "The decision decides the outcome. (Choose your decisions carefully)", "Your ability to make decisions wisely is questioned. Relax and open your heart before judging a situation. If you make the best decision, your heart will be at ease.", "Your heart determines whether your luck will rise or fall. Happy and optimistic people attract other people, and good luck is sure to follow.", "thecloud"),
    new card("The Create", "Abundant passion, the blooming of passion.", "When you express your thoughts and emotions, you feel at ease. You will experience increased creativity in the fields of art and music. Inspiration and wonderful ideas will come as a result of focusing in these two fields.", "Don't allow yourself to be restricted by traditional concepts or rules. Follow your intuition and act accordingly—the possibility of unexpected discoveries or encounters will be high.", "thecreate"),
    new card("The Dark", "Let nature take its course, as always.", "Your energy is low, so stop trying to make your schedule full to bursting with visits to/from friends/relatives/acquaintances and take a day off from socializing so you can rest. Even if you lead a fast-paced life, you still need to find the time to take a deep breath and relax.", "Haste makes waste. The truth is, you need to accept your situation and save your energy for the next step.", "thedark"),
    new card("The Firey", "Strong beliefs. Overcoming obstacles.", "You can overcome obstacles with your strong life force. Even if you are on the verge of giving up, your high level of energy can still help you achieve your goals.", "Be careful of being overconfident. It may cause the people around you to hate you or be angry at you.", "thefirey"),
    new card("The Light", "Lead everything yourself. Your prospect for the distant future.", "You attract the attention of everyone with your radiant spirit. No matter what you do, it will always go well, with a great amount of good luck. You will be able to improve your abilities in your area of specialty, and there's a better chance of secret admirers declaring their love.", "It is possible to obtain a bright future by doing your very best. Rush into action without fearing failure.", "thelight"),
    new card("The Mist", "Ascertain the situation, and decide which direction you will take.", "You are given the chance to reconsider what you want to do. You will not be able to fully analyze the problems as a result of your indecisiveness.", "Be calm. If you think simply and with honest feelings, the mist surrounding you will eventually turn into good weather.", "themist"),
    new card("The Rain", "Finally, things turn for the better.", "A rain of blessings will surely occur. Occurrences that are classified as 'misfortunes' can also be thought of as exercises that will strengthen your character. Don't be pessimistic.", "Painful experiences are only temporary. Relax and enjoy life.", "therain"),
    new card("The Snow", "A new beginning. Peace. Purity.", "Change your attitude and create a new beginning. This is a very good time to start taking lessons. You will be able to associate with great mentors.", "Stop fussing about the past. Try changing your point-of-view and take an active part in the 'new' world", "thesnow"),
    new card("The Storm", "Intense emotions. Frustration being reduced.", "Suppressed emotions and fears will come bursting to the surface. You may encounter severe problems. To improve your situation, you need to stop being pessimistic and be more assertive of your opinions.", "If you stay quiet, your charm will be reduced by half. Firmly express your intentions.", "thestorm"),
    new card("The Thunder", "Good luck will come your way if you don't lose yourself.", "Time will test whether you will be able to control your explosive, violent emotions. You will be able to come up with idea after idea; your unique sense of existence is appealing.", "Actions based upon rationality and courage will attract supporters, but selfish desires and behaviors will attract enemies.", "thethunder"),
    new card("The Watery", "Cooperation. The ability to open people's minds.", "Everyone trusts you because you are such an understanding person. The ability to govern things smoothly is very helpful for work.", "Demonstrate great leadership-it will transform your environment into one of a gentle aura.", "thewatery"), 
    new card("The Wave", "A flexible attitude will bring good fortune.", "You have your ups and downs, but ultimately you'll be able to step forward. If you are looking for an advisor to help fix a soured interpersonal relationship, turn to the magnanimous ocean.", "Someone may make an unexpected love confession. In this situation, even if you don't like this person, don't reject him/her.", "thewave"),
    new card("The Windy", "Hints of progress, completion, and expectation.", "A time of change and activity. The possibility of getting meaningful information is big. Observe the situation around you with caution more than you usually would. A decision is important at this time and place.", "If you have the urge to call someone names or to lash out at someone verbally, hold it back. If you don't, both parties will go through a painful experience.", "thewatery"),
    new card("The Big", "Big possibility and ability. An increase of the thirst for knowledge.", "At this time, your desire to learn will be intense. There's also a good chance for you to LEVEL UP-improving every plan and possibility in the process. An unexpected accomplishment might take place involving an impossible (in your opinion) love/relationship or a dream/goal of yours.", "Significant hints and information about the future can be obtained if you go to group activities and parties.", "thebig"),
    new card("The Dream", "A chance to get to know oneself. Development period of the subconscious", "Your so-called sixth sense is good, and you can obtain important messages from your premonitions / precognitive dreams. Or, there's a suggestion to regain the importance of having a dream, to regain some room in your heart.", "Mail a letter or give a phone call to a friend which you haven't talked to in a long time. Is there a clue to self-recognition...?", "thedream"),
    new card("The Glow", "Signs of good luck.", "Lucky fortune approaches. All hesitation is lost, and what you should do naturally appears before your eyes. The most important point is to firmly prepare yourself.", "Work hard in fundamental studies. Your luck will rise if you participate in volunteer work. A plan needs a solid foundation in order to succeed.", "theglow"),
    new card("The Illusion", "The desire to escape from reality", "You have a tendency to only notice changes on the immediate surface of things and to ignore reality. Even if the environment of your life and work change, don't forget that everyone has the power to adapt.", "Now is essentially the time to relax instead of being a perfectionist. Try it-you may find it surprisingly easy.", "theillusion"),
    new card("The Little", "A small but meaningful transformation period.", "For every obstacle that makes you anxious and uneasy you will eventually find a way to calm yourself down and overcome it. You will be successful for a long time if you do your work little by little and keep that pace up. Accumulation is important.", "If you doubt your own feelings or the feelings of the other party, it will weaken your own energy and cause you to lose something important.", "thelittle"),
    new card("The Maze", "losing confidence. Confusion.", "If you can't make it to a scheduled event, and there's no time to arrange it at a different time, take a short little break. Think about the following: Are you stubborn? Do you consider the other party's feelings? Are you cowardly?", "Draw an image of the achievement that you desire. It is also important to listen to other people's advice.", "themaze"),
    new card("The Power", "A wish fulfilled. Development.", "Your inquisitive mind and daily efforts will become combined , and not only will your wish come true, but you will also obtain a high position job. Hereafter, aspects concerning work and love are enhanced more and more.", "A good state will continue as long as you don't treat anyone poorly or become arrogant. Kindness and modesty are necessary during this time.", "thepower"),
    new card("The Silent", "Forethoughtfulness. A time for recharging.", "Even if your honesty seems to be quiet, everyone recognizes it. If you serve your role properly in life, good news may come unexpectedly.", "Even if every day seems to be repetitive, do not be driven to desperation. An understanding person is always nearby.", "thesilent"),
    new card("The Song", "A wish fulfilled. Development.", "t becomes possible to express what you want to convey freely when you learn to respect the opinion of the other party. Plan something new with your friend-it would be good you to go on a trip.", "Even if you intend to find happiness on your own, it will not be easy. Everyone should share their happiness with each other.", "thesong"),
    new card("The Sweet", "New Love. Popularity. Appearance of dependent mind", "A special person that softens your heart just by being near you. Your work evaluation seems to rise quickly if you use your cheerfulness to the best of your ability. Your love life can be kept at a stable state for a while.", "It is good to value communication with a friend, but watch out because you tend to sometimes depend on it a bit too much.", "thesweet"),
    new card("The Time", "Every experience improves you. Independence.", "Our existence consists of continuously improving ourselves through our experiences- always progressing. It's important to enjoy the moment to the best of your abilities.", "An event always has a message attached. You'll get better at timing if you try to stay aware of it.", "thetime"),
    new card("The Twin", "The best partner's appearance.", "Operating as a team rather than by yourself will bring you more luck. Every member should contribute what he/she is good at in a give-and-take fashion. Abundant personal connections will become your fortune.", "'Thanks' is a beautiful word which should be cherished. There is a chance that you will come across someone who can talk sincerely.", "thetwin"),
    new card("The Voice", "I want to make friends; relationships properly resulting in feelings.", "You seem fatigued due to neighborliness. Yet, do your true feelings take on the opposite meaning during communication? First, call out to the person with 'Good morning' or 'Good afternoon'.", "Your luck will abate if you are not able to greet your friend correctly. Bright greetings are the key to good luck.", "thevoice"),
    new card("The Change", "Change of heart. Waste.", "Lack of concentration. You are envious of others and view things and goals in this negative way of thinking. This disturbing mood makes you do useless shopping.", "A change for oneself will result in refreshment. It would be good if you tried playing sports or redecorating your room.", "thechange"),
    new card("The Dash", "The instantaneous power of victory in your hand. An internal fight with yourself.", "The goal is just ahead. Spiritual strength is tried as a result of the internal fight with yourself. Keep running as fast as you can, even if it is a little painful. Afterwards, happiness awaits.", "You’ll go back to the starting point if you give up now. Precious natural luck fades away when suffering heavy losses", "thedash"),
    new card("The Erase", "Stagnation of luck. A warning to wait.", "Are there any expenses that were planned out or did you just spend recklessly on desires? Even if a plan fails, continue making steady efforts and wait for the next chance.", "The successful person approaches you in time of need. Humans are resilient and equipped with profoundness.", "theerase"),
    new card("The Fight", "An omen to the big turning point.", "You will be thanked for taking the lead without hesitating, and for going through a lot of trouble for people. Physical strength and willpower are enhanced, and a current misfortune can be fixed.", "Don’t build up on momentum, or you will make a stupid error in judgment. An elaborate preliminary investigation is necessary. Listening to the advice of an elder is plus.", "thefight"),
    new card("The Float", "Liberation from restraint. Freedom.", "If you make a steady effort, you will be freed from all pressures. When you don't make a steady effort, it is a sign of pending troubles. Be careful to pay attention to personal relationships, including romantic ones.", "When it comes to decisions concerning financial problems and work, you should follow an elder's advice* instead of making an arbitrary decision.", "thefloat"),
    new card("The Fly", "A challenge to leap, a chance.", "Development of human relations. Your fortune will be strengthened as well, and all progresses smoothly. Taking the challenge of qualification examinations for auditions is recommended too. Keep a carefree action in mind, brightly, without withering.", "Confidence and the economic fortune can be remarkably fostered by accomplishing work and favors when a friend asks for them.", "thefly"),
    new card("The Freeze", "Establishment of basic power. It's ok to go at your own pace.", "There are also seasons in life. A time of growth would be like spring, and winter would be a time of gathering strength. Right now seems to be your charging period of winter. Do not spread yourself out too thin, just settle down slowly and work on things.", "You must backpedal a bit in order to begin something new. In order to develop basic power, the first priority is to continuously investigate and train.", "thefreeze"),
    new card("The Jump", "Loss of ability. The best condition.", "Original power can be demonstrated to your heart's content. Human charm is like a power-up. You will become busy both officially and privately, but will still be able to make enough time for adequate sleep.", "Tasks at work may be demanded that are above your current ability, leading to confusion, but you can ride it out using wisdom and experience.", "thejump"),
    new card("The Move", "Be careful about fidgety actions and remarks.", "Though it's not bad, your natural fortune is a bit off, timing-wise. The cause seems to be an impromptu remark and / or a whimsical action. Don't become a person who does nothing but overexaggerate.", "Keep your promises. Communicate to the best of your ability. It's easy to become influenced by feelings, so think before you speak.", "themove"),
    new card("The Return", "The revival of a loser. Never give up!", "You will settle your regrets and the problem that you ran away from. The person who has been labeled as shy will slowly recover. Your natural fortune improves with a good decision.", "Though you cannot turn back time, you can still change the present and the future with your own power.", "thereturn"),
    new card("The Shot", "Focus on the goal.", "If you become greedy, you will fail. Ascertain why the goal is necessary. It is easy to become aggressive, but scolding yourself when you do will bring progress.", "You might hurt the other party, even though you didn't mean any harm. If you notice this occurring, humbly apologize.", "theshot"),
    new card("The Sleep", "Rest. A calm state of mind.", "You are ordinary, but stable without a lot of trouble or fights. Spend every day in an honest, sincere attitude. If you get stuck in a couple of ruts, take a carefree hike—it will bring good luck.", "Glib talk will lead to a pitfall. Be careful not to cross a dangerous bridge. (Metaphorically speaking.)", "thesleep"),
    new card("The Through", "The improvement of an unexpected situation.", "The key to success is a change in perspective. When you change your way of life and thinking completely, it is very likely that your situation will improve for the better, and good luck will come your way. It is important to say 'Yes' and 'No' clearly.", "Even if a strong rival appears, face each other without tricks, fairly. They might turn out to be an unexpected cooperator.", "thethrough"),
    new card("The Arrow", "A surge of energy. Aggressiveness.", "Energy that can charge towards the goal. Achieving your goals and desires in the shortest amount of time is done by moving and acting more positively than usual.", "It is important to set a goal. Unnecessary trouble can be created when you are too greedy, so take care.", "thearrow"),
    new card("The Bubbles", "Purification of emotions. When you break away from a vicious cycle.", "Worries and problems can be beautifully cleaned. A solution will gradually rise if you can work with an obedient feeling without showing off.", "A person who will support you appears, but it is bad to rely on only one person.", "thebubbles"),
    new card("The Earthy", "Source of life. Symbol of effort and acceptability.", "Now is the time to focus on the foundation. What is important are the basics, and to not forget to make an effort. There is no immediate effect, but the results will eventually bring about a big chance to become productive.", "Occasionally, a big heart can accept and stop everything. Nothing turns egocentric, and there is no expected growth.", "theearthy"),
    new card("The Flower", "Results. Rewards. The chance of accomplishing a goal is high.", "There's a chance that your current efforts will finally bloom and let you reach your goal. If you have self-confidence and positive feelings, all will open out towards the right direction.", "Even if a small obstacle shows up, forget about it and don't get angry. Progress can be made with a smile.", "theflower"),
    new card("The Libra", "Life, action, and adjusting the balance of ideas.", "Using calm, fair judgment, it is possible to start choosing humble decisions. In addition, the matter that caused a loss in balance will return to the best state.", "However, the best state cannot be obtained if you compare lies to the past. If you reflect, you can gradually restore your balance.", "thelibra"),
    new card("The Lock", "Intelligence. Inner awareness of the truth.", "The door of truth can be opened and shut. I notice my own heart and can know the secret of another. However, it would be better to leave if alone for now.", "A pleasant chat will lose trust, if it goes on too long. Be careful, because it is difficult to regain trust that is lost.", "thelock"),
    new card("The Loop", "Connection. Chance to step-up.", "If there are sympathizing, gentle feelings, a lot of people and things begin to connect. Linked by a deep friendship, greater aid will likely be acquirable.", "You will go round and round in circles if you can't develop any self-satisfaction. Bright, open feelings are important.", "theloop" ),
    new card("The Mirror", "A time in which you stare deeply at yourself.", "Through the behavior of others, your merit and weak point can be found. It is often that the flaw of another person, especially when upset, will cause you to reflect upon yourself.", "Through the behavior of others, your merit and weak point can be found. It is often that the flaw of another person, especially when upset, will cause you to reflect upon yourself.", "themirror"),
    new card("The Sand", "The challenge to change without fear.", "Time and a person's feelings change constantly, yet they are always in existence so there is no single point of view. Reconciliation with the friend or the lover is sure to go well too, if it is taken one step at a time.", "Do you not notice the person who thinks you are important? They are actually surprisingly closer then you realize.", "thesand"),
    new card("The Shadow", "The unknown. The reason and solution of the problem.", "In fact, the problem haunting you like a shadow is going to give you a message. Since it faces away from the front of the problem, the direction which should be followed probably will come into view.", "When you always avoid poor and unpleasant things, you'll miss the turning point in the other side of the shadow.", "theshadow"),
    new card("The Shield", "Protection. A defensive measure to maintain harmony.", "Even if a crisis is approaching, you have many people firmly defending you. You can obtain greater power in exchange for love and harmony in particular.", "Don't forget the feeling of gratitude. When friends are in trouble do not hesitate to reach out to them.", "theshield"),
    new card("The Sword", "Quest for truth. Compensation. A destructive power, sometimes.", "Symbol of truth and power. When you can make progress with something just as desired. If what you say is true, the highest reward will be obtained. If what I have sown is truth, the highest harvest will be obtained.", "However, hurting someone and every other wicked scheme can never utilize power.", "thesword"),
    new card("The Wood", "Symbolizing individual growth and development.", "Steady growth and/or development. Obtain trust in interpersonal relationships and connect with deep bonds. Talent and ability shine in future months and there is a lot of admiration to receive.", "This is surely a favorable time to lose your original intentions, don't. If you get too caught up in the moment, the things which you built with much effort will become spoiled.", "thewood"),
]


// Function that shuffles the deck
function getRandom(num){
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}


// When you click the "draw" button, it shows a random image and description of the card
document.getElementById("draw").onclick = function(){
    let index = getRandom(52);
    let currentCard = deck[index];
    addToDrawnCards(currentCard.name);
    updateDrawnCardsList(currentCard.name);
    numCardsDrawn++;


// Disables button when 9 cards are drawn.
    if (numCardsDrawn === 9) {
    document.getElementById('draw').disabled = true;
  }

    document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.webp">'

    document.getElementById("description").innerHTML = '<h3>' + currentCard.name + '</h3><h4>Meaning:</h4><p>' + currentCard.meaning + '</p><h4>Message:</h4><p>' + currentCard.message + '</p><h4>Warning:</h4><p>' + currentCard.warning + '</p>'
};


// Functions that allow the drawn cards to be listed
let drawnCards = [];
let numCardsDrawn = 0;

function isCardDrawn(currentCard) {
  return drawnCards.includes(currentCard.name);
  
}

function addToDrawnCards(card) {
  drawnCards.push(card);
}

function updateDrawnCardsList() {
  let drawnCardsList = document.getElementById('cardList');
  drawnCardsList.innerHTML = ''; // clear the list

  for (let i = 0; i < drawnCards.length; i++) {
    let card = drawnCards[i];
    let listItem = document.createElement('li');
    listItem.textContent = card;
    drawnCardsList.appendChild(listItem);
  }
}

function reset() {
  // Reset the game state to its initial values
  numCardsDrawn = 0;
  drawnCards = [];
  

  // Enable the draw button
  document.getElementById('draw').disabled = false;

   document.getElementById("display").innerHTML = ""
document.getElementById("description").innerHTML = ""
  // Update the used cards list
  updateDrawnCardsList();
}


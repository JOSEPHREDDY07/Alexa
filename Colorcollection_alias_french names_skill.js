
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

const languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Benjamin moore and companies Color Guide!",
            'HELP'    : "I will help you to learn more about Benjamin moore Paint offerings. To Know about Collections, say list of Collections, to hear about collection suggestions, say suggest for interior, exterior, door, ceiling, bath and spa, or primers.",
            'ABOUT'   : "Benjamin Moore and Company is a leading producer of quality premium residential, commercial and industrial maintenance coatings in North America. ",
            'STOP'    : "Okay, see you at the store! Dont forget to visit benjaminmoore.com for more information. Good Bye"
        }
    }
};
const data = {
    "city"        : "Montvale",
    "state"       : "NJ",
    "postcode"    : "07645",
    "Collections" : [
        { "name":"Affinity",
         "description": "Introduced in 2006, a collection of 144 specially formulated colors designed to work together harmoniously",
         "prefix":"A F-5 to A F-720.",
         "number": "144",
         "merchandiseavailability":"U S,CANADA stores",
         "interior": "yes",  
         "exterior": "yes" ,
         "availability": "interior,exterior",
         "collectionAvailability": "Available in all products"
            
        },
         { "name":"America’s Color",
         "description": "A snapshot in color of geographically inspired America’s most popular, well-traveled regions .As of 2016, we are phasing out AC collection as all 42 colors already exist in the full Benjamin Moore Classics Collection",
         "prefix":"A C-1 to A C- 42.",
         "number": "42",
         "merchandiseavailability":"U S stores",
         "interior": "yes",  
         "exterior": "yes" ,
         "availability": "interior,exterior",
         "collectionAvailability": "Available in all products"
            
        },
          
       { "name":"Aura Color Stories",
         "description": "The collection is comprised of 240 colors that have an accentuated response to different lighting. As a result of precise color formulations, each color exhibits subtle undertones",
         "prefix":"C S P -5 to C S P-1200.",
         "number": "240",
         "merchandiseavailability":"U S and CANADA stores",
         "interior": "yes", 
         "exterior": "no" ,
         "availability": "interior",
         "collectionAvailability": "Available in Aura Interior Aura Bath & Spa"
              
       },
       
 { "name":"Benjamin Moore Classics",
         "description": "Large, expansive system of 1680 colors is a Benjamin Moore signature, containing many time-tested colors for the home",
         "prefix":"001 to 1680.",
         "number": "1680",
         "merchandiseavailability":"U S stores",
         "interior": "yes", 
         "exterior": " 25 colors are available in exterior products" ,
         "availability": "interior and exterior",
         "collectionAvailability": "Available in all products"
              
       },

 { "name":"color preview",
         "description": "Colors are mathematically arranged by hue and value in consistent increments for easy navigation and coordination.Use of advanced colorants results in bright, saturated, clean colors that are often used for commercial applications",
         "prefix":"2000-10 to 2175-70.",
         "number": "1232",
         "merchandiseavailability":"U S and CANADA stores",
         "interior": "yes", 
         "exterior": " 66 colors are available in exterior products" ,
         "availability": "interior and exterior",
         "collectionAvailability": "Available in all products"
              
       },

 { "name":"Designer Classics",
         "description": " 231 tried-and-true colors - timeless beauty you can integrate into a variety of design styles and decors",
         "prefix":"CC-2 to CC-990.",
         "number": "231",
         "merchandiseavailability":"CANADA stores",
         "interior": "yes", 
         "exterior": " yes" ,
         "availability": "interior and exterior",
         "collectionAvailability": "Available in all products"
              
       },

 { "name":"Historical Color",
         "description": "Unveiled in 1976 to celebrate the bicentennial, a collection of 191 colors inspired by America’s historic landmarks .In 2016, 17 of PM colors have been added to this collection",
         "prefix":"HC-1 to HC-191.",
         "number": "191",
         "merchandiseavailability":"U S and CANADA stores",
         "interior": "yes", 
         "exterior": " yes" ,
         "availability": "interior and exterior",
         "collectionAvailability": "Available in all products"
              
       },

 { "name":"Metallic Glaze",
         "description": " Designed to produce beautiful metallic special effects.Meant to be used as a decorative technique over a painted surface and not as a stand alone opaque finish",
         "prefix":"PT-100 to PT-390.",
         "number": "35 AND 5 Ready mix colors",
         "merchandiseavailability":"U S  stores",
         "interior": "yes", 
         "exterior": " no" ,
         "availability": "interior",
         "collectionAvailability": "Studio Finishes and metallic glaze 620"
              
       },
 { "name":"Molten Metallics",
         "description": "Creates a beautiful hammered-metal effect",
         "prefix":"Names",
         "number": "6",
         "merchandiseavailability":"U S  stores",
         "interior": "yes", 
         "exterior": " no" ,
         "availability": "interior",
         "collectionAvailability": "Studio Finishes and Molten Metallics 621"
              
       },

 { "name":"Off Whites",
         "description": "A compilation of 152 white and off-white colors and Functions as a one-stop shop for the many customers who are looking specifically for whites",
         "prefix":"OC-1 to OC-152",
         "number": "152",
         "merchandiseavailability":"U S  and Canada stores",
         "interior": "yes", 
         "exterior": "yes" ,
         "availability": "interior and exterior ",
         "collectionAvailability": "Available in all products"
              
       },
 { "name":"Premium Mix",
         "description": "Previously known as Pre-Mix or Ready Mix colors and As of 2017, 12 of the lightest PM colors have been added to the Off White Collection and 17 of the darker colors have been added to the Historical Color Collection",
         "prefix":"PM-1 to PM-32",
         "number": "32",
         "merchandiseavailability":"U S stores",
         "interior": "yes", 
         "exterior": "yes" ,
         "availability": "interior and exterior ",
         "collectionAvailability": "The 4 base PM colors are only available in select products"
              
       },

 { "name":"Toronto Heritage",
         "description": "this is Discontinued Color Collection",
         "prefix":"TH-10 to TH-320",
         "number": "32",
         "merchandiseavailability":"canada stores",
         "interior": "yes", 
         "exterior": "yes" ,
         "availability": "interior and exterior ",
         "collectionAvailability": "Available in all products"
              
       },
 { "name":"Williams burg",
         "description": "Launched in 2013, a collection of 144 colors derived from the historic homes and artifacts of one of America’s oldest settlements, Colonial Williamsburg",
         "prefix":"CW-5 to CW-720",
         "number": "144",
         "merchandiseavailability":"US stores",
         "interior": "yes", 
         "exterior": "yes" ,
         "availability": "interior and exterior ",
         "collectionAvailability": "Available in Aura  Interior Aura  Exterior Aura  Grand Entrance Regal  Select Interior Regal Select Exterior High Build
           Natura  Waterborne Ceiling Paint  ADVANCE and ARBORCOAT "
              
       },


    ],
    
"Crossover" : [
        { 
         "ColorCollection" : 	"Classic",
         "Colorno":	"001",
         "Alias":	" ",
         "USEnglish":	"Pink Powderpuff",
         "Spanish":	"Borla Rosada",
         "CAEnglish":	"Pink Powderpuff",
         "French":	"Houpette Rose",
         "ExteriorAvailibility ":	"Unavailable"

        },
        
          { 
         "ColorCollection" : 	"Classic",
         "Colorno":	"002",
         "Alias":	" ",
         "USEnglish":	"Newborn Baby",
         "Spanish":	"Recien Nacido",
         "CAEnglish":	"Newborn Baby",
         "French":	"Poupon",
         "ExteriorAvailibility ":	"Unavailable"

        },
        
          { 
         "ColorCollection" : 	"Classic",
         "Colorno":	"242",
         "Alias":	"H C-90",
         "USEnglish":	"Laurel Canyon Beige",
         "Spanish":	"Beige de Cañón Laurel",
         "CAEnglish":	"Laurel Canyon Beige",
         "French":	"Marmotte",
         "ExteriorAvailibility ":	"Unavailable"

        },
        
            { 
         "ColorCollection" : 	"Classic",
         "Colorno":	"243",
         "Alias":	"C C- 270",
         "USEnglish":	"Baffin Island",
         "Spanish":	"Isla de Baffin",
         "CAEnglish":	"Baffin Island",
         "French":	"Haillon de Coton",
         "ExteriorAvailibility ":	"Unavailable"

        },
        
        ]
}

var GET_FACT_MESSAGE = " Welcome to Benjamin Moore Facts !. Here's your Benjamin Moore fact: ";
var GET_ONEMORE_FACT_MESSAGE = ". Say one more .for another fact ";

var facts = [
"When it comes to premium paints and stains for your home, Benjamin Moore has set the standard for excellence. By manufacturing our own resins; and proprietary Gennex colorants; Benjamin Moore delivers superior performance; and application properties in every collection. Paired with our incomparable selection of authentic colors, our Collections are formulated to help achieve beautiful, lasting results, every time you paint!",
"Benjamin Moore and Company is at producer of quality premium residential, commercial and industrial maintenance coatings in North America.  It was founded in 1883 and is a member of the Berkshire Hathaway family of companies."
];

const SKILL_NAME = "BMC SKILL 1";


// 2. Skill Code =======================================================================================================

const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        var say = this.t('WELCOME') + ' ' + this.t('ABOUT')  +  ' ' + this.t('HELP');
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    
    'AboutIntent': function () {
        this.response.speak(this.t('ABOUT'));
        this.emit(':responseReady');
    },

   'CollectionsIntent': function () {
    var list ='Benjamin Moore has various color collections for Interior, exterior, primer, and speciality coatings. A Few of the color collections are: ';
    var catalog = 'Affinity, America’s Color, Aura Color Stories,';
    var say = list + catalog + ' To know more about any of these Collections, say the collection name, or tell me about Aura Color Stories. ';
    this.response.speak(say).listen(say);
    this.emit(':responseReady');
    },
    
     'CrossoverIntent': function () {
       var Exterior = ' aura exterior ., and regal select exterior. ';
       var usname;
        if (this.event.request.intent.slots.USNAME.value) {
            usname = this.event.request.intent.slots.USNAME.value; }
    
       var Crossover = randomArrayElement(getCrossoverByName(usname));
       this.attributes['Crossover'] = Crossover.name;
       
      var CrossoverName = this.attributes['Crossover'];
       var CrossoverDetails = getcrossoverDetByName(CrossoverName); 
       
        var alert = ' To continue , please say cross over for any U S English name . Or. else Say STOP.';
        var cnf = 'OK ,You want to know cross over for ' + usname + ' .Here we go !  ';
        var say = 'Spanish Name is , ' + CrossoverDetails.Spanish + 'and' + 'Canadian French Name is, ' + CrossoverDetails.French +  '. Would you like to hear more?';
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'collectionListIntent': function () {
         
         if (this.event.request.intent.slots.PLIST.value) {
            prodname = this.event.request.intent.slots.PLIST.value;
        }
       var collection = randomArrayElement(getcollectionListByName(prodname));
       this.attributes['collection'] = collection.name;
        var collectionName = this.attributes['collection'];
        var collectionDetails = getcollectionByName(collectionName);
        var alert = ' To continue , please say any collection name . Or ask for suggestions. else Say STOP.';
        var cnf = 'OK ,You want to know about ' + prodname + ' .Here we go !  ';
        var say = cnf + collectionDetails.name + ' ' + collectionDetails.brand + ' '
            +  collectionDetails.feature + ' ' + collectionDetails.sheen
            + ', and  , ' + collectionDetails.description
            + ' Please visit an authorized Benjamin Moore retailer near you, for your next paint project!' 
            + ' OK ! <say-as interpret-as="interjection"> To continue , please say any collection name . Or ask for suggestions. else Say STOP </say-as>';
        
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },
    
  
    
    'AMAZON.YesIntent': function () {
        var collectionName = this.attributes['collection'];
        var collectionDetails = getcollectionByName(collectionName);
        var alert = '! To continue , please say any collection name . Or ask for suggestions. else Say STOP.';
        var say = collectionDetails.name + ' ' + collectionDetails.brand + ' '
            +  collectionDetails.feature + ' ' + collectionDetails.sheen + ' ' 
            + collectionDetails.description
            + '  I have sent these details to the Alexa App on your phone. Please visit an authorized Benjamin Moore retailer near you, for your next paint project!'
            + ' OK ! <say-as interpret-as="interjection"> To continue , please say any collection name . Or ask for suggestions. else Say STOP </say-as>';

        var card = 'Benjamin Moore' + collectionDetails.name + '\n' + 
                    collectionDetails.brand + '\n' + collectionDetails.sheen + '\n'
        +  collectionDetails.type + '\n' + data.city + ', ' + data.state + ' ' + data.postcode;

        this.response.cardRenderer(SKILL_NAME, card);
        this.response.speak(say).listen(say);
        this.emit(':responseReady');

    },

    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(this.t('HELP')).listen(this.t('HELP'));
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(this.t('STOP'));
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.response.speak(this.t('STOP'));
        this.emit(':responseReady');
    }

};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getCollectionByType(mealtype) {

    var list = [];
    for (var i = 0; i < data.Collections.length; i++) {

        if(data.Collections[i].type.search(mealtype) >  -1) {
            list.push(data.Collections[i]);
        }
    }
    return list;
}

function getCrossoverByName(CrossoverName) {

    var Crossover = {};
    for (var i = 0; i < data.Crossover.length; i++) {

        if(data.Crossover[i].name == CrossoverName) {
            Crossover = data.Crossover[i];
        }
    }
    return Crossover;
}

function getcollectionByName(collectionName) {

    var collection1 = {};
    for (var i = 0; i < data.Collections.length; i++) {

        if(data.Collections[i].name == collectionName) {
            collection1 = data.Collections[i];
        }
    }
    return collection1;
}

function getcollectionListByName(collectionN) {

  var list = [];
    for (var i = 0; i < data.Collections.length; i++) {

        if(data.Collections[i].name.search(collectionN) >  -1) {
            list.push(data.Collections[i]);
        }
    }
    return list;
}

function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}

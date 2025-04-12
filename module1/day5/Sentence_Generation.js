let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
  
    buildSentence: function() {
      return this.subject && this.verb && this.object
        ? this.subject + " " + this.verb + " " + this.object
        : "Incomplete sentence";
    },
  
    updateProperty: function(property, value) {
      if (this[property] !== undefined && typeof this[property] === "string") {
        this[property] = value;
      } else {
        return "Invalid property";
      }
    }
  };
  
   
  
  //Example 1:
  
  console.log(sentenceBuilder.buildSentence());
  
  //Expected Output:
  
  "I am coding"
  
  //Example 2:
  
  sentenceBuilder.updateProperty("verb", "am learning"); 
  console.log(sentenceBuilder.buildSentence());
  
  //Expected Output:
  
  "I am learning coding"
  
  //Example 3:
  
  sentenceBuilder.updateProperty("subject", "The cat");
  
  console.log(sentenceBuilder.buildSentence());
  
  //Expected Output:
  
  "The cat is learning coding"
  
  //Example 4:
  
  sentenceBuilder.updateProperty("mood", "happy");
  console.log(sentenceBuilder.updateProperty());
  
  //Expected Output:
  
  "Invalid property"
  
  //Example 5:
  
  sentenceBuilder.updateProperty("verb", ""); 
  console.log(sentenceBuilder.buildSentence());
  
  //Expected Output:
  
  "Incomplete sentence"
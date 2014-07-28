window.onload = function()
{
    var b=document.getElementById("go");
    b.onclick=myFunction;
    function myFunction()
    {
        var firstString = document.getElementById("firstString").value;
        var secondString = document.getElementById("secondString").value;
        var thirdString = document.getElementById("thirdString").value;

        var number=document.getElementById("number").value;
        var startIndex = document.getElementById("start").value;
        var endIndex = document.getElementById("end").value;

        function StringUtility (firstString,secondString)
        {
            this.string1 = firstString;
            this.string2 = secondString;
        }
        function StringUtilityForCharAt(firstString,number)
        {
            this.string1 = firstString;
            this.number= parseInt(number);
        }
        function StringUtilityForReplace(firstString,secondString,thirdString)
        {
            this.string1 = firstString;
            this.string2 = secondString;
            this.string3 = thirdString;
        }
        function StringUtilityForSubstring(firstString,startIndex,endIndex)
        {
            this.string1 = firstString;
            this.startIndex = startIndex;
            this.endIndex = endIndex;
        }
        StringUtilityForSubstring.prototype.substring = function()
        {
            var temp="";
            for (var i = this.startIndex; i < this.endIndex; i++)
            {
                  temp=temp+this.string1[i];
            }
            return temp;
        }
        StringUtilityForCharAt.prototype.CharAt = function()
        {
            if(number>this.string1.length)
                return "The Number is greater than the length of the String";
            return this.string1[number];
        }
        StringUtilityForReplace.prototype.replaceString = function()
        {
            var index=this.string1.indexOf(this.string2);
            var temp="";
            if(index==-1)
            {
                return "String " + this.string2 + " Does Not Exist... in" + this.string1;
            }
            else
            {
                for (var i = 0; i < index; i++)
                {
                    temp= temp + this.string1[i];
                }
                temp=temp+this.string3;
                index+=this.string2.length;
                for (var i = index; i < this.string1.length; i++)
                {
                    temp=temp + this.string1[i];   
                }
            }
            this.string1=temp;
            return this.string1;
        }
        StringUtility.prototype.concat=function()
        {
            //alert("asdasdasd");
            this.string1=this.string1+this.string2;
            return this.string1;
            //document.getElementById("first").innerHTML = "Concatenated String is: " + this.string1;
        }
        StringUtility.prototype.stringLength=function()
        {
            var temp="";
            temp=temp + "Length Of First String:"+this.string1.length+"<br>";
            temp=temp + "Length Of Second String:"+this.string2.length+"\n";
            return temp;
            //document.getElementById("first").innerHTML = "Concatenated String is: " + this.string1;
        }
        StringUtility.prototype.IndexOf=function()
        {
            var temp="The Occurences are:";
            
            for(var i = 0; i< this.string1.length; i++)
            {
                if(this.string1[i]==this.string2[0])
                {
                    temp=temp+i+",";
                }
            }
            return temp;
        }
        StringUtility.prototype.LastIndexOf=function()
        {
            var temp="The Occurences are:";
            for(var i = this.string1.length;i>=0 ;i--)
            {
                if(this.string1[i]==this.string2[0])
                {
                    temp=temp+i+",";
                }
            }
            temp[temp.length-1]='.';
            return temp;
        }
        var radioButtons = document.forms[0].StringOperations;
        var txt = "";
        var i;
        for (i = 0; i < radioButtons.length; i++)
        {
            if (radioButtons[i].checked)
            {
                break;
            }
        }
        switch (i)
        {
            case 0:
                var result=new StringUtility(firstString,secondString);
                var display=result.concat();
                document.getElementById("first").innerHTML = "Concatenated String is: " + display;
                break;
            case 1:
                if(endIndex=="")
                    endIndex=firstString.length;
                var result=new StringUtilityForSubstring(firstString,startIndex,endIndex);
                if(startIndex>endIndex)
                    document.getElementById("first").innerHTML = "Invalid start Index and End Index";
                else if(startIndex<0 || startIndex > firstString.length)
                    document.getElementById("first").innerHTML = "The Start Index Is Invalid";
                else if (endIndex>firstString.length || endIndex<0)
                    document.getElementById("first").innerHTML = "The End Index Is Invalid";
                else
                    document.getElementById("first").innerHTML = "The Substring is: " + result.substring();
                break;
            case 2:
                var result=new  StringUtility(firstString,secondString);
                document.getElementById("first").innerHTML = result.stringLength();
                break;
            case 3:
                var result=new  StringUtilityForCharAt(firstString,number);
                document.getElementById("first").innerHTML = "The Char At index "+ number + " is: "+ result.CharAt();
                break;
            case 4:
                var result=new  StringUtility(firstString,secondString);
                document.getElementById("first").innerHTML = result.LastIndexOf();
                break;
            case 5:
                var result=new  StringUtility(firstString,secondString);
                document.getElementById("first").innerHTML = result.IndexOf();
                break;        
            case 6:
                var result=new  StringUtilityForReplace(firstString,secondString,thirdString);
                document.getElementById("first").innerHTML = result.replaceString();
                break;
        }
    }
}

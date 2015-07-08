$(function() {

    $(".option").click(function() {
        var value = $(this).data('value');
        if (value == true) {
            console.log($(this).data('citation'));
            $("#result").empty();
            $("#result").removeClass("alert-danger").addClass("alert-warning");
            $("#result").append("<h4>CORRECT</h4>");
            $("#result").append("<p>Yes, this is <a href='http://www.naa.gov.au/cgi-bin/Search?O=I&Number=" + $(this).data('id') + "''>NAA: " + $(this).data('citation') + "</a>, a real file held by the National Archives of Australia. However, it&rsquo;s currently closed to public access under section 33(1)(a) of the <a href='http://www.austlii.edu.au/au/legis/cth/consol_act/aa198398/s33.html'>Archives Act</a> because it has been judged to contain: &lsquo;information or matter the disclosure of which under this Act could reasonably be expected to cause damage to the security, defence or international relations of the Commonwealth&rsquo;.</p><p>You're not allowed to view this file even though it&rsquo;s at least " + (2015 - parseInt($(this).data('year'), 10)) + " years old. What does this tell you about the nature of secrecy?</p>");

        } else {
            $("#result").empty();
            $("#result").removeClass("alert-warning").addClass("alert-danger");
            $("#result").append("<h4>INCORRECT</h4>");
            $("#result").append("<p>No, this title was created using a <a href='https://github.com/jsvine/markovify'>Markov chain generator</a> trained on a list of files from the National Archives of Australia, closed to public access under section 33(1)(a) of the <a href='http://www.austlii.edu.au/au/legis/cth/consol_act/aa198398/s33.html'>Archives Act</a> because they have been judged to contain: &lsquo;information or matter the disclosure of which under this Act could reasonably be expected to cause damage to the security, defence or international relations of the Commonwealth&rsquo;.</p><p>The file title seemed plausible even though it was generated from a bundle of words. What does that tell you about the language of national security?</p>");
        }
    });

});
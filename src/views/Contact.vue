<template>
    <div>
        <Header/>
        <div class="contact-page bg-white-85"></div>
        <div class="main-content text-center">
            <div class="container">
                <h1 class="py-3">Zapraszamy do kontaktu</h1>
                <div class="row pt-2">
                    <div class="col-md-6 px-3">
                        <h2 class="pb-4">FORMULARZ KONTAKTOWY</h2>
                        <div id="frmContact" class="row">
                            <div id="mail-status" class="col-12"></div>
                            <div class="col-8">
                                <div>
                                    <label class="formLabel">Imię i nazwisko</label><span id="userName-info" class="info"></span><br/>
                                    <input type="text" name="userName" id="userName" class="demoInputBox">
                                </div>
                                <div>
                                    <label class="formLabel">Email</label><span id="userEmail-info" class="info"></span><br/>
                                    <input type="text" name="userEmail" id="userEmail" class="demoInputBox">
                                </div>
                                <div>
                                    <label class="formLabel">Temat</label><span id="subject-info" class="info"></span><br/>
                                    <input type="text" name="subject" id="subject" class="demoInputBox">
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <label class="formLabel">Metraż</label><span id="1extra-content-info" class="info"></span><br/>
                                    <input type="text" name="1extra-content" id="1extra-content" class="demoInputBox">
                                </div>
                                <div>
                                    <label class="formLabel">Ilość łazienek</label><span id="2extra-content-info" class="info"></span><br/>
                                    <input type="text" name="2extra-content" id="2extra-content" class="demoInputBox">
                                </div>
                            </div>
                            <div class="col-12">
                                <label class="formLabel">Treść maila</label><span id="content-info" class="info"></span><br/>
                                <textarea name="content" id="content" class="demoInputBox" cols="60" rows="4"></textarea>
                            </div>
                            <div class="col-12">
                                <button name="submit" class="btnAction btn btn-primary" v-on:click="sendContact">WYŚLIJ</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-left firstRow-phoneView">
                        <h3 class="text-primary font-weight-bold d-inline">Mail: </h3>
                        <h3 class="d-inline"> 
                            <a class="text-dark font-weight-normal" href="mailto:biuro@wykonczenie-wnetrz.gda.pl">biuro@wykonczenie-wnetrz.gda.pl</a>
                        </h3>
                        <br>
                        <h3 class="text-primary pt-5 font-weight-bold d-inline">Telefon: </h3><h3 class="text-dark d-inline">784-567-628</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'contact',
    components: {
        Header,
        Footer
    },
    methods: {
        sendContact: function(){
            var valid;	
            valid = this.validateContact();
            var content = 'Metraż: ' + $("#1extra-content").val() + 'm2' + '\r\n';
            content += 'Ilość łazienek: ' + $("#2extra-content").val() + '\r\n\r\n';
            content += 'Treść: ' + $('#content').val();
            console.log(content)
            if(valid) {
                jQuery.ajax({
                    url: "contact_mail.php",
                    data:'userName='+$("#userName").val()+'&userEmail='+
                    $("#userEmail").val()+'&subject='+
                    $("#subject").val()+'&content='+
                    content,
                    type: "POST",
                    success:function(data){
                        $("#mail-status").html(data);
                    },
                    error:function (){}
                })  
}
},
        validateContact: function() {
            var valid = true;	
            $(".demoInputBox").css('background-color','');
            $(".info").html('');

            var fields = ["#userName", "#userEmail", "#subject", "#content", "#1extra-content", "#2extra-content"];
            $(fields).each((i, field)=>{
              if(!$(`${field}`).val()) {
                $(`${field}-info`).html(" (wymagane)");
                $(`${field}`).css('background-color','rgb(255, 223, 223)');
                valid = false;
            };

            })
            if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
                $("#userEmail-info").html("(invalid)");
                $("#userEmail").css('background-color','rgb(255, 223, 223)');
                valid = false;
            }
            return valid;
        }
    }
}
</script>
<style>
</style>
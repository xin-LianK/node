// $(function () {
//     var mdata = {};
//     var url = '/javascripts/movie.json';
//     $.getJSON(url, function (data) {
//         mdata = data;
//         render_editor_form(mdata);
//         render_event_form(mdata);
//     });
//     var render_editor_form = function (data) {
//         $('#c_editor').val($.toJSON(data));
//     };
//     var render_event_form = function () {
//         $('#c_save').off().on('click', function (event) {
//             var data = {};
//             data['content'] = mdata;
//             $.ajax({
//                 type: "POST",
//                 url: '/movie/add',
//                 data: data,
//                 async: true,
//                 success: function (data, textStatus) {
//                     if (data.success) {
//                         $('#msg').html('成功保存!');
//                         $('#msg').addClass('alert alert-success text-center');
//                         // $(location).attr('href', '/movie/' + mdata.name);
//                     } else {
//                         console.log(data)
//                         $('#msg').html(data);
//                         $('#msg').addClass('alert alert-danger text-center');
//                     }
//                 }
//             });
//         });
//     };
// });
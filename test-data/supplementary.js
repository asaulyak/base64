(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'nbyte';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: '8KCcjvCgnLHwoJ258KCxk/CgsbjwoLKW8KCzj/Cgs5XwoLSV8KC1vPCgtb/woLiO8KC4j/CgubfwoLqd8KC6ovCgu5fwoLu58KC7uvCgvK3woLyu8KC9jPCgvrTwoL688KC/qvChgZzwoYGv8KGBtfChgbbwoYG78KGDgfChg4nwoYeZ8KKDh/CinrXwoquV8KKtg/Cir4rworGR8KKxlfCis4LworSI8KK1jPCitafworqz8KOyt/Ckk5PwpLa48KS3qvClhKvwpomY8KafjPCmp7Lwpqe68KeovvCohZ3wqIiH8KiLovCos4rwqLON8KizkvCptpg=',
    base64ni: '8KCcjvCgnLHwoJ258KCxk_CgsbjwoLKW8KCzj_Cgs5XwoLSV8KC1vPCgtb_woLiO8KC4j_CgubfwoLqd8KC6ovCgu5fwoLu58KC7uvCgvK3woLyu8KC9jPCgvrTwoL688KC_qvChgZzwoYGv8KGBtfChgbbwoYG78KGDgfChg4nwoYeZ8KKDh_CinrXwoquV8KKtg_Cir4rworGR8KKxlfCis4LworSI8KK1jPCitafworqz8KOyt_Ckk5PwpLa48KS3qvClhKvwpomY8KafjPCmp7Lwpqe68KeovvCohZ3wqIiH8KiLovCos4rwqLON8KizkvCptpg',
    base64url: '8KCcjvCgnLHwoJ258KCxk_CgsbjwoLKW8KCzj_Cgs5XwoLSV8KC1vPCgtb_woLiO8KC4j_CgubfwoLqd8KC6ovCgu5fwoLu58KC7uvCgvK3woLyu8KC9jPCgvrTwoL688KC_qvChgZzwoYGv8KGBtfChgbbwoYG78KGDgfChg4nwoYeZ8KKDh_CinrXwoquV8KKtg_Cir4rworGR8KKxlfCis4LworSI8KK1jPCitafworqz8KOyt_Ckk5PwpLa48KS3qvClhKvwpomY8KafjPCmp7Lwpqe68KeovvCohZ3wqIiH8KiLovCos4rwqLON8KizkvCptpg=',
    bytes: [240, 160, 156, 142, 240, 160, 156, 177, 240, 160, 157, 185, 240, 160, 177, 147, 240, 160, 177, 184, 240, 160, 178, 150, 240, 160, 179, 143, 240, 160, 179, 149, 240, 160, 180, 149, 240, 160, 181, 188, 240, 160, 181, 191, 240, 160, 184, 142, 240, 160, 184, 143, 240, 160, 185, 183, 240, 160, 186, 157, 240, 160, 186, 162, 240, 160, 187, 151, 240, 160, 187, 185, 240, 160, 187, 186, 240, 160, 188, 173, 240, 160, 188, 174, 240, 160, 189, 140, 240, 160, 190, 180, 240, 160, 190, 188, 240, 160, 191, 170, 240, 161, 129, 156, 240, 161, 129, 175, 240, 161, 129, 181, 240, 161, 129, 182, 240, 161, 129, 187, 240, 161, 131, 129, 240, 161, 131, 137, 240, 161, 135, 153, 240, 162, 131, 135, 240, 162, 158, 181, 240, 162, 171, 149, 240, 162, 173, 131, 240, 162, 175, 138, 240, 162, 177, 145, 240, 162, 177, 149, 240, 162, 179, 130, 240, 162, 180, 136, 240, 162, 181, 140, 240, 162, 181, 167, 240, 162, 186, 179, 240, 163, 178, 183, 240, 164, 147, 147, 240, 164, 182, 184, 240, 164, 183, 170, 240, 165, 132, 171, 240, 166, 137, 152, 240, 166, 159, 140, 240, 166, 167, 178, 240, 166, 167, 186, 240, 167, 168, 190, 240, 168, 133, 157, 240, 168, 136, 135, 240, 168, 139, 162, 240, 168, 179, 138, 240, 168, 179, 141, 240, 168, 179, 146, 240, 169, 182, 152],
    string: '𠜎𠜱𠝹𠱓𠱸𠲖𠳏𠳕𠴕𠵼𠵿𠸎𠸏𠹷𠺝𠺢𠻗𠻹𠻺𠼭𠼮𠽌𠾴𠾼𠿪𡁜𡁯𡁵𡁶𡁻𡃁𡃉𡇙𢃇𢞵𢫕𢭃𢯊𢱑𢱕𢳂𢴈𢵌𢵧𢺳𣲷𤓓𤶸𤷪𥄫𦉘𦟌𦧲𦧺𧨾𨅝𨈇𨋢𨳊𨳍𨳒𩶘'
    /* jscs:enable maximumLineLength */
  };
}

// -----------------------------------------------------------------------------
var n = dependencies.length;
var o = 'object';
var r = /([^-_\s])[-_\s]+([^-_\s])/g;
function s(m, a, b) { return a + b.toUpperCase(); }
context = typeof global === o ? global : typeof window === o ? window : context;
if (typeof define === 'function' && define.amd) {
  define(dependencies, function () {
    return factory.apply(context, [].slice.call(arguments));
  });
} else if (typeof module === o && module.exports) {
  for (; n--;) { dependencies[n] = require(dependencies[n]); }
  module.exports = factory.apply(context, dependencies);
} else {
  for (; n--;) { dependencies[n] = context[dependencies[n]]; }
  context[id.replace(r, s)] = factory.apply(context, dependencies);
}
}(this));

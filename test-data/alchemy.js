(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = 'alchemy';
var dependencies = [];

function factory() {
  return {
    /* jscs:disable maximumLineLength */
    base64: '8J+cgPCfnIHwn5yC8J+cg/CfnITwn5yF8J+chvCfnIfwn5yI8J+cifCfnIrwn5yL8J+cjPCfnI3wn5yO8J+cj/CfnJDwn5yR8J+ckvCfnJPwn5yU8J+clfCfnJbwn5yX8J+cmPCfnJnwn5ya8J+cm/CfnJzwn5yd8J+cnvCfnJ/wn5yg8J+cofCfnKLwn5yj8J+cpPCfnKXwn5ym8J+cp/CfnKjwn5yp8J+cqvCfnKvwn5ys8J+crfCfnK7wn5yv8J+csPCfnLHwn5yy8J+cs/CfnLTwn5y18J+ctvCfnLfwn5y48J+cufCfnLrwn5y78J+cvPCfnL3wn5y+8J+cv/CfnYDwn52B8J+dgvCfnYPwn52E8J+dhfCfnYbwn52H8J+diPCfnYnwn52K8J+di/CfnYzwn52N8J+djvCfnY/wn52Q8J+dkfCfnZLwn52T8J+dlPCfnZXwn52W8J+dl/CfnZjwn52Z8J+dmvCfnZvwn52c8J+dnfCfnZ7wn52f8J+doPCfnaHwn52i8J+do/CfnaTwn52l8J+dpvCfnafwn52o8J+dqfCfnarwn52r8J+drPCfna3wn52u8J+dr/CfnbDwn52x8J+dsvCfnbM=',
    base64ni: '8J-cgPCfnIHwn5yC8J-cg_CfnITwn5yF8J-chvCfnIfwn5yI8J-cifCfnIrwn5yL8J-cjPCfnI3wn5yO8J-cj_CfnJDwn5yR8J-ckvCfnJPwn5yU8J-clfCfnJbwn5yX8J-cmPCfnJnwn5ya8J-cm_CfnJzwn5yd8J-cnvCfnJ_wn5yg8J-cofCfnKLwn5yj8J-cpPCfnKXwn5ym8J-cp_CfnKjwn5yp8J-cqvCfnKvwn5ys8J-crfCfnK7wn5yv8J-csPCfnLHwn5yy8J-cs_CfnLTwn5y18J-ctvCfnLfwn5y48J-cufCfnLrwn5y78J-cvPCfnL3wn5y-8J-cv_CfnYDwn52B8J-dgvCfnYPwn52E8J-dhfCfnYbwn52H8J-diPCfnYnwn52K8J-di_CfnYzwn52N8J-djvCfnY_wn52Q8J-dkfCfnZLwn52T8J-dlPCfnZXwn52W8J-dl_CfnZjwn52Z8J-dmvCfnZvwn52c8J-dnfCfnZ7wn52f8J-doPCfnaHwn52i8J-do_CfnaTwn52l8J-dpvCfnafwn52o8J-dqfCfnarwn52r8J-drPCfna3wn52u8J-dr_CfnbDwn52x8J-dsvCfnbM',
    base64url: '8J-cgPCfnIHwn5yC8J-cg_CfnITwn5yF8J-chvCfnIfwn5yI8J-cifCfnIrwn5yL8J-cjPCfnI3wn5yO8J-cj_CfnJDwn5yR8J-ckvCfnJPwn5yU8J-clfCfnJbwn5yX8J-cmPCfnJnwn5ya8J-cm_CfnJzwn5yd8J-cnvCfnJ_wn5yg8J-cofCfnKLwn5yj8J-cpPCfnKXwn5ym8J-cp_CfnKjwn5yp8J-cqvCfnKvwn5ys8J-crfCfnK7wn5yv8J-csPCfnLHwn5yy8J-cs_CfnLTwn5y18J-ctvCfnLfwn5y48J-cufCfnLrwn5y78J-cvPCfnL3wn5y-8J-cv_CfnYDwn52B8J-dgvCfnYPwn52E8J-dhfCfnYbwn52H8J-diPCfnYnwn52K8J-di_CfnYzwn52N8J-djvCfnY_wn52Q8J-dkfCfnZLwn52T8J-dlPCfnZXwn52W8J-dl_CfnZjwn52Z8J-dmvCfnZvwn52c8J-dnfCfnZ7wn52f8J-doPCfnaHwn52i8J-do_CfnaTwn52l8J-dpvCfnafwn52o8J-dqfCfnarwn52r8J-drPCfna3wn52u8J-dr_CfnbDwn52x8J-dsvCfnbM=',
    bytes: [240, 159, 156, 128, 240, 159, 156, 129, 240, 159, 156, 130, 240, 159, 156, 131, 240, 159, 156, 132, 240, 159, 156, 133, 240, 159, 156, 134, 240, 159, 156, 135, 240, 159, 156, 136, 240, 159, 156, 137, 240, 159, 156, 138, 240, 159, 156, 139, 240, 159, 156, 140, 240, 159, 156, 141, 240, 159, 156, 142, 240, 159, 156, 143, 240, 159, 156, 144, 240, 159, 156, 145, 240, 159, 156, 146, 240, 159, 156, 147, 240, 159, 156, 148, 240, 159, 156, 149, 240, 159, 156, 150, 240, 159, 156, 151, 240, 159, 156, 152, 240, 159, 156, 153, 240, 159, 156, 154, 240, 159, 156, 155, 240, 159, 156, 156, 240, 159, 156, 157, 240, 159, 156, 158, 240, 159, 156, 159, 240, 159, 156, 160, 240, 159, 156, 161, 240, 159, 156, 162, 240, 159, 156, 163, 240, 159, 156, 164, 240, 159, 156, 165, 240, 159, 156, 166, 240, 159, 156, 167, 240, 159, 156, 168, 240, 159, 156, 169, 240, 159, 156, 170, 240, 159, 156, 171, 240, 159, 156, 172, 240, 159, 156, 173, 240, 159, 156, 174, 240, 159, 156, 175, 240, 159, 156, 176, 240, 159, 156, 177, 240, 159, 156, 178, 240, 159, 156, 179, 240, 159, 156, 180, 240, 159, 156, 181, 240, 159, 156, 182, 240, 159, 156, 183, 240, 159, 156, 184, 240, 159, 156, 185, 240, 159, 156, 186, 240, 159, 156, 187, 240, 159, 156, 188, 240, 159, 156, 189, 240, 159, 156, 190, 240, 159, 156, 191, 240, 159, 157, 128, 240, 159, 157, 129, 240, 159, 157, 130, 240, 159, 157, 131, 240, 159, 157, 132, 240, 159, 157, 133, 240, 159, 157, 134, 240, 159, 157, 135, 240, 159, 157, 136, 240, 159, 157, 137, 240, 159, 157, 138, 240, 159, 157, 139, 240, 159, 157, 140, 240, 159, 157, 141, 240, 159, 157, 142, 240, 159, 157, 143, 240, 159, 157, 144, 240, 159, 157, 145, 240, 159, 157, 146, 240, 159, 157, 147, 240, 159, 157, 148, 240, 159, 157, 149, 240, 159, 157, 150, 240, 159, 157, 151, 240, 159, 157, 152, 240, 159, 157, 153, 240, 159, 157, 154, 240, 159, 157, 155, 240, 159, 157, 156, 240, 159, 157, 157, 240, 159, 157, 158, 240, 159, 157, 159, 240, 159, 157, 160, 240, 159, 157, 161, 240, 159, 157, 162, 240, 159, 157, 163, 240, 159, 157, 164, 240, 159, 157, 165, 240, 159, 157, 166, 240, 159, 157, 167, 240, 159, 157, 168, 240, 159, 157, 169, 240, 159, 157, 170, 240, 159, 157, 171, 240, 159, 157, 172, 240, 159, 157, 173, 240, 159, 157, 174, 240, 159, 157, 175, 240, 159, 157, 176, 240, 159, 157, 177, 240, 159, 157, 178, 240, 159, 157, 179],
    string: '🜀🜁🜂🜃🜄🜅🜆🜇🜈🜉🜊🜋🜌🜍🜎🜏🜐🜑🜒🜓🜔🜕🜖🜗🜘🜙🜚🜛🜜🜝🜞🜟🜠🜡🜢🜣🜤🜥🜦🜧🜨🜩🜪🜫🜬🜭🜮🜯🜰🜱🜲🜳🜴🜵🜶🜷🜸🜹🜺🜻🜼🜽🜾🜿🝀🝁🝂🝃🝄🝅🝆🝇🝈🝉🝊🝋🝌🝍🝎🝏🝐🝑🝒🝓🝔🝕🝖🝗🝘🝙🝚🝛🝜🝝🝞🝟🝠🝡🝢🝣🝤🝥🝦🝧🝨🝩🝪🝫🝬🝭🝮🝯🝰🝱🝲🝳'
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

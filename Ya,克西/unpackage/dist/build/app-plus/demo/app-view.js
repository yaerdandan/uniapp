var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a67926d4'])
Z([3,'_view data-v-5cda7db2 index'])
Z([3,'_view data-v-5cda7db2 status_bar'])
Z([3,'_view data-v-5cda7db2 top_view'])
Z([3,'_view data-v-5cda7db2 content'])
Z([3,'handleProxy'])
Z([3,'_image data-v-5cda7db2 fhImg'])
Z([[7],[3,'$k']])
Z([1,'ftd-0'])
Z([[7],[3,'fhImg']])
Z([3,'_text data-v-5cda7db2 regText'])
Z([3,'注册'])
Z([3,'_view data-v-5cda7db2 phone'])
Z([3,'_text data-v-5cda7db2 number'])
Z([3,'+86'])
Z(z[5])
Z([3,'_input data-v-5cda7db2 phoneText'])
Z(z[7])
Z([1,'XiK-1'])
Z([3,'请输入手机号'])
Z([3,'text'])
Z([[7],[3,'phone']])
Z([3,'_view data-v-5cda7db2 phone verify'])
Z(z[5])
Z([3,'_input data-v-5cda7db2 phoneVerify'])
Z(z[7])
Z([1,'I5T-2'])
Z([3,'请输入验证码'])
Z(z[20])
Z([[7],[3,'verify']])
Z(z[5])
Z([3,'_button data-v-5cda7db2 btn'])
Z(z[7])
Z([1,'X2V-3'])
Z([[7],[3,'disabled']])
Z([a,[[7],[3,'yzm']]])
Z([3,'_view data-v-5cda7db2 nicknameBox'])
Z([3,'_text data-v-5cda7db2 nicknameText'])
Z([3,'设置昵称'])
Z(z[5])
Z([3,'_input data-v-5cda7db2 nickname'])
Z(z[7])
Z([1,'pjw-4'])
Z([3,'请输入昵称'])
Z(z[20])
Z([[7],[3,'username']])
Z([3,'_view data-v-5cda7db2 password'])
Z(z[37])
Z([3,'设置密码'])
Z(z[5])
Z([3,'_input data-v-5cda7db2 pwd'])
Z(z[7])
Z([1,'o9x-5'])
Z([3,'请输入6-20位密码'])
Z(z[20])
Z([[7],[3,'pwd']])
Z(z[5])
Z([3,'_input data-v-5cda7db2 conPwd'])
Z(z[7])
Z([1,'MSW-6'])
Z([3,'确认密码'])
Z(z[20])
Z([[7],[3,'conPwd']])
Z([3,'_view data-v-5cda7db2'])
Z(z[5])
Z([3,'_button data-v-5cda7db2 btnReg'])
Z(z[7])
Z([1,'Fmw-7'])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a67926d4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2490508a'])
Z([3,'_view data-v-1c044c0c'])
Z([3,'_view data-v-1c044c0c bg_img'])
Z([3,'_image data-v-1c044c0c'])
Z([[7],[3,'img']])
Z([3,'height:630px;width:100%;'])
Z(z[1])
Z([3,'handleProxy'])
Z([3,'_img data-v-1c044c0c user_img'])
Z([[7],[3,'$k']])
Z([1,'v1e-0'])
Z([[7],[3,'src']])
Z([3,'_view data-v-1c044c0c reg-info'])
Z(z[7])
Z([3,'_input data-v-1c044c0c'])
Z(z[9])
Z([1,'zpz-1'])
Z([3,'用户名'])
Z([3,'text'])
Z([[7],[3,'username']])
Z(z[7])
Z(z[14])
Z(z[9])
Z([1,'Ja6-2'])
Z([3,'手机号'])
Z(z[18])
Z([[7],[3,'number']])
Z(z[1])
Z(z[7])
Z([3,'_radio-group data-v-1c044c0c radio-group'])
Z(z[9])
Z([1,'E20-3'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[32])
Z([3,'_label data-v-1c044c0c radio'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([3,'_radio data-v-1c044c0c'])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([a,[[6],[[7],[3,'item']],[3,'value']],[3,' ']])
Z(z[7])
Z(z[14])
Z(z[9])
Z([1,'Tn4-4'])
Z([3,'验证码'])
Z(z[18])
Z([[7],[3,'verify']])
Z(z[7])
Z([3,'_button data-v-1c044c0c verify'])
Z(z[9])
Z([1,'ntm-5'])
Z([[7],[3,'disabled']])
Z([3,'btn'])
Z([a,[[7],[3,'yzm']]])
Z([3,'_view data-v-1c044c0c btn_login'])
Z(z[3])
Z([[7],[3,'button_img']])
Z([3,'height:45px;width:60%;margin:0 auto;display: block;'])
Z(z[7])
Z([3,'_span data-v-1c044c0c user_login'])
Z(z[9])
Z([1,'6Du-6'])
Z([3,'注册'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2490508a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'54286581'])
Z([3,'_view data-v-62c27498 index'])
Z([3,'_view data-v-62c27498 status_bar'])
Z([3,'_view data-v-62c27498 top_view'])
Z([3,'_view data-v-62c27498 content'])
Z([3,'_image data-v-62c27498 srcImg'])
Z([[7],[3,'srcImg']])
Z([3,'handleProxy'])
Z([3,'_image data-v-62c27498 fhImg'])
Z([[7],[3,'$k']])
Z([1,'VkR-0'])
Z([[7],[3,'fhImg']])
Z([3,'_view data-v-62c27498'])
Z([3,'_view data-v-62c27498 zhanghao'])
Z([3,'_image data-v-62c27498 zhImg'])
Z([3,'../../static/people.png'])
Z(z[7])
Z([3,'_input data-v-62c27498 zhText'])
Z(z[9])
Z([1,'Xz2-1'])
Z([3,'请输入手机号'])
Z([3,'text'])
Z([[7],[3,'zhText']])
Z([3,'_view data-v-62c27498 password'])
Z(z[14])
Z([3,'../../static/pwd.png'])
Z(z[7])
Z(z[7])
Z(z[7])
Z(z[17])
Z(z[9])
Z([1,'ZcT-2'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'pwd']])
Z(z[7])
Z([a,[3,'_button data-v-62c27498 btn '],[[4],[[5],[[2,'?:'],[[2,'!'],[[7],[3,'isDisabled']]],[1,'btn1'],[1,'']]]]])
Z(z[9])
Z([1,'m08-3'])
Z([[7],[3,'isDisabled']])
Z([3,'登陆'])
Z([3,'_view data-v-62c27498 reg'])
Z(z[7])
Z([3,'_text data-v-62c27498 regText'])
Z(z[9])
Z([1,'1x3-4'])
Z([3,'还没有账号？立即注册'])
Z([3,'_image data-v-62c27498'])
Z([[7],[3,'jiantou']])
Z([3,'_view data-v-62c27498 otherReg'])
Z([3,'_text data-v-62c27498 otherRegText'])
Z([3,'其他登陆方式'])
Z(z[7])
Z([3,'_image data-v-62c27498 QQRegImg'])
Z(z[9])
Z([1,'aFV-5'])
Z([[7],[3,'QQRegImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'54286581'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2f295c35'])
Z([3,'_view data-v-a9ef3790 content'])
Z([1,true])
Z([3,'true'])
Z([3,'_swiper data-v-a9ef3790'])
Z([1,1000])
Z(z[2])
Z([1,3000])
Z([3,'_swiper-item data-v-a9ef3790'])
Z([3,'_view data-v-a9ef3790 swiper-item'])
Z([3,'1'])
Z(z[8])
Z(z[9])
Z([3,'2'])
Z(z[8])
Z(z[9])
Z([3,'3'])
Z([3,'_view data-v-a9ef3790 box'])
Z([3,'_ul data-v-a9ef3790'])
Z([3,'index'])
Z([3,'todo'])
Z([[7],[3,'todos']])
Z(z[19])
Z([3,'_li data-v-a9ef3790 function'])
Z([[7],[3,'index']])
Z([3,'_image data-v-a9ef3790 iconImg'])
Z([[6],[[7],[3,'todo']],[3,'img']])
Z([3,'_span data-v-a9ef3790 text'])
Z([a,[[6],[[7],[3,'todo']],[3,'text']]])
Z([3,'_view data-v-a9ef3790 particularlyRecommend'])
Z([3,'_view data-v-a9ef3790'])
Z([3,'_div data-v-a9ef3790'])
Z([3,'_image data-v-a9ef3790 recommendSrc'])
Z([[7],[3,'recommendSrc']])
Z([3,'_span data-v-a9ef3790 recommendText'])
Z([3,'特别推荐'])
Z([3,'_span data-v-a9ef3790 recommendEnglish'])
Z([3,'Recommend'])
Z([3,'_image data-v-a9ef3790 mote'])
Z([[7],[3,'mote']])
Z([3,'_span data-v-a9ef3790 moteText'])
Z([3,'·mote·'])
Z([3,'_view data-v-a9ef3790 recommendContent'])
Z(z[18])
Z(z[19])
Z(z[20])
Z([[7],[3,'recommends']])
Z(z[19])
Z([3,'_li data-v-a9ef3790'])
Z(z[24])
Z([3,'_image data-v-a9ef3790 recommendBar'])
Z([[6],[[7],[3,'todo']],[3,'recommendBar']])
Z([3,'_view data-v-a9ef3790 recBarLeft'])
Z([3,'_image data-v-a9ef3790 recBarLeftImg'])
Z([3,'_span data-v-a9ef3790 recBarLeftShop'])
Z([a,[[6],[[7],[3,'todo']],[3,'recBarLeftShop']]])
Z([3,'_view data-v-a9ef3790 recBarRight'])
Z([3,'_span data-v-a9ef3790 recBarRightTitle'])
Z([a,[[6],[[7],[3,'todo']],[3,'recBarRightTitle']]])
Z([3,'_span data-v-a9ef3790 recBarRightEng'])
Z([a,[[6],[[7],[3,'todo']],[3,'recBarRightEng']]])
Z([3,'_span data-v-a9ef3790 recBarRightdsc'])
Z([a,[[6],[[7],[3,'todo']],[3,'recBarRightdsc']]])
Z([3,'_image data-v-a9ef3790'])
Z([[6],[[7],[3,'todo']],[3,'NO1']])
Z([3,'width:80rpx;height:80rpx;position: absolute;left:414rpx;top:6rpx;'])
Z([3,'_view data-v-a9ef3790 guessLike'])
Z(z[30])
Z([3,'_image data-v-a9ef3790 guessLikeImg'])
Z([[7],[3,'guessLikeImg']])
Z([3,'_span data-v-a9ef3790 guessLikeText'])
Z([3,'猜你喜欢'])
Z([3,'_span data-v-a9ef3790 guessLikeEng'])
Z([3,'Guess You Like'])
Z([3,'handleProxy'])
Z(z[3])
Z(z[4])
Z([[7],[3,'$k']])
Z([1,'YlH-0'])
Z(z[5])
Z(z[2])
Z(z[7])
Z([3,'60px'])
Z(z[82])
Z([3,'margin-bottom:0px;margin-top:15rpx;'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[8])
Z(z[9])
Z(z[13])
Z(z[8])
Z(z[9])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2f295c35'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'222563a1'])
Z([3,'_view data-v-25d0c26a'])
Z([3,'_view data-v-25d0c26a search'])
Z([3,'_div data-v-25d0c26a bar1'])
Z([3,'_input data-v-25d0c26a'])
Z([3,'搜索的内容...'])
Z([3,'text'])
Z([3,'_button data-v-25d0c26a btn'])
Z([3,'submit'])
Z([3,'handleProxy'])
Z([3,'_button data-v-25d0c26a'])
Z([[7],[3,'$k']])
Z([1,'qTp-0'])
Z([3,'群聊1'])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,'wlt-1'])
Z([3,'群聊2'])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,'bmf-2'])
Z([3,'私聊1'])
Z([a,[3,' '],[[6],[[6],[[7],[3,'$store']],[3,'state']],[3,'username']],[3,' '],[[7],[3,'name']],[3,' ']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'222563a1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2ecffe0e'])
Z([3,'_view data-v-60b62d24 box'])
Z([3,'_scroll-view data-v-60b62d24 owner'])
Z([1,true])
Z([3,'index'])
Z([3,'todo'])
Z([[7],[3,'owner']])
Z(z[4])
Z([3,'_view data-v-60b62d24 ownerInfo'])
Z([[7],[3,'index']])
Z([3,'_image data-v-60b62d24 ownerImg'])
Z([[6],[[7],[3,'todo']],[3,'ownerImg']])
Z([3,'_text data-v-60b62d24 ownerText'])
Z([a,[[6],[[7],[3,'todo']],[3,'name']]])
Z([a,[3,'_scroll-view data-v-60b62d24 '],[[2,'?:'],[[2,'=='],[[7],[3,'isHeight']],[1,false]],[1,'height'],[1,'Height']]])
Z([[7],[3,'scrollTop']])
Z(z[3])
Z([3,'_div data-v-60b62d24'])
Z([3,'ul'])
Z(z[4])
Z(z[5])
Z([[7],[3,'todos']])
Z(z[4])
Z(z[17])
Z(z[9])
Z([a,[3,'_div data-v-60b62d24 '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'todo']],[3,'ismine']],[1,true]],[1,'mine'],[1,'other']]])
Z([3,'_image data-v-60b62d24 userImg'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'todo']],[3,'ismine']],[1,true]],[[6],[[7],[3,'todo']],[3,'src']],[[6],[[7],[3,'todo']],[3,'srcc']]])
Z([3,'_div data-v-60b62d24 Meg'])
Z([3,'_span data-v-60b62d24 Message'])
Z([3,'_span data-v-60b62d24'])
Z([[2,'!'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'todo']],[3,'chatImg']],[1,'']],[[2,'!'],[[7],[3,'isShow']]],[[7],[3,'isShow']]]])
Z([a,[[6],[[7],[3,'todo']],[3,'content']]])
Z([3,'handleProxy'])
Z([3,'_img data-v-60b62d24 chatImg'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'ypK-0-'],[[7],[3,'index']]])
Z([[2,'!'],[[2,'?:'],[[2,'!='],[[6],[[7],[3,'todo']],[3,'chatImg']],[1,'']],[[2,'!'],[[7],[3,'isShow']]],[[7],[3,'isShow']]]])
Z([[6],[[7],[3,'todo']],[3,'chatImg']])
Z([3,'_div data-v-60b62d24 clear'])
Z([3,'_view data-v-60b62d24 content'])
Z([3,'_text data-v-60b62d24 text'])
Z([3,'回复:'])
Z(z[33])
Z(z[33])
Z([3,'_textarea data-v-60b62d24'])
Z(z[35])
Z([1,'lTq-1'])
Z([[7],[3,'text']])
Z(z[33])
Z([3,'_image data-v-60b62d24 photo'])
Z(z[35])
Z([1,'bSE-2'])
Z([[7],[3,'photo']])
Z(z[33])
Z([3,'_button data-v-60b62d24'])
Z(z[35])
Z([1,'lo4-3'])
Z([3,'click'])
Z([3,'_image data-v-60b62d24 btnImg'])
Z([[7],[3,'btnImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2ecffe0e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'44732b3b'])
Z([3,'_view data-v-570dcd5f box'])
Z([3,'_view data-v-570dcd5f bg_img'])
Z([3,'_image data-v-570dcd5f bgSrc'])
Z([3,'scaleToFill'])
Z([[7],[3,'src']])
Z([3,'_view data-v-570dcd5f user'])
Z([3,'_view data-v-570dcd5f userInfo'])
Z([3,'handleProxy'])
Z([3,'_image data-v-570dcd5f userImg'])
Z([[7],[3,'$k']])
Z([1,'Zhx-0'])
Z(z[5])
Z([3,'_span data-v-570dcd5f username'])
Z([a,[[7],[3,'username']]])
Z([3,'_br data-v-570dcd5f'])
Z([3,'_text data-v-570dcd5f sig'])
Z([3,'这是一个个性签名'])
Z([3,'_view data-v-570dcd5f function'])
Z([3,'index'])
Z([3,'todo'])
Z([[7],[3,'list']])
Z(z[19])
Z([3,'_li data-v-570dcd5f'])
Z([[7],[3,'index']])
Z([3,'_image data-v-570dcd5f iconImg'])
Z([[6],[[7],[3,'todo']],[3,'iconImg']])
Z([3,'_span data-v-570dcd5f'])
Z([a,[[6],[[7],[3,'todo']],[3,'text']]])
Z([3,'_image data-v-570dcd5f arrows'])
Z([[7],[3,'arrows']])
Z([3,'_view data-v-570dcd5f'])
Z(z[8])
Z([3,'_button data-v-570dcd5f btn'])
Z(z[10])
Z([1,'bjK-1'])
Z([3,'warn'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44732b3b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/login/log.vue.wxml','./components/login/log.wxml','/components/login/log.vue.wxml','./components/login/login.vue.wxml','./components/login/login.wxml','/components/login/login.vue.wxml','./components/register/register.vue.wxml','./components/register/register.wxml','/components/register/register.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml','./pages/tabBar/chat/chat.vue.wxml','./pages/tabBar/chat/chat.wxml','/pages/tabBar/chat/chat.vue.wxml','./pages/tabBar/chat/chatGroup.vue.wxml','./pages/tabBar/chat/chatGroup.wxml','/pages/tabBar/chat/chatGroup.vue.wxml','./pages/tabBar/login/login.vue.wxml','./pages/tabBar/login/login.wxml','/pages/tabBar/login/login.vue.wxml'];d_[x[0]]={}
d_[x[0]]["a67926d4"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':a67926d4'
r.wxVkey=b
gg.f=$gdc(f_["./components/login/log.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./components/login/log.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/login/log.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./components/login/log.vue.wxml:view:4:8")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/login/log.vue.wxml:view:6:6")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./components/login/log.vue.wxml:image:7:8")
var cF=_mz(z,'image',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.push("./components/login/log.vue.wxml:text:8:8")
var hG=_n('text')
_rz(z,hG,'class',10,e,s,gg)
var oH=_oz(z,11,e,s,gg)
_(hG,oH)
cs.pop()
_(fE,hG)
cs.pop()
_(oB,fE)
cs.push("./components/login/log.vue.wxml:view:10:6")
var cI=_n('view')
_rz(z,cI,'class',12,e,s,gg)
cs.push("./components/login/log.vue.wxml:text:11:8")
var oJ=_n('text')
_rz(z,oJ,'class',13,e,s,gg)
var lK=_oz(z,14,e,s,gg)
_(oJ,lK)
cs.pop()
_(cI,oJ)
cs.push("./components/login/log.vue.wxml:input:12:8")
var aL=_mz(z,'input',['bindinput',15,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(cI,aL)
cs.pop()
_(oB,cI)
cs.push("./components/login/log.vue.wxml:view:14:6")
var tM=_n('view')
_rz(z,tM,'class',22,e,s,gg)
cs.push("./components/login/log.vue.wxml:input:15:8")
var eN=_mz(z,'input',['bindinput',23,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(tM,eN)
cs.push("./components/login/log.vue.wxml:button:16:8")
var bO=_mz(z,'button',['bindtap',30,'class',1,'data-comkey',2,'data-eventid',3,'disabled',4],[],e,s,gg)
var oP=_oz(z,35,e,s,gg)
_(bO,oP)
cs.pop()
_(tM,bO)
cs.pop()
_(oB,tM)
cs.push("./components/login/log.vue.wxml:view:18:6")
var xQ=_n('view')
_rz(z,xQ,'class',36,e,s,gg)
cs.push("./components/login/log.vue.wxml:text:19:8")
var oR=_n('text')
_rz(z,oR,'class',37,e,s,gg)
var fS=_oz(z,38,e,s,gg)
_(oR,fS)
cs.pop()
_(xQ,oR)
cs.push("./components/login/log.vue.wxml:input:20:8")
var cT=_mz(z,'input',['bindinput',39,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(xQ,cT)
cs.pop()
_(oB,xQ)
cs.push("./components/login/log.vue.wxml:view:22:6")
var hU=_n('view')
_rz(z,hU,'class',46,e,s,gg)
cs.push("./components/login/log.vue.wxml:text:23:8")
var oV=_n('text')
_rz(z,oV,'class',47,e,s,gg)
var cW=_oz(z,48,e,s,gg)
_(oV,cW)
cs.pop()
_(hU,oV)
cs.push("./components/login/log.vue.wxml:input:24:8")
var oX=_mz(z,'input',['bindinput',49,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(hU,oX)
cs.push("./components/login/log.vue.wxml:input:25:8")
var lY=_mz(z,'input',['bindinput',56,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(hU,lY)
cs.pop()
_(oB,hU)
cs.push("./components/login/log.vue.wxml:view:27:6")
var aZ=_n('view')
_rz(z,aZ,'class',63,e,s,gg)
cs.push("./components/login/log.vue.wxml:button:28:8")
var t1=_mz(z,'button',['bindtap',64,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var e2=_oz(z,68,e,s,gg)
_(t1,e2)
cs.pop()
_(aZ,t1)
cs.pop()
_(oB,aZ)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=e_[x[1]].i
_ai(xC,x[2],e_,x[1],1,1)
var oD=_v()
_(r,oD)
cs.push("./components/login/log.wxml:template:1:48")
var fE=_oz(z,1,e,s,gg)
var cF=_gd(x[1],fE,e_,d_)
if(cF){
var hG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[1],1,60)
cs.pop()
xC.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
d_[x[3]]["2490508a"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':2490508a'
r.wxVkey=b
gg.f=$gdc(f_["./components/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./components/login/login.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/login/login.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./components/login/login.vue.wxml:image:4:8")
var oD=_mz(z,'image',['mode',-1,'class',3,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/login/login.vue.wxml:view:6:6")
var fE=_n('view')
_rz(z,fE,'class',6,e,s,gg)
cs.push("./components/login/login.vue.wxml:image:7:8")
var cF=_mz(z,'image',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./components/login/login.vue.wxml:view:9:6")
var hG=_n('view')
_rz(z,hG,'class',12,e,s,gg)
cs.push("./components/login/login.vue.wxml:input:10:8")
var oH=_mz(z,'input',['bindinput',13,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(hG,oH)
cs.push("./components/login/login.vue.wxml:input:11:8")
var cI=_mz(z,'input',['bindinput',20,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(hG,cI)
cs.push("./components/login/login.vue.wxml:view:12:8")
var oJ=_n('view')
_rz(z,oJ,'class',27,e,s,gg)
cs.push("./components/login/login.vue.wxml:radio-group:13:10")
var lK=_mz(z,'radio-group',['bindchange',28,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var aL=_v()
_(lK,aL)
cs.push("./components/login/login.vue.wxml:label:14:12")
var tM=function(bO,eN,oP,gg){
cs.push("./components/login/login.vue.wxml:label:14:12")
var oR=_mz(z,'label',['class',36,'key',1],[],bO,eN,gg)
cs.push("./components/login/login.vue.wxml:radio:15:14")
var fS=_mz(z,'radio',['checked',38,'class',1,'value',2],[],bO,eN,gg)
cs.pop()
_(oR,fS)
var cT=_oz(z,41,bO,eN,gg)
_(oR,cT)
cs.pop()
_(oP,oR)
return oP
}
aL.wxXCkey=2
_2z(z,34,tM,e,s,gg,aL,'item','index','index')
cs.pop()
cs.pop()
_(oJ,lK)
cs.pop()
_(hG,oJ)
cs.push("./components/login/login.vue.wxml:input:18:8")
var hU=_mz(z,'input',['bindinput',42,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(hG,hU)
cs.push("./components/login/login.vue.wxml:button:19:8")
var oV=_mz(z,'button',['bindtap',49,'class',1,'data-comkey',2,'data-eventid',3,'disabled',4,'id',5],[],e,s,gg)
var cW=_oz(z,55,e,s,gg)
_(oV,cW)
cs.pop()
_(hG,oV)
cs.push("./components/login/login.vue.wxml:view:20:8")
var oX=_n('view')
_rz(z,oX,'class',56,e,s,gg)
cs.push("./components/login/login.vue.wxml:image:21:10")
var lY=_mz(z,'image',['class',57,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oX,lY)
cs.push("./components/login/login.vue.wxml:label:22:10")
var aZ=_mz(z,'label',['bindtap',60,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var t1=_oz(z,64,e,s,gg)
_(aZ,t1)
cs.pop()
_(oX,aZ)
cs.pop()
_(hG,oX)
cs.pop()
_(oB,hG)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oJ=e_[x[4]].i
_ai(oJ,x[5],e_,x[4],1,1)
var lK=_v()
_(r,lK)
cs.push("./components/login/login.wxml:template:1:50")
var aL=_oz(z,1,e,s,gg)
var tM=_gd(x[4],aL,e_,d_)
if(tM){
var eN=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[4],1,62)
cs.pop()
oJ.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["54286581"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[6]+':54286581'
r.wxVkey=b
gg.f=$gdc(f_["./components/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./components/register/register.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/register/register.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./components/register/register.vue.wxml:view:4:8")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/register/register.vue.wxml:view:6:6")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./components/register/register.vue.wxml:image:7:8")
var cF=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.push("./components/register/register.vue.wxml:image:8:8")
var hG=_mz(z,'image',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(fE,hG)
cs.push("./components/register/register.vue.wxml:view:9:8")
var oH=_n('view')
_rz(z,oH,'class',12,e,s,gg)
cs.push("./components/register/register.vue.wxml:view:10:10")
var cI=_n('view')
_rz(z,cI,'class',13,e,s,gg)
cs.push("./components/register/register.vue.wxml:image:11:12")
var oJ=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
cs.pop()
_(cI,oJ)
cs.push("./components/register/register.vue.wxml:input:12:12")
var lK=_mz(z,'input',['bindinput',16,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(cI,lK)
cs.pop()
_(oH,cI)
cs.push("./components/register/register.vue.wxml:view:14:10")
var aL=_n('view')
_rz(z,aL,'class',23,e,s,gg)
cs.push("./components/register/register.vue.wxml:image:15:12")
var tM=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
cs.pop()
_(aL,tM)
cs.push("./components/register/register.vue.wxml:input:16:12")
var eN=_mz(z,'input',['bindblur',26,'bindfocus',1,'bindinput',2,'class',3,'data-comkey',4,'data-eventid',5,'placeholder',6,'type',7,'value',8],[],e,s,gg)
cs.pop()
_(aL,eN)
cs.pop()
_(oH,aL)
cs.push("./components/register/register.vue.wxml:button:18:10")
var bO=_mz(z,'button',['bindtap',35,'class',1,'data-comkey',2,'data-eventid',3,'disabled',4],[],e,s,gg)
var oP=_oz(z,40,e,s,gg)
_(bO,oP)
cs.pop()
_(oH,bO)
cs.pop()
_(fE,oH)
cs.push("./components/register/register.vue.wxml:view:20:8")
var xQ=_n('view')
_rz(z,xQ,'class',41,e,s,gg)
cs.push("./components/register/register.vue.wxml:text:21:10")
var oR=_mz(z,'text',['bindtap',42,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var fS=_oz(z,46,e,s,gg)
_(oR,fS)
cs.pop()
_(xQ,oR)
cs.push("./components/register/register.vue.wxml:image:22:10")
var cT=_mz(z,'image',['class',47,'src',1],[],e,s,gg)
cs.pop()
_(xQ,cT)
cs.pop()
_(fE,xQ)
cs.push("./components/register/register.vue.wxml:view:24:8")
var hU=_n('view')
_rz(z,hU,'class',49,e,s,gg)
cs.push("./components/register/register.vue.wxml:text:25:10")
var oV=_n('text')
_rz(z,oV,'class',50,e,s,gg)
var cW=_oz(z,51,e,s,gg)
_(oV,cW)
cs.pop()
_(hU,oV)
cs.push("./components/register/register.vue.wxml:image:26:10")
var oX=_mz(z,'image',['bindtap',52,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(hU,oX)
cs.pop()
_(fE,hU)
cs.pop()
_(oB,fE)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xQ=e_[x[7]].i
_ai(xQ,x[8],e_,x[7],1,1)
var oR=_v()
_(r,oR)
cs.push("./components/register/register.wxml:template:1:56")
var fS=_oz(z,1,e,s,gg)
var cT=_gd(x[7],fS,e_,d_)
if(cT){
var hU=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[7],1,68)
cs.pop()
xQ.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["2f295c35"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[9]+':2f295c35'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:swiper:3:6")
var xC=_mz(z,'swiper',['autoplay',2,'circular',1,'class',2,'duration',3,'indicatorDots',4,'interval',5],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:swiper-item:4:8")
var oD=_n('swiper-item')
_rz(z,oD,'class',8,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:5:10")
var fE=_n('view')
_rz(z,fE,'class',9,e,s,gg)
var cF=_oz(z,10,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/index/index.vue.wxml:swiper-item:7:8")
var hG=_n('swiper-item')
_rz(z,hG,'class',11,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:8:10")
var oH=_n('view')
_rz(z,oH,'class',12,e,s,gg)
var cI=_oz(z,13,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.pop()
_(xC,hG)
cs.push("./pages/index/index.vue.wxml:swiper-item:10:8")
var oJ=_n('swiper-item')
_rz(z,oJ,'class',14,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:11:10")
var lK=_n('view')
_rz(z,lK,'class',15,e,s,gg)
var aL=_oz(z,16,e,s,gg)
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.pop()
_(xC,oJ)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:view:14:6")
var tM=_n('view')
_rz(z,tM,'class',17,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:15:8")
var eN=_n('view')
_rz(z,eN,'class',18,e,s,gg)
var bO=_v()
_(eN,bO)
cs.push("./pages/index/index.vue.wxml:view:16:10")
var oP=function(oR,xQ,fS,gg){
cs.push("./pages/index/index.vue.wxml:view:16:10")
var hU=_mz(z,'view',['class',23,'key',1],[],oR,xQ,gg)
cs.push("./pages/index/index.vue.wxml:image:17:12")
var oV=_mz(z,'image',['class',25,'src',1],[],oR,xQ,gg)
cs.pop()
_(hU,oV)
cs.push("./pages/index/index.vue.wxml:label:18:12")
var cW=_n('label')
_rz(z,cW,'class',27,oR,xQ,gg)
var oX=_oz(z,28,oR,xQ,gg)
_(cW,oX)
cs.pop()
_(hU,cW)
cs.pop()
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,21,oP,e,s,gg,bO,'todo','index','index')
cs.pop()
cs.pop()
_(tM,eN)
cs.pop()
_(oB,tM)
cs.push("./pages/index/index.vue.wxml:view:22:6")
var lY=_n('view')
_rz(z,lY,'class',29,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:23:8")
var aZ=_n('view')
_rz(z,aZ,'class',30,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:24:10")
var t1=_n('view')
_rz(z,t1,'class',31,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:25:12")
var e2=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
cs.pop()
_(t1,e2)
cs.push("./pages/index/index.vue.wxml:label:26:12")
var b3=_n('label')
_rz(z,b3,'class',34,e,s,gg)
var o4=_oz(z,35,e,s,gg)
_(b3,o4)
cs.pop()
_(t1,b3)
cs.push("./pages/index/index.vue.wxml:label:27:12")
var x5=_n('label')
_rz(z,x5,'class',36,e,s,gg)
var o6=_oz(z,37,e,s,gg)
_(x5,o6)
cs.pop()
_(t1,x5)
cs.push("./pages/index/index.vue.wxml:image:28:12")
var f7=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
cs.pop()
_(t1,f7)
cs.push("./pages/index/index.vue.wxml:label:29:12")
var c8=_n('label')
_rz(z,c8,'class',40,e,s,gg)
var h9=_oz(z,41,e,s,gg)
_(c8,h9)
cs.pop()
_(t1,c8)
cs.pop()
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.push("./pages/index/index.vue.wxml:view:32:8")
var o0=_n('view')
_rz(z,o0,'class',42,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:33:10")
var cAB=_n('view')
_rz(z,cAB,'class',43,e,s,gg)
var oBB=_v()
_(cAB,oBB)
cs.push("./pages/index/index.vue.wxml:view:34:12")
var lCB=function(tEB,aDB,eFB,gg){
cs.push("./pages/index/index.vue.wxml:view:34:12")
var oHB=_mz(z,'view',['class',48,'key',1],[],tEB,aDB,gg)
cs.push("./pages/index/index.vue.wxml:image:35:14")
var xIB=_mz(z,'image',['class',50,'src',1],[],tEB,aDB,gg)
cs.pop()
_(oHB,xIB)
cs.push("./pages/index/index.vue.wxml:view:36:14")
var oJB=_n('view')
_rz(z,oJB,'class',52,tEB,aDB,gg)
cs.push("./pages/index/index.vue.wxml:image:37:16")
var fKB=_n('image')
_rz(z,fKB,'class',53,tEB,aDB,gg)
cs.pop()
_(oJB,fKB)
cs.push("./pages/index/index.vue.wxml:label:38:16")
var cLB=_n('label')
_rz(z,cLB,'class',54,tEB,aDB,gg)
var hMB=_oz(z,55,tEB,aDB,gg)
_(cLB,hMB)
cs.pop()
_(oJB,cLB)
cs.pop()
_(oHB,oJB)
cs.push("./pages/index/index.vue.wxml:view:40:14")
var oNB=_n('view')
_rz(z,oNB,'class',56,tEB,aDB,gg)
cs.push("./pages/index/index.vue.wxml:label:41:16")
var cOB=_n('label')
_rz(z,cOB,'class',57,tEB,aDB,gg)
var oPB=_oz(z,58,tEB,aDB,gg)
_(cOB,oPB)
cs.pop()
_(oNB,cOB)
cs.push("./pages/index/index.vue.wxml:label:42:16")
var lQB=_n('label')
_rz(z,lQB,'class',59,tEB,aDB,gg)
var aRB=_oz(z,60,tEB,aDB,gg)
_(lQB,aRB)
cs.pop()
_(oNB,lQB)
cs.push("./pages/index/index.vue.wxml:label:43:16")
var tSB=_n('label')
_rz(z,tSB,'class',61,tEB,aDB,gg)
var eTB=_oz(z,62,tEB,aDB,gg)
_(tSB,eTB)
cs.pop()
_(oNB,tSB)
cs.push("./pages/index/index.vue.wxml:image:44:16")
var bUB=_mz(z,'image',['class',63,'src',1,'style',2],[],tEB,aDB,gg)
cs.pop()
_(oNB,bUB)
cs.pop()
_(oHB,oNB)
cs.pop()
_(eFB,oHB)
return eFB
}
oBB.wxXCkey=2
_2z(z,46,lCB,e,s,gg,oBB,'todo','index','index')
cs.pop()
cs.pop()
_(o0,cAB)
cs.pop()
_(lY,o0)
cs.pop()
_(oB,lY)
cs.push("./pages/index/index.vue.wxml:view:50:6")
var oVB=_n('view')
_rz(z,oVB,'class',66,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:51:8")
var xWB=_n('view')
_rz(z,xWB,'class',67,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:52:10")
var oXB=_mz(z,'image',['class',68,'src',1],[],e,s,gg)
cs.pop()
_(xWB,oXB)
cs.push("./pages/index/index.vue.wxml:label:53:10")
var fYB=_n('label')
_rz(z,fYB,'class',70,e,s,gg)
var cZB=_oz(z,71,e,s,gg)
_(fYB,cZB)
cs.pop()
_(xWB,fYB)
cs.push("./pages/index/index.vue.wxml:label:54:10")
var h1B=_n('label')
_rz(z,h1B,'class',72,e,s,gg)
var o2B=_oz(z,73,e,s,gg)
_(h1B,o2B)
cs.pop()
_(xWB,h1B)
cs.pop()
_(oVB,xWB)
cs.push("./pages/index/index.vue.wxml:swiper:56:8")
var c3B=_mz(z,'swiper',['bindchange',74,'circular',1,'class',2,'data-comkey',3,'data-eventid',4,'duration',5,'indicatorDots',6,'interval',7,'nextMargin',8,'previousMargin',9,'style',10],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:swiper-item:58:10")
var o4B=_n('swiper-item')
_rz(z,o4B,'class',85,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:59:12")
var l5B=_n('view')
_rz(z,l5B,'class',86,e,s,gg)
var a6B=_oz(z,87,e,s,gg)
_(l5B,a6B)
cs.pop()
_(o4B,l5B)
cs.pop()
_(c3B,o4B)
cs.push("./pages/index/index.vue.wxml:swiper-item:61:10")
var t7B=_n('swiper-item')
_rz(z,t7B,'class',88,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:62:12")
var e8B=_n('view')
_rz(z,e8B,'class',89,e,s,gg)
var b9B=_oz(z,90,e,s,gg)
_(e8B,b9B)
cs.pop()
_(t7B,e8B)
cs.pop()
_(c3B,t7B)
cs.push("./pages/index/index.vue.wxml:swiper-item:64:10")
var o0B=_n('swiper-item')
_rz(z,o0B,'class',91,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:65:12")
var xAC=_n('view')
_rz(z,xAC,'class',92,e,s,gg)
var oBC=_oz(z,93,e,s,gg)
_(xAC,oBC)
cs.pop()
_(o0B,xAC)
cs.pop()
_(c3B,o0B)
cs.pop()
_(oVB,c3B)
cs.pop()
_(oB,oVB)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oX=e_[x[10]].i
_ai(oX,x[11],e_,x[10],1,1)
var lY=_v()
_(r,lY)
cs.push("./pages/index/index.wxml:template:1:45")
var aZ=_oz(z,1,e,s,gg)
var t1=_gd(x[10],aZ,e_,d_)
if(t1){
var e2=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[10],1,57)
cs.pop()
oX.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["222563a1"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[12]+':222563a1'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/chat/chat.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/chat/chat.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/chat/chat.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/tabBar/chat/chat.vue.wxml:view:4:8")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/tabBar/chat/chat.vue.wxml:input:5:10")
var fE=_mz(z,'input',['class',4,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.push("./pages/tabBar/chat/chat.vue.wxml:button:6:10")
var cF=_mz(z,'button',['class',7,'type',1],[],e,s,gg)
cs.pop()
_(oD,cF)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/chat/chat.vue.wxml:button:9:6")
var hG=_mz(z,'button',['bindtap',9,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oH=_oz(z,13,e,s,gg)
_(hG,oH)
cs.pop()
_(oB,hG)
cs.push("./pages/tabBar/chat/chat.vue.wxml:button:10:6")
var cI=_mz(z,'button',['bindtap',14,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_oz(z,18,e,s,gg)
_(cI,oJ)
cs.pop()
_(oB,cI)
cs.push("./pages/tabBar/chat/chat.vue.wxml:button:11:6")
var lK=_mz(z,'button',['bindtap',19,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var aL=_oz(z,23,e,s,gg)
_(lK,aL)
cs.pop()
_(oB,lK)
var tM=_oz(z,24,e,s,gg)
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var x5=e_[x[13]].i
_ai(x5,x[14],e_,x[13],1,1)
var o6=_v()
_(r,o6)
cs.push("./pages/tabBar/chat/chat.wxml:template:1:50")
var f7=_oz(z,1,e,s,gg)
var c8=_gd(x[13],f7,e_,d_)
if(c8){
var h9=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o6.wxXCkey=3
c8(h9,h9,o6,gg)
gg.f=cur_globalf
}
else _w(f7,x[13],1,62)
cs.pop()
x5.pop()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["2ecffe0e"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[15]+':2ecffe0e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/chat/chatGroup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:scroll-view:3:6")
var xC=_mz(z,'scroll-view',['scrollX',-1,'class',2,'scrollWithAnimation',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:4:8")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:4:8")
var oJ=_mz(z,'view',['class',8,'key',1],[],hG,cF,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:image:5:10")
var lK=_mz(z,'image',['class',10,'src',1],[],hG,cF,gg)
cs.pop()
_(oJ,lK)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:text:6:10")
var aL=_n('text')
_rz(z,aL,'class',12,hG,cF,gg)
var tM=_oz(z,13,hG,cF,gg)
_(aL,tM)
cs.pop()
_(oJ,aL)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,6,fE,e,s,gg,oD,'todo','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:scroll-view:9:6")
var eN=_mz(z,'scroll-view',['scrollY',-1,'class',14,'scrollTop',1,'scrollWithAnimation',2],[],e,s,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:10:8")
var bO=_mz(z,'view',['class',17,'id',1],[],e,s,gg)
var oP=_v()
_(bO,oP)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:11:10")
var xQ=function(fS,oR,cT,gg){
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:11:10")
var oV=_mz(z,'view',['class',23,'key',1],[],fS,oR,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:12:12")
var cW=_n('view')
_rz(z,cW,'class',25,fS,oR,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:image:13:14")
var oX=_mz(z,'image',['class',26,'src',1],[],fS,oR,gg)
cs.pop()
_(cW,oX)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:14:14")
var lY=_n('view')
_rz(z,lY,'class',28,fS,oR,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:label:15:16")
var aZ=_n('label')
_rz(z,aZ,'class',29,fS,oR,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:label:16:18")
var t1=_mz(z,'label',['class',30,'hidden',1],[],fS,oR,gg)
var e2=_oz(z,32,fS,oR,gg)
_(t1,e2)
cs.pop()
_(aZ,t1)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:image:17:18")
var b3=_mz(z,'image',['bindtap',33,'class',1,'data-comkey',2,'data-eventid',3,'hidden',4,'src',5],[],fS,oR,gg)
cs.pop()
_(aZ,b3)
cs.pop()
_(lY,aZ)
cs.pop()
_(cW,lY)
cs.pop()
_(oV,cW)
cs.pop()
_(cT,oV)
return cT
}
oP.wxXCkey=2
_2z(z,21,xQ,e,s,gg,oP,'todo','index','index')
cs.pop()
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:22:10")
var o4=_n('view')
_rz(z,o4,'class',39,e,s,gg)
cs.pop()
_(bO,o4)
cs.pop()
_(eN,bO)
cs.pop()
_(oB,eN)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:view:25:6")
var x5=_n('view')
_rz(z,x5,'class',40,e,s,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:text:26:8")
var o6=_n('text')
_rz(z,o6,'class',41,e,s,gg)
var f7=_oz(z,42,e,s,gg)
_(o6,f7)
cs.pop()
_(x5,o6)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:textarea:27:8")
var c8=_mz(z,'textarea',['bindinput',43,'bindkeyup',1,'class',2,'data-comkey',3,'data-eventid',4,'value',5],[],e,s,gg)
cs.pop()
_(x5,c8)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:image:28:8")
var h9=_mz(z,'image',['bindtap',49,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(x5,h9)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:button:29:8")
var o0=_mz(z,'button',['bindtap',54,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],e,s,gg)
cs.push("./pages/tabBar/chat/chatGroup.vue.wxml:image:30:10")
var cAB=_mz(z,'image',['class',59,'src',1],[],e,s,gg)
cs.pop()
_(o0,cAB)
cs.pop()
_(x5,o0)
cs.pop()
_(oB,x5)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oBB=e_[x[16]].i
_ai(oBB,x[17],e_,x[16],1,1)
var lCB=_v()
_(r,lCB)
cs.push("./pages/tabBar/chat/chatGroup.wxml:template:1:55")
var aDB=_oz(z,1,e,s,gg)
var tEB=_gd(x[16],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[16],1,67)
cs.pop()
oBB.pop()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["44732b3b"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[18]+':44732b3b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/login/login.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:image:4:8")
var oD=_mz(z,'image',['class',3,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/login/login.vue.wxml:view:6:6")
var fE=_n('view')
_rz(z,fE,'class',6,e,s,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:view:7:8")
var cF=_n('view')
_rz(z,cF,'class',7,e,s,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:image:8:10")
var hG=_mz(z,'image',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.push("./pages/tabBar/login/login.vue.wxml:label:9:10")
var oH=_n('label')
_rz(z,oH,'class',13,e,s,gg)
var cI=_oz(z,14,e,s,gg)
_(oH,cI)
cs.pop()
_(cF,oH)
cs.push("./pages/tabBar/login/login.vue.wxml:view:10:10")
var oJ=_n('view')
_rz(z,oJ,'class',15,e,s,gg)
cs.pop()
_(cF,oJ)
cs.push("./pages/tabBar/login/login.vue.wxml:text:11:10")
var lK=_n('text')
_rz(z,lK,'class',16,e,s,gg)
var aL=_oz(z,17,e,s,gg)
_(lK,aL)
cs.pop()
_(cF,lK)
cs.pop()
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./pages/tabBar/login/login.vue.wxml:view:14:6")
var tM=_n('view')
_rz(z,tM,'class',18,e,s,gg)
var eN=_v()
_(tM,eN)
cs.push("./pages/tabBar/login/login.vue.wxml:view:15:8")
var bO=function(xQ,oP,oR,gg){
cs.push("./pages/tabBar/login/login.vue.wxml:view:15:8")
var cT=_mz(z,'view',['class',23,'key',1],[],xQ,oP,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:image:16:10")
var hU=_mz(z,'image',['class',25,'src',1],[],xQ,oP,gg)
cs.pop()
_(cT,hU)
cs.push("./pages/tabBar/login/login.vue.wxml:label:17:10")
var oV=_n('label')
_rz(z,oV,'class',27,xQ,oP,gg)
var cW=_oz(z,28,xQ,oP,gg)
_(oV,cW)
cs.pop()
_(cT,oV)
cs.push("./pages/tabBar/login/login.vue.wxml:image:18:10")
var oX=_mz(z,'image',['class',29,'src',1],[],xQ,oP,gg)
cs.pop()
_(cT,oX)
cs.pop()
_(oR,cT)
return oR
}
eN.wxXCkey=2
_2z(z,21,bO,e,s,gg,eN,'todo','index','index')
cs.pop()
cs.push("./pages/tabBar/login/login.vue.wxml:view:20:8")
var lY=_n('view')
_rz(z,lY,'class',31,e,s,gg)
cs.push("./pages/tabBar/login/login.vue.wxml:button:21:10")
var aZ=_mz(z,'button',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3,'type',4],[],e,s,gg)
var t1=_oz(z,37,e,s,gg)
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.pop()
_(tM,lY)
cs.pop()
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xIB=e_[x[19]].i
_ai(xIB,x[20],e_,x[19],1,1)
var oJB=_v()
_(r,oJB)
cs.push("./pages/tabBar/login/login.wxml:template:1:52")
var fKB=_oz(z,1,e,s,gg)
var cLB=_gd(x[19],fKB,e_,d_)
if(cLB){
var hMB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJB.wxXCkey=3
cLB(hMB,hMB,oJB,gg)
gg.f=cur_globalf
}
else _w(fKB,x[19],1,64)
cs.pop()
xIB.pop()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[x[20]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}


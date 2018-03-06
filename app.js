function setup(name,code) {
	 $display.setContent(`${name} - ${code}`);
	 $txt_key_code.setValue(code);
}

_doWhen({
  keycode:_keyCode.backspace,
  callback:function(){
  	 setup('BACKSPACE',_keyCode.backspace);
  }
});

_doWhen({
  keycode:_keyCode.enter,
  callback:function(){
  	setup('ENTER',_keyCode.enter);
  }
});

_doWhen({
  keycode:_keyCode.spacebar,
  callback:function(){
  	setup('SPACEBAR',_keyCode.spacebar);
  }
});

_doWhen({
  keycode:_keyCode.ctrl,
  callback:function(){
  	setup('CTRL',_keyCode.ctrl);
  }
});

_doWhen({
  keycode:_keyCode.shift,
  callback:function(){
  	setup('SHIFT',_keyCode.shift);
  }
});

_doWhen({
  keycode:_keyCode.tab,
  callback:function(){
  	setup('TAB',_keyCode.tab);
  }
});

_doWhen({
  keycode:_keyCode.capslock,
  callback:function(){
  	setup('CAPSLOCK',_keyCode.capslock);
  }
});

_doWhen({
  keycode:_keyCode.escape,
  callback:function(){
  	setup('ESCAPE',_keyCode.escape);
  }
});

_doWhen({
  keycode:_keyCode.end,
  callback:function(){
  	setup('END',_keyCode.end);
  }
});


_doWhen({
  keycode:_keyCode.home,
  callback:function(){
  	setup('HOME',_keyCode.home);
  }
});

_doWhen({
  keycode:_keyCode.alt,
  callback:function(){
  	setup('ALT',_keyCode.alt);
  }
});

_doWhen({
  keycode:_keyCode.up,
  callback:function(){
  	setup('UP',_keyCode.up);
  }
});

_doWhen({
  keycode:_keyCode.down,
  callback:function(){
  	setup('DOWN',_keyCode.down);
  }
});

_doWhen({
  keycode:_keyCode.left,
  callback:function(){
  	setup('LEFT',_keyCode.left);
  }
});

_doWhen({
  keycode:_keyCode.right,
  callback:function(){
  	setup('RIGHT',_keyCode.right);
  }
});

_doWhen({
  keycode:_keyCode.semicolon,
  callback:function(){
  	setup('SEMICOLON',_keyCode.semicolon);
  }
});

_doWhen({
  keycode:_keyCode.comma,
  callback:function(){
  	setup('COMMA',_keyCode.comma);
  }
});

_doWhen({
  keycode:_keyCode.insert,
  callback:function(){
  	setup('INSERT',_keyCode.insert);
  }
});

_doWhen({
  keycode:_keyCode.delete,
  callback:function(){
  	setup('DELETE',_keyCode.delete);
  }
});

_doWhen({
  keycode:_keyCode.minus,
  callback:function(){
  	setup('MINUS',_keyCode.minus);
  }
});

_doWhen({
  keycode:_keyCode.numlock,
  callback:function(){
  	setup('NUMLOCK',_keyCode.numlock);
  }
});

_doWhen({
  keycode:_keyCode.clear,
  callback:function(){
  	setup('CLEAR',_keyCode.clear);
  }
});

_doWhen({
  keycode:_keyCode.f1,
  callback:function(){
  	setup('F1',_keyCode.f1);
  }
});

_doWhen({
  keycode:_keyCode.f2,
  callback:function(){
  	setup('F2',_keyCode.f2);
  }
});

_doWhen({
  keycode:_keyCode.f3,
  callback:function(){
  	setup('F3',_keyCode.f3);
  }
});


_doWhen({
  keycode:_keyCode.f4,
  callback:function(){
  	setup('F4',_keyCode.f4);
  }
});


_doWhen({
  keycode:_keyCode.f5,
  callback:function(){
  	setup('F5',_keyCode.f5);
  }
});


_doWhen({
  keycode:_keyCode.f6,
  callback:function(){
  	setup('F6',_keyCode.f6);
  }
});


_doWhen({
  keycode:_keyCode.f7,
  callback:function(){
  	setup('F7',_keyCode.f7);
  }
});

_doWhen({
  keycode:_keyCode.f8,
  callback:function(){
  	setup('F8',_keyCode.f8);
  }
});

_doWhen({
  keycode:_keyCode.f9,
  callback:function(){
  	setup('F9',_keyCode.f9);
  }
});

_doWhen({
  keycode:_keyCode.f10,
  callback:function(){
  	setup('F10',_keyCode.f10);
  }
});

_doWhen({
  keycode:_keyCode.f11,
  callback:function(){
  	setup('F11',_keyCode.f11);
  }
});

_doWhen({
  keycode:_keyCode.f12,
  callback:function(){
  	setup('F12',_keyCode.f12);
  }
});

_doWhen({
  keycode:_keyCode.divide,
  callback:function(){
  	setup('DIVIDE',_keyCode.divide);
  }
});

_doWhen({
  keycode:_keyCode.next,
  callback:function(){
  	setup('NEXT',_keyCode.next);
  }
});

_doWhen({
  keycode:_keyCode.previous,
  callback:function(){
  	setup('PREVIOUS',_keyCode.previous);
  }
});

$btn_copy.when('click',$=>{
	$txt_key_code.copy();
});

$btn_export.when('click',$=>{
    var data = "Keyboard Code Garuda Javascript 2 \n"+_toJSON(_keyCode);
    /**
     * File Save by EliyGray
     * https://github.com/eligrey
     * @type {Blob}
     */
    var prepare = new Blob([data], {type: "text/plain;charset=utf-8"});
    saveAs(prepare, "keyboard-code.txt");
});

$display_code.setContent( JSON.stringify(_keyCode, undefined, 2));

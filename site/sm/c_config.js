// USE WORDWRAP AND MAXIMIZE THE WINDOW TO SEE THIS FILE
c_styles={};c_menus={}; // do not remove this line

// You can remove most comments from this file to reduce the size if you like.




/******************************************************
	(1) GLOBAL SETTINGS
*******************************************************/

c_hideTimeout=500; // 1000==1 second
c_subShowTimeout=250;
c_keepHighlighted=true;
c_findCURRENT=false; // find the item linking to the current page and apply it the CURRENT style class
c_findCURRENTTree=true;
c_overlapControlsInIE=true;
c_rightToLeft=false; // if the menu text should have "rtl" direction (e.g. Hebrew, Arabic)




/******************************************************
	(2) MENU STYLES (CSS CLASSES)
*******************************************************/

// You can define different style classes here and then assign them globally to the menu tree(s)
// in section 3 below or set them to any UL element from your menu tree(s) in the page source


c_imagesPath="/sm/"; // path to the directory containing the menu images


c_styles['MM']=[ // MainMenu (the shorter the class name the better)
[
// MENU BOX STYLE
0,		// BorderWidth
'solid',	// BorderStyle (CSS valid values except 'none')
'#E0E0E0',	// BorderColor ('color')
0,		// Padding
'transparent',	// Background ('color','transparent','[image_source]')
'',		// IEfilter (only transition filters work well - not static filters)
''		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'solid',	// BorderStyle (CSS valid values except 'none')
'solid',	// OVER BorderStyle
'transparent',	// BorderColor ('color')
'transparent',	// OVER BorderColor
4,		// Padding
'[osx_item_bg.gif]',		// Background ('color','transparent','[image_source]')
'[osx_item_over_bg.gif]',	// OVER Background
'#000000',	// Color
'#FFFFFF',	// OVER Color
'14px',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'arial,helvetica,sans-serif',	// FontFamily
'normal',	// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'none',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'none',		// OVER TextDecoration
'left',		// TextAlign ('left','center','right','justify')
0,		// ItemsSeparatorSize
'solid',	// ItemsSeparatorStyle (border-style valid values)
'#CBCBEF',	// ItemsSeparatorColor ('color','transparent')
0,		// ItemsSeparatorSpacing
false,			// UseSubMenuImage (true,false)
'[v_osx_arrow.gif]',	// SubMenuImageSource ('[image_source]')
'[v_osx_arrow_over.gif]',// OverSubMenuImageSource
14,			// SubMenuImageWidth
10,			// SubMenuImageHeight
'6',			// SubMenuImageVAlign ('pixels from item top','middle')
'solid',		// VISITED BorderStyle
'transparent',		// VISITED BorderColor
'[osx_item_bg.gif]',	// VISITED Background
'#000000',		// VISITED Color
'none',			// VISITED TextDecoration
'[v_osx_arrow.gif]',	// VISITED SubMenuImageSource
'solid',		// CURRENT BorderStyle
'transparent',		// CURRENT BorderColor
'[osx_item_bg.gif]',	// CURRENT Background
'#000000',		// CURRENT Color
'none',			// CURRENT TextDecoration
'[v_osx_arrow.gif]',	// CURRENT SubMenuImageSource
'padding-left:7px;padding-right:7px;',	// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'',		// CURRENT Custom additional CSS for the items (valid CSS)
''		// VISITED Custom additional CSS for the items (valid CSS)
]];


c_styles['SM']=[ // SubMenus
[
// MENU BOX STYLE
1,		// BorderWidth
'solid',	// BorderStyle (CSS valid values except 'none')
'#E0E0E0',	// BorderColor ('color')
0,		// Padding
'[osx_item_bg.gif]',	// Background ('color','transparent','[image_source]')
'',		// IEfilter (only transition filters work well - not static filters)
'padding-top:4px;padding-bottom:4px;'		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'solid',	// BorderStyle (CSS valid values except 'none')
'solid',	// OVER BorderStyle
'transparent',	// BorderColor ('color')
'transparent',	// OVER BorderColor
2,		// Padding
'[osx_item_bg.gif]',		// Background ('color','transparent','[image_source]')
'[osx_item_over_bg.gif]',	// OVER Background
'#000000',	// Color
'#FFFFFF',	// OVER Color
'14px',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'arial,helvetica,sans-serif',	// FontFamily
'normal',	// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'none',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'none',		// OVER TextDecoration
'left',		// TextAlign ('left','center','right','justify')
0,		// ItemsSeparatorSize
'solid',	// ItemsSeparatorStyle (border-style valid values)
'#CBCBEF',	// ItemsSeparatorColor ('color','transparent')
2,		// ItemsSeparatorSpacing
true,			// UseSubMenuImage (true,false)
'[v_osx_arrow.gif]',	// SubMenuImageSource ('[image_source]')
'[v_osx_arrow_over.gif]',// OverSubMenuImageSource
14,			// SubMenuImageWidth
10,			// SubMenuImageHeight
'4',			// SubMenuImageVAlign ('pixels from item top','middle')
'solid',		// VISITED BorderStyle
'transparent',		// VISITED BorderColor
'[osx_item_bg.gif]',	// VISITED Background
'#000000',		// VISITED Color
'none',			// VISITED TextDecoration
'[v_osx_arrow.gif]',	// VISITED SubMenuImageSource
'solid',		// CURRENT BorderStyle
'transparent',		// CURRENT BorderColor
'#D4E7FF',		// CURRENT Background
'#000000',		// CURRENT Color
'none',			// CURRENT TextDecoration
'[v_osx_arrow.gif]',	// CURRENT SubMenuImageSource
'padding-left:15px;padding-right:25px;',	// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'',		// CURRENT Custom additional CSS for the items (valid CSS)
''		// VISITED Custom additional CSS for the items (valid CSS)
]];




/******************************************************
	(3) MENU TREE FEATURES
*******************************************************/

// Normally you would probably have just one menu tree (i.e. one main menu with sub menus).
// But you are actually not limited to just one and you can have as many menu trees as you like.
// Just copy/paste a config block below and configure it for another UL element if you like.


c_menus['Menu1']=[ // the UL element with id="Menu1"
[
// MAIN-MENU FEATURES
'vertical',	// ItemsArrangement ('vertical','horizontal')
'absolute',	// Position ('relative','absolute','fixed')
'0',		// X Position (values in CSS valid units- px,em,ex)
'0',		// Y Position (values in CSS valid units- px,em,ex)
false,		// RightToLeft display of the sub menus
false,		// BottomToTop display of the sub menus
0,		// X SubMenuOffset (pixels)
0,		// Y SubMenuOffset
'11em',		// Width (values in CSS valid units - px,em,ex) (matters for main menu with 'vertical' ItemsArrangement only)
'MM',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
],[
// SUB-MENUS FEATURES
0,		// X SubMenuOffset (pixels)
-5,		// Y SubMenuOffset
'auto',		// Width ('auto',values in CSS valid units - px,em,ex)
'100',		// MinWidth ('pixels') (matters/useful if Width is set 'auto')
'300',		// MaxWidth ('pixels') (matters/useful if Width is set 'auto')
'SM',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
]];
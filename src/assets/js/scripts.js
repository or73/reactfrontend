const $_regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      $_regex_password = /^(?=.{6,20}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[~`!@#$%^&*()-_+={}[]|;:"<>,.\/?]W).*$/;
let $_state = false;


const
// ------------------------------------------------
// Clear email & password fields from Login Form
// ------------------------------------------------
    __clearLoginForm = () =>
        {
    const $_loginForm = $( '#OH_login_form' );
    $_loginForm[ 0 ].reset();
},
// ------------------------------------------------
// Navbar animation & styles
// ------------------------------------------------
    __navbar = () =>
        {
            $( '.nav-item' )
                .on( 'click',
                     function ()
                     {
                         console.log('... a navbar ITEM item has been pressed... this: ', $( this ));
                         $( '.nav-item' )
                             .removeClass( '__nav_item_active' );
                         $( this )
                             .addClass( '__nav_item_active' );
                     });
        },
// ------------------------------------------------
// Removes the __active class from all __breadcrumb_item, && add __active class to clicked __breadcrumb_item
// ------------------------------------------------
    __breadcrumb = () =>
            {
    $( '.__breadcrumb_item' )
        .on( 'click',
             function( event )
             {
                 console.log( '>>> A breadcrumb option has been pressed EVENT: ', event.target );
                 $( '#OH__breadcrumb a.__breadcrumb_item')
                     .removeClass( '__active' );
                 $( this )
                     .addClass( '__active' );
             } );
},

// ------------------------------------------------
// Preserves the label effect when focus is out of input field
// ------------------------------------------------
        __labelAnimation = () =>
            {
                $( '.form-group .__input_animation' )
                    .on( 'blur',
                         function ()
                         {
                             if ( $( this ).val() !== '' )
                             {
                                 $( this )
                                     .siblings( 'label' )
                                     .addClass( '__active' );
                             }
                             else
                             {
                                 $( this )
                                     .siblings( 'label' )
                                     .removeClass( '__active' );
                             }
                         } );
            },

// ------------------------------------------------
// Add remove __active class from user_status
// ------------------------------------------------
        __entityStatus = () =>
            {
                $( '.__user_status_item')
                    .on( 'click',
                         function ()
                         {
                             console.log( '>>> A button has been pressed: ', $( this ) );
                             // ------------- REMOVE __active CLASS - Remove __active class from all __user_status_item
                             $( '.__user_status_item' )
                                 .removeClass( '__active' );

                             // ------------- HIDE span - Hide all __user_status_item span
                             $( '.__user_status_item span')
                                 .prop( 'hidden', true)
                                 .removeClass( '__circle' );

                             // ------------- UN-CHECK input - Un-Check property from all input tags
                             $( '.__user_status_item input')
                                 .prop( 'checked', false );

                             // ------------- CHECK current input - Check property to current __user_status_item
                             $( this )
                                 .children()
                                 .find( 'input' )
                                 .prop( 'checked', true);

                             // ------------- ADD __active CLASS - Add __active class to current __user_status_item
                             $( this )
                                 // .parent()
                                 // .find( 'div' )
                                 .addClass( '__active' );

                             // ------------- UN-HIDE span - Un-hide property to current __user_status_item span
                             $( this )
                                 .find( 'span' )
                                 .prop( 'hidden', false )
                                 .addClass( '__circle' );
                         })

                // $( '.__user_status_item')
                    .on( 'mouseover',
                         function ()
                         {
                             if ( !$( this ).hasClass( '__active' ) )
                             {
                                 $( this )
                                     .find( 'span' )
                                     .prop( 'hidden', false )
                                     .addClass( '__circle' );
                             }
                         })

                // $( '.__user_status_item')
                    .on( 'mouseleave',
                         function ()
                         {
                             if ( !$( this ).hasClass( '__active' ) )
                             {
                                 $( this )
                                     .find( 'span' )
                                     .prop( 'hidden', true )
                                     .removeClass( '__circle' );
                             }
                         });
            },

// ------------------------------------------------
// Show/Hide the password content
// ------------------------------------------------
        __toggle = () =>
            {

    if ( $_state )
    {
        $( '#OH__password' )
            .prop( 'type', 'password' );
    }
    else
    {
        $( '#OH__password' )
            .prop( 'type', 'text' );
    }
    $_state = !$_state;
},

// ------------------------------------------------
// Toggle the hide/show password icon
// ------------------------------------------------
        __passwordToggle = ( show ) =>
            {
                show
                    .classList
                    .toggle( 'fa-eye-slash' );
            },

// ------------------------------------------------
// Drag And Drop
// ------------------------------------------------
        __dragAndDrop = () =>
            {
                $( '#OH_drag_container_list, #OH_drop_container_list_coordinator, #OH_drop_container_list_users' )
                    .sortable(
                        {
                            connectWith: '.__connected_sortable'
                        }
                    )
                    .disableSelection();
            },

// ------------------------------------------------
// Drag And Drop
// ------------------------------------------------
        __validate_login_fields = () =>
            {
                const $_email       = $( '#OH__email' ),
                      $_password    = $( '#OH__password' ),
                      $_email_msg   = $( '#OH_email_validation_message' ),
                      $_password_msg= $( '#OH_password_validation_message' ),
                      $_submitButton= $( '#OH_logging_button_submit' );

                $_email
                    .on( 'keyup',
                         function ()
                         {
                             if ( !$_regex_email.test( $( this ).val() ) )
                             {
                                 console.log('XXX ERROR: Input an invalid email format');
                                 $_email_msg
                                     .html( 'Invalid email format' )
                                     .toggleClass( '__text_success, __text_danger' );
                                 $_submitButton
                                     .prop( 'disabled',
                                            true );
                             }
                             else
                             {
                                 console.log('A valid email has been input - email: ', $( this ).val() );
                                 console.log('PASSWORD: ', $_password.val() );
                                 $_email_msg
                                     .html( 'Valid email format' )
                                     .toggleClass( '__text_danger, __text_success' );
                                 if ( $_regex_password.test( String( $_password.val() ) ) )
                                 {
                                     $_submitButton
                                         .prop( 'disabled',
                                                false );
                                 }
                             }
                         } );

                $_password
                    .on( 'keyup',
                         function ()
                         {
                             if ( !$_regex_password.test( $( this ).val() ) )
                             {
                                 console.log('XXX ERROR: Input an invalid password format');
                                 $_password_msg
                                     .html( 'Invalid password format' )
                                     .toggleClass( '__text_success, __text_danger' );
                                 $_submitButton
                                     .prop( 'disabled',
                                            true );
                                 // At least one number
                                 // At least one upper character
                                 // At least one special character
                                 // At least one small character
                             }
                             else
                             {
                                 console.log('A valid password format has been input: ', $( this ).val() );
                                 console.log('EMAIL: ', $_email.val() );
                                 $_password_msg
                                     .html( 'Valid password format' )
                                     .toggleClass( '__text_danger, __text_success' );
                                 if ( $_regex_email.test( String( $_email.val() ) ) )
                                 {
                                     $_submitButton
                                         .prop( 'disabled',
                                                false );
                                 }
                             }
                         } );
            };

$( function ( methodName )
  {
      console.log( 'methodName: ', methodName );

      // __clearLoginForm();   // Clear login fields

      // __navbar();   // Navbar effects
      //
      // __validate_login_fields();    // Validate email & password
      //
      // __breadcrumb();   // Create breadcrumb
      //
      // __labelAnimation();   // Input && Label animation
      //
      // __entityStatus(); // Toggle button
      //
      // __dragAndDrop();  // Drag && Drop
  });

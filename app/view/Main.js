Ext.define('Calculadora.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'formcalculadora',
    config: {
        
        items: [
          {
            xtype: 'fieldset',
            title: 'Calculadora',
            items: [
                {
                  xtype: 'numberfield',
                  label: 'Número 1',
                  labelWrap: true,
                  name: 'numero1',
                  placeHolder: 'Ingrese el primer número'
                },
                {
                  xtype: 'numberfield',
                  label: 'Número 2',
                  labelWrap: true,
                  name: 'numero2',
                  placeHolder: 'Ingrese el segundo número',
                  required: true
                },
                {
                  xtype: 'selectfield',
                  label: 'Operación',
                  labelWrap: true,
                  name: 'operacion',
                  options: [{
                      text: 'Suma',
                      value: '+'
                  }, {
                      text: 'Resta',
                      value: '-'
                  }, {
                      text: 'Multiplicación',
                      value: '*'
                  }, {
                      text: 'División',
                      value: '/'
                  }],
                }
            ]
          },
          {
             xtype: 'button',
             itemId: 'btn_calcular',
             text: 'Calcular'
          }
        ],
        listeners:[{
           fn: 'onCalcular',
           event: 'tap',
           delegate: '#btn_calcular'
        }]
    },
    
  onCalcular: function(btn) {
    var formObj = btn.up('formcalculadora');
    var formData = formObj.getValues();
    var numero1 = parseInt(formData.numero1);
    var numero2 = parseInt(formData.numero2);
    var resultado;
    
    switch (formData.operacion) {
      case '+': resultado = numero1+numero2
              break;
      case '-': resultado = numero1-numero2;
              break;
      case '*': resultado = numero1*numero2;
              break;
      case '/': resultado = numero1/numero2;
              break;
    }
    Ext.Msg.alert("El resultado es: " + resultado);
  }
});

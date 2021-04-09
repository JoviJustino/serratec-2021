// O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo uma concentração ideal para desinfecção, 
// que é de 70%. Para ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros
//, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.

const  prompt  =  require ( 'prompt-sync' ) ( ) ;

const  ml  =  prompt ( 'Digite a capacidade da garrafa em milimetros:' ) ;

  const alcool  =  ml  *  0.7 ;
   const gel =  ml  *  0.3 ;

console . log ( `Precisará de ${ alcool } ml de álcool e ${ gel } ml de gel para preencher o vasilhame` ) ;
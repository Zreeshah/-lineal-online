import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { IdCard, AlertTriangle, FileText, MapPin, Phone, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { getRelatedArticles, createContextualLink } from '@/utils/internalLinks';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CanonicalLink from '@/components/CanonicalLink';

const LostDNIBlogPost: React.FC = () => {
  const currentUrl = "/blog/perdido-dni";
  const relatedArticles = getRelatedArticles(currentUrl, 2);
  const homepageLink = createContextualLink(relatedArticles[0]);
  
  return (
    <>
      <Helmet>
        <title>He Perdido el DNI: Qué Hacer y Cómo Renovar el DNI si lo He Perdido</title>
        <meta name="description" content="¿Has perdido el DNI y no sabes qué hacer? Aprende paso a paso cómo denunciar la pérdida o robo del DNI y cómo renovarlo rápidamente. Guía completa y actualizada." />
        <meta name="keywords" content="he perdido el DNI, perdí el DNI, qué hacer si he perdido el DNI, renovar DNI perdido, denuncia pérdida DNI, DNI urgente" />
        
        <link rel="canonical" href="https://regla.onl/blog/perdido-dni" />
        
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <CanonicalLink 
        customUrl="https://regla.onl/blog/perdido-dni" 
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container py-8">
          <Link to="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline mx-4">
            <ArrowLeft size={16} className="mr-1" />
            Volver a la página principal
          </Link>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-6">
                <img alt="Persona preocupada porque ha perdido su DNI" loading="lazy" width="800" height="400" src="/lovable-uploads/be7737c1-5845-4b0b-8686-ba2d8a55c4e3.jpg" className="w-full h-64 rounded-lg mb-4 object-cover" />
                <p className="text-sm text-gray-500 italic">Imagen representativa: Pérdida de DNI</p>
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-gray-800">He Perdido el DNI: Qué Hacer y Cómo Renovar el DNI si lo He Perdido</h1>
              
              <p className="mb-6 text-gray-700">
                ¿<strong>He perdido el DNI</strong> y no sabes qué hacer? Perder el Documento Nacional de Identidad (DNI) puede ser estresante, especialmente si <strong>lo necesitas urgente</strong>. <span dangerouslySetInnerHTML={{
                __html: homepageLink
              }} /> En esta guía completa, te explicamos paso a paso <strong>qué hacer si he perdido el DNI</strong>, cómo denunciar la pérdida o robo, y cómo renovarlo rápidamente.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tabla de Contenidos</h2>
                <ul className="list-disc pl-6 space-y-2 text-blue-600">
                  <li><a href="#que-es-dni" className="hover:underline">¿Qué es el DNI y Por Qué es Importante?</a></li>
                  <li><a href="#que-hacer" className="hover:underline">Qué Hacer si He Perdido el DNI: Pasos Clave</a></li>
                  <li><a href="#extranjero" className="hover:underline">He Perdido el DNI en el Extranjero: ¿Qué Hago?</a></li>
                  <li><a href="#denunciar" className="hover:underline">Cómo Denunciar el Robo del DNI</a></li>
                  <li><a href="#renovar" className="hover:underline">Cómo Renovar el DNI si lo He Perdido</a></li>
                  <li><a href="#multas" className="hover:underline">Multas por Perder el DNI: ¿Existen?</a></li>
                  <li><a href="#conclusion" className="hover:underline">Conclusión</a></li>
                </ul>
              </div>
              
              <section id="que-es-dni" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <IdCard className="mr-2 text-blue-600" size={24} />
                  ¿Qué es el DNI y Por Qué es Importante?
                </h2>
                
                <p className="mb-4 text-gray-700">
                  El <strong>DNI</strong> (Documento Nacional de Identidad) es un documento oficial emitido por la Dirección General de Policía que acredita la identidad de los ciudadanos españoles. Es obligatorio para mayores de 14 años y esencial para trámites como:
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Votar en elecciones.</li>
                  <li>Realizar gestiones bancarias.</li>
                  <li>Contraer matrimonio.</li>
                  <li>Viajar dentro de la Unión Europea.</li>
                  <li>Firmar contratos o documentos legales.</li>
                </ul>
                
                <p className="text-gray-700">
                  Perder el DNI puede complicar estas gestiones, por lo que es crucial actuar rápido si <strong>he perdido el DNI y lo necesito urgente</strong>. A continuación, te explicamos cómo proceder.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <img src="https://picsum.photos/seed/dnicard/600/300" alt="Documento Nacional de Identidad español" className="w-full h-48 object-cover rounded-lg mb-2" />
                  <p className="text-sm text-gray-600 italic">Un DNI español: documento esencial para todos los ciudadanos</p>
                </div>
              </section>
              
              <section id="que-hacer" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <CheckCircle2 className="mr-2 text-blue-600" size={24} />
                  Qué Hacer si He Perdido el DNI: Pasos Clave
                </h2>
                
                <p className="mb-4 text-gray-700">
                  Si <strong>perdí el DNI</strong>, no te preocupes. Sigue estos pasos para resolver la situación de manera efectiva:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">1. Denunciar la Pérdida o Robo del DNI</h3>
                  
                  <p className="mb-2 text-gray-700">
                    Lo primero que debes hacer si <strong>he perdido el DNI</strong> o sospechas que te lo han robado es denunciarlo. Aunque no es obligatorio, es altamente recomendable para evitar usos fraudulentos. Puedes denunciar de varias formas (detalladas más adelante).
                  </p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4 flex items-start">
                    <AlertTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 text-sm">
                      <strong>Consejo</strong>: La Guardia Civil sugiere esperar 2-3 días antes de renovar, ya que el DNI podría aparecer en casa. Sin embargo, si <strong>lo necesitas urgente</strong>, actúa de inmediato.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">2. Solicitar una Cita para Renovar el DNI</h3>
                  
                  <p className="mb-2 text-gray-700">
                    Una vez denunciada la pérdida o robo, pide una cita previa para renovar el DNI:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li><strong>Online</strong>: Accede a la web oficial <a href="https://www.citapreviadnie.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.citapreviadnie.es</a>.</li>
                    <li><strong>Teléfono</strong>: Llama al 060 para gestionar tu cita.</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Algunas personas, como mayores de 70 años, menores de edad o personas con discapacidad, pueden renovar sin cita previa en ciertas oficinas, siempre que acudan en un horario razonable.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">3. Reunir la Documentación Necesaria</h3>
                  
                  <p className="mb-2 text-gray-700">
                    Para <strong>renovar el DNI si lo he perdido</strong>, necesitarás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Una fotografía reciente en color (26x32 mm, fondo blanco).</li>
                    <li>El justificante de la denuncia (si aplica).</li>
                    <li>Si eres menor de 14 años, debes ir acompañado por un tutor legal.</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Con estos pasos completados, obtendrás tu nuevo DNI en pocos días.
                  </p>
                </div>
              </section>
              
              <section id="extranjero" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <MapPin className="mr-2 text-blue-600" size={24} />
                  He Perdido el DNI en el Extranjero: ¿Qué Hago?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="mb-4 text-gray-700">
                      Si <strong>he perdido el DNI</strong> fuera de España, sigue estos pasos:
                    </p>
                    
                    <ol className="list-decimal pl-6 mb-4 text-gray-700">
                      <li className="mb-2"><strong>Denuncia la pérdida o robo</strong>: Acude a la policía local o al consulado español más cercano.</li>
                      <li className="mb-2"><strong>Solicita un documento provisional</strong>: En el consulado o embajada, pide un salvoconducto o pasaporte temporal para regresar a España.</li>
                      <li className="mb-2"><strong>Renueva el DNI al volver</strong>: Una vez en España, solicita una cita para tramitar un nuevo DNI.</li>
                    </ol>
                    
                    <p className="text-gray-700">
                      Actúa rápido para evitar complicaciones, especialmente si <strong>he perdido el DNI y lo necesito urgente</strong> para viajar.
                    </p>
                  </div>
                  
                  <div>
                    <img src="https://picsum.photos/seed/consulado/600/400" alt="Consulado español en el extranjero" className="w-full h-64 object-cover rounded-lg" />
                    <p className="text-sm text-gray-500 italic mt-2">Consulado español: tu punto de apoyo en el extranjero</p>
                  </div>
                </div>
              </section>
              
              <section id="denunciar" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <ShieldAlert className="mr-2 text-blue-600" size={24} />
                  Cómo Denunciar el Robo del DNI
                </h2>
                
                <p className="mb-4 text-gray-700">
                  Si crees que tu DNI fue robado, denunciarlo es fundamental para proteger tu identidad. Aquí tienes las opciones disponibles:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Denuncia en Persona</h3>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Dirígete a una comisaría de la Policía Nacional o un cuartel de la Guardia Civil.</li>
                    <li>Proporciona tus datos personales y detalles del robo.</li>
                    <li>Recibirás un justificante de la denuncia, necesario para renovar el DNI.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Denuncia Online</h3>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Accede a la <strong>Oficina Virtual de Denuncias</strong> de la Policía Nacional (<a href="https://denuncias.policia.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">denuncias.policia.es</a>).</li>
                    <li>Completa el formulario con tus datos y la descripción del incidente.</li>
                    <li>Obtendrás un número de referencia. Debes firmar la denuncia en persona en una comisaría dentro de las <strong>48 horas</strong> para que sea válida.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Denuncia por Teléfono</h3>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Si eres turista extranjero o no puedes acudir en persona, llama al <strong>902 102 112</strong>.</li>
                    <li>Igual que en la denuncia online, deberás confirmar la denuncia en una comisaría dentro de <strong>48 horas</strong>.</li>
                  </ul>
                </div>
              </section>
              
              <section id="renovar" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FileText className="mr-2 text-blue-600" size={24} />
                  Cómo Renovar el DNI si lo He Perdido
                </h2>
                
                <p className="mb-4 text-gray-700">
                  Para <strong>renovar el DNI si lo he perdido</strong>, sigue estos pasos una vez que tengas la cita:
                </p>
                
                <ol className="list-decimal pl-6 mb-6 text-gray-700">
                  <li className="mb-2">Acude a la comisaría en la fecha asignada.</li>
                  <li className="mb-2">Presenta la documentación requerida (foto y justificante de denuncia, si aplica).</li>
                  <li className="mb-2">Te tomarán las huellas dactilares y procesarán el nuevo DNI.</li>
                  <li className="mb-2">Paga la tasa de <strong>12 euros</strong> (no hay descuentos por pérdida o robo).</li>
                </ol>
                
                <p className="mb-6 text-gray-700">
                  El nuevo DNI estará listo en unos días, dependiendo de la oficina.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">¿Puedo Modificar una Cita para el DNI?</h3>
                  
                  <p className="mb-2 text-gray-700">
                    Sí, puedes modificar, revisar o cancelar tu cita en <a href="https://www.citapreviadnie.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.citapreviadnie.es</a>:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Selecciona la opción <strong>"Gestión de Citas"</strong>.</li>
                    <li>Introduce tus datos personales.</li>
                    <li>Elige <strong>"Modificar cita"</strong>, selecciona una nueva fecha y confirma.</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Esta funcionalidad facilita ajustar tu cita si <strong>he perdido el DNI y lo necesito urgente</strong>.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Coste de Renovar el DNI</h3>
                  
                  <p className="text-gray-700">
                    El precio para <strong>renovar el DNI si lo he perdido</strong> es de <strong>12 euros</strong>, independientemente de si fue por pérdida o robo. No hay descuentos disponibles, según la normativa actual.
                  </p>
                </div>
              </section>
              
              <section id="multas" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <AlertTriangle className="mr-2 text-blue-600" size={24} />
                  Multas por Perder el DNI: ¿Existen?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-4 text-gray-700">
                      Buenas noticias: <strong>no hay multa por perder el DNI</strong> en la mayoría de los casos, ya que es algo que puede ocurrir accidentalmente. Sin embargo, según el <strong>Artículo 37 de la Ley Orgánica de Seguridad Ciudadana</strong>, perder el DNI tres o más veces en un año puede considerarse negligencia y acarrear una sanción de <strong>100 a 600 euros</strong>.
                    </p>
                    
                    <p className="mb-4 text-gray-700">
                      Para evitar problemas, renueva tu DNI lo antes posible si <strong>perdí el DNI</strong>.
                    </p>
                  </div>
                  
                  <div>
                    <img src="https://picsum.photos/seed/multa/600/400" alt="Concepto de multa administrativa" className="w-full h-64 object-cover rounded-lg" />
                    <p className="text-sm text-gray-500 italic mt-2">Las multas solo aplican en casos de negligencia repetida</p>
                  </div>
                </div>
              </section>
              
              <section id="conclusion" className="mb-4">
                <RelatedArticlesSection currentUrl={currentUrl} />
                
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Conclusión</h2>
                
                <p className="mb-4 text-gray-700">
                  Si <strong>he perdido el DNI</strong>, la clave es actuar con rapidez: denuncia la pérdida o robo, solicita una cita previa y reúne los documentos necesarios para renovarlo. Ya sea en España o en el extranjero, con esta guía puedes resolver la situación sin estrés, incluso si <strong>he perdido el DNI y lo necesito urgente</strong>. Recuerda que el DNI es esencial para múltiples trámites, así que no dejes pasar el tiempo.
                </p>
                
                <p className="text-gray-700">
                  ¿Necesitas más ayuda con trámites administrativos? Explora nuestro sitio para encontrar guías detalladas sobre renovaciones, denuncias y otros procesos en España. ¡Recupera tu tranquilidad hoy mismo!
                </p>
              </section>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LostDNIBlogPost;

import React from 'react';
import { Button, Card } from '@nextui-org/react';

function LandingPage() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <img src="path/to/your/logo.png" alt="Carlee Logo" className="h-16" />
        <div className="space-x-4">
          <Button auto flat className="bg-white text-blue-600">Connexion</Button>
          <Button auto flat className="bg-white text-blue-600">Inscription</Button>
        </div>
      </header>

      {/* Main Banner */}
      <section className="bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Carlee</h1>
        <p className="text-xl">Le carnet de santé de ta voiture</p>
      </section>

      {/* How it works */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-12">Comment ça marche ?</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-4xl mb-2">1</div>
            <h3 className="text-xl font-semibold">Inscription Facile</h3>
            <p>Créez votre compte rapidement et en toute simplicité en quelques étapes.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">2</div>
            <h3 className="text-xl font-semibold">Personnalisation</h3>
            <p>Ajoutez les informations spécifiques à vos véhicules pour une gestion optimale.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">3</div>
            <h3 className="text-xl font-semibold">Notification</h3>
            <p>Recevez des rappels pour les entretiens, assurances, etc.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">4</div>
            <h3 className="text-xl font-semibold">Historique Accessible</h3>
            <p>Consultez facilement l’historique de tous vos véhicules.</p>
          </div>
        </div>
      </section>

      {/* Why choose Carlee */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-bold mb-12">Pourquoi choisir Carlee ?</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-4xl mb-2">💼</div>
            <h3 className="text-xl font-semibold">Gain de temps</h3>
            <p>Plus besoin de chercher vos informations, tout est centralisé.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="text-xl font-semibold">Sécurité</h3>
            <p>Vos données sont sécurisées et accessibles en tout temps.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-xl font-semibold">Valeur Ajoutée</h3>
            <p>Un suivi complet de vos véhicules pour une meilleure durée de vie.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-12">Ils l'ont déjà essayé</h2>
        <div className="flex justify-center space-x-8">
          <Card className="max-w-xs">
            <Card.Body>
              <img src="path/to/avatar1.png" alt="Avatar 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Emma Richard</h3>
              <p className="text-center">"Carlee m'a permis de mieux organiser les entretiens de ma voiture. L'interface est simple et intuitive."</p>
            </Card.Body>
          </Card>
          <Card className="max-w-xs">
            <Card.Body>
              <img src="path/to/avatar2.png" alt="Avatar 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Jacques Prairie</h3>
              <p className="text-center">"Carlee m'a évité des amendes grâce aux rappels pour les entretiens. Vraiment un gain de temps !"</p>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-lg">Suivez-nous !</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">Twitter</a>
              <a href="#" className="text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg">Contactez-nous</h3>
            <p>support@carlee.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
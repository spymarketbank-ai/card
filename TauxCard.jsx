import React from 'react';

const TauxCard = ({ taux_realise = 85, taux_prevu = 100, titre = "Performance Mensuelle" }) => {
  const pourcentage = (taux_realise / taux_prevu) * 100;
  const couleur = pourcentage >= 100 ? '#fbbf24' : pourcentage >= 75 ? '#60a5fa' : '#f87171';

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '30px',
      border: 'none',
      boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
      maxWidth: '400px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Gradient de fond décoratif */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle, ${couleur}40 0%, transparent 70%)`,
        pointerEvents: 'none'
      }} />

      {/* Titre */}
      <h3 style={{
        margin: '0 0 25px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: '#fff',
        position: 'relative'
      }}>
        {titre}
      </h3>

      {/* Conteneur des taux */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        position: 'relative'
      }}>
        {/* Taux Réalisé */}
        <div style={{
          flex: 1,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: couleur,
            marginBottom: '5px'
          }}>
            {taux_realise}%
          </div>
          <div style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '500'
          }}>
            Réalisé
          </div>
        </div>

        {/* Séparateur */}
        <div style={{
          width: '2px',
          height: '60px',
          background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
        }} />

        {/* Taux Prévu */}
        <div style={{
          flex: 1,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '5px'
          }}>
            {taux_prevu}%
          </div>
          <div style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '500'
          }}>
            Prévu
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div style={{
        position: 'relative',
        height: '12px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '15px'
      }}>
        <div style={{
          height: '100%',
          width: `${Math.min(pourcentage, 100)}%`,
          background: `linear-gradient(90deg, ${couleur}, #ffffff)`,
          borderRadius: '10px',
          transition: 'width 1s ease-out',
          boxShadow: `0 0 20px ${couleur}`
        }} />
      </div>

      {/* Pourcentage de réalisation */}
      <div style={{
        textAlign: 'center',
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '600',
        position: 'relative'
      }}>
        {pourcentage.toFixed(1)}% de l'objectif atteint
      </div>

      {/* Badge de statut */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '6px 14px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255, 255, 255, 0.4)`,
        fontSize: '12px',
        color: '#ffffff',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {pourcentage >= 100 ? '✓ Objectif atteint' : pourcentage >= 75 ? 'En bonne voie' : 'En cours'}
      </div>
    </div>
  );
};

// Exemple avec un seul card
export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <TauxCard 
        taux_realise={85} 
        taux_prevu={100} 
        titre="Performance Mensuelle"
      />
    </div>
  );
}

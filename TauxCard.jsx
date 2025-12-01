import React from 'react';

const TauxCard = ({ taux_realise = 85, taux_prevu = 100, titre = "Performance Mensuelle" }) => {
  const pourcentage = (taux_realise / taux_prevu) * 100;
  const couleur = pourcentage >= 100 ? '#10b981' : pourcentage >= 75 ? '#3b82f6' : '#f59e0b';

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Titre */}
      <h3 style={{
        margin: '0 0 25px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: '#1f2937',
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
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            Réalisé
          </div>
        </div>

        {/* Séparateur */}
        <div style={{
          width: '2px',
          height: '60px',
          background: 'linear-gradient(180deg, transparent, #e5e7eb, transparent)'
        }} />

        {/* Taux Prévu */}
        <div style={{
          flex: 1,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#6b7280',
            marginBottom: '5px'
          }}>
            {taux_prevu}%
          </div>
          <div style={{
            fontSize: '14px',
            color: '#9ca3af',
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
        background: '#f3f4f6',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '15px'
      }}>
        <div style={{
          height: '100%',
          width: `${Math.min(pourcentage, 100)}%`,
          background: `linear-gradient(90deg, ${couleur}, ${couleur}dd)`,
          borderRadius: '10px',
          transition: 'width 1s ease-out',
          boxShadow: `0 0 15px ${couleur}60`
        }} />
      </div>

      {/* Pourcentage de réalisation */}
      <div style={{
        textAlign: 'center',
        fontSize: '16px',
        color: '#4b5563',
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
        background: `${couleur}15`,
        border: `1px solid ${couleur}40`,
        fontSize: '12px',
        color: couleur,
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
      background: '#f3f4f6',
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

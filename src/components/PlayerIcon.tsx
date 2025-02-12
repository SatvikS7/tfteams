import React, { useEffect, useState } from "react";

const SummonerIcon = ({ profileIconId }: { profileIconId: number | null }) => {
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    // Fetch the latest version from Data Dragon
    const fetchVersion = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions = await response.json();
        setVersion(versions[0]); // Use the latest version
      } catch (error) {
        console.error("Failed to fetch Data Dragon version:", error);
      }
    };

    fetchVersion();
  }, []);

  if (!profileIconId || !version) {
    return null;
  }

  const iconUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;

  return <img src={iconUrl} alt="Summoner Icon" width={64} height={64} />;
};

export default SummonerIcon;
